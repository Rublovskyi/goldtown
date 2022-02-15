<template lang="pug">
    .popup(@click="closePopup")
        .popup__wrap
            h2.popup__title Залишіть заявку і наш <br/> менеджер Вам перетелефонує
            .popup__label Ваше ім'я
            input.popup__input(type="text" v-model="name")
            .popup__label Номер телефону
            input.popup__input(type="number" v-model="phone")
            button.popup__btn(@click="postRequestData") Відправити
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
        this.$parent.successPopup = true;
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
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.4);
  &__wrap {
    width: 40.278vw;
    height: 37.986vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 4.167vw;
    border-radius: 0.694vw;
  }
  &__close {
    width: 1.389vw;
    height: 1.389vw;
    position: absolute;
    top: 2.778vw;
    right: 2.778vw;
    background-image: url(../assets/svg/cross.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &__title {
    display: inline-block;
    color: var(--primary-color);
    font-size: 2.083vw;
    font-weight: 500;
    text-align: center;
    line-height: 1.33;
  }
  &__label {
    display: block;
    color: var(--primary-color);
    margin-top: 2.083vw;
    font-weight: 500;
    font-size: 1.111vw;
    line-height: 1.25;
    margin-left: 0.694vw;
  }
  &__input {
    width: 100%;
    height: 4.167vw;
    margin-top: 0.972vw;
    border-radius: 0.417vw;
    border: 0.069vw solid rgba(54, 54, 54, 0.4);
  }
  &__btn {
    width: 100%;
    height: 3.542vw;
    background-color: var(--accent-main-color);
    font-family: NotoSerif-Regular;
    color: #fff;
    font-size: 1.2vw;
    margin-top: 2.778vw;
    border-radius: 0.417vw;
    transition: all 500ms ease;
    &:hover {
      background-color: var(--hover-color);
    }
  }
}
</style>
