<template lang="pug">
    .request
        .request__text Оставте заявку и наш <br/> менеджер Вам перезвонит
        .request__box 
            h2.request__box-title Оставить заявку
            label.request__box-label Ваше имя
                input.request__box-name(type="text" placeholder="Владислав" v-model="name")
            label.request__box-label Номер телефона
                input.request__box-number(type="number" placeholder="0661234567" v-model="phone")
            button.request__box-btn(@click="postRequestData") Отправить
        
</template>
<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  methods: {
    async postRequestData() {
      let data = {
        data: {
          name: this.name,
          phone: this.phone,
        },
      };
      try {
        const response = await this.$axios.post(`/api/clients`, data);
        this.clearInputs();
        this.$parent.showPopup = false;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    clearInputs() {
      this.phone = "";
      this.name = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.request {
  padding: 6.25vw 4.861vw;
  display: grid;
  grid-template-columns: 34.722vw 34.722vw;
  justify-content: space-around;
  background-image: linear-gradient(to top, #fff, rgba(187, 148, 119, 0.1)),
    url(../assets/test.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__text {
    display: inline-block;
    font-family: NotoSerif-Regular;
    color: var(--primary-color);
    font-size: 2.778vw;
    text-align: center;
    margin-top: 40%;
    height: 7.25vw;
    background-color: rgba(187, 148, 119, 0.5);
  }

  &__box {
    width: 31.25vw;
    height: 34.722vw;
    background-image: linear-gradient(
      to bottom,
      var(--text-team-name),
      rgb(223, 210, 196)
    );
    box-shadow: 0.694vw 0.694vw 0.556vw 0.139vw rgb(61, 49, 40);
    padding: 3vw;
    &-title {
      display: inline-block;
      font-family: NotoSerif-Regular;
      color: var(--primary-color);
      font-size: 2.778vw;
      border-bottom: 0.347vw solid var(--primary-color);
    }
    &-label {
      display: block;
      color: var(--primary-color);
      margin-top: 2.083vw;
      margin-bottom: 0.694vw;
      & input {
        width: 100%;
        height: 3.125vw;
      }
    }
    &-btn {
      background-color: #fff;
      font-family: NotoSerif-Regular;
      color: var(--bg-main-color);
      font-size: 1.5vw;
      margin-top: 5.556vw;
      padding: 0.694vw 1.389vw;
      display: block;
      margin-left: auto;
      transition: all 700ms ease;
      &:hover {
        color: #fff;
        background-color: var(--bg-main-color);
      }
    }
  }
}
</style>
