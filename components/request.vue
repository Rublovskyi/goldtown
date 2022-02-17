<template lang="pug">
    .request
        .request__img
            img(src="~/assets/requestImg.png")
        .request__box 
            h2.request__box-title Залишіть заявку і наш <br/> менеджер зв'яжеться з Вами!
            .request__box-label Ваше ім'я
            input.request__box-input(type="text" v-model="name" v-on:input="validate('name')")
            p.error-text {{errorName}}
            .request__box-label Номер телефону
            input.request__box-input(type="number" v-model="phone" v-on:input="validate('phone')")
            p.error-text {{errorPhone}}
            button.request__box-btn(@click="postRequestData") Відправити
        
</template>
<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      errorName: "",
      errorPhone: "",
    };
  },
  methods: {
    validate(type) {
      if (type === "name") {
        if (
          (this.name.length > 0 && this.name.length < 3) ||
          this.name.length > 20
        ) {
          this.errorName = "Ім'я має містити від 2 до 20 літер";
        } else {
          this.errorName = "";
        }
      } else {
        if (
          (this.phone.length > 0 && this.phone.length < 9) ||
          this.phone.length > 13
        ) {
          this.errorPhone = "Телефон має містити від 9 до 13 цифр";
        } else {
          this.errorPhone = "";
        }
      }
    },
    async postRequestData() {
      if (this.name === "") {
        this.errorName = "Потрібно ввести дані";
      } else if (this.phone === "") {
        this.errorPhone = "Потрібно ввести дані";
      } else if (this.errorName.length !== 0 || this.errorPhone.length !== 0) {
        return;
      } else {
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
  padding: 8.333vw 5.556vw;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-around;

  &__img {
    overflow: hidden;
    height: 29.653vw;
    width: 100%;
    border-radius: 0.417vw;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__box {
    padding-left: 8.889vw;
    &-title {
      display: inline-block;
      font-family: Gilroy;
      font-weight: 500;
      color: var(--primary-color);
      font-size: 2.083vw;
      line-height: 1.33;
    }
    &-label {
      display: block;
      color: var(--primary-color);
      margin-top: 2.083vw;
      font-weight: 500;
      font-size: 1.111vw;
      line-height: 1.25;
      margin-left: 0.694vw;
    }
    &-input {
      width: 100%;
      height: 4.167vw;
      margin-top: 0.972vw;
      border-radius: 0.417vw;
      border: 0.069vw solid rgba(54, 54, 54, 0.4);
    }
    &-btn {
      font-family: Gilroy;
      font-weight: 700;
      background-color: var(--accent-main-color);
      color: #fff;
      font-size: 1.5vw;
      margin-top: 5.556vw;
      padding: 1.111vw 2.222vw;
      display: block;
      transition: all 700ms ease;
      border-radius: 0.417vw;

      &:hover {
        color: #fff;
        background-color: var(--hover-color);
      }
    }
  }
}
.error-text {
  color: var(--accent-main-color);
  font-family: Gilroy;
  font-size: 1.11vw;
  font-weight: 400;
  margin-top: 0.7vw;
}
</style>
