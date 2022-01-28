<template lang="pug">
    .popup(@click="closePopup")
        .popup__wrap
            h2.popup__title Оставить заявку
            label.popup__label Ваше имя
                input.popup__name(type="text" placeholder="Владислав" v-model="name")
            label.popup__label Номер телефона 
                input.popup__number(type="number" placeholder="0661234567" v-model="phone")
            button.popup__btn(@click="postRequestData") Отправить
            .popup__close
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
    closePopup(e) {
      if (
        e.target === e.currentTarget ||
        e.target.className === "popup__close"
      ) {
        this.$parent.showPopup = false;
      }
    },
    async postRequestData() {
      // this.clearInputs()
      // this.$parent.showPopup = false;
      let data = {
        name: this.name,
        phone: this.phone,
      };

      console.log(data);

      // const response = await this.$axios.post(`/clients`, data);
      // console.log(response);
    },
    clearInputs() {
      this.tel = "";
      this.name = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.4);
  &__wrap {
    width: 38.194vw;
    height: 29.167vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 3vw;
  }
  &__close {
    width: 1.042vw;
    height: 1.042vw;
    position: absolute;
    top: 1.042vw;
    right: 1.042vw;
    background-image: url(../assets/svg/cross.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &__title {
    display: inline-block;
    font-family: NotoSerif-Regular;
    color: var(--primary-color);
    font-size: 2.778vw;
    border-bottom: 0.347vw solid var(--primary-color);
  }
  &__label {
    display: block;
    color: var(--primary-color);
    margin-top: 2.083vw;
    margin-bottom: 0.694vw;
    & input {
      width: 100%;
      height: 3.125vw;
    }
  }
  &__btn {
    width: 8.333vw;
    height: 3.125vw;
    background-color: var(--bg-main-color);
    font-family: NotoSerif-Regular;
    color: #fff;
    font-size: 1.2vw;
    margin-top: 4vw;
    display: block;
    margin-left: auto;
  }
}
</style>
