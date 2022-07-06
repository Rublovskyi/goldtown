<template lang="pug">
    .request
        .request__img-desctop
            img(src="~/assets/requestImg.svg" :alt="$t('request.img_alt')")
        .request__box 
            h3.request__box-title(v-html="$t('request.title')") {{ $t('request.title') }}
            p.request__box-label {{ $t('request.name') }}
            input.request__box-input(type="text" v-model="name" v-on:input="validate('name')")
            p.request__box-label {{ $t('request.number') }}
            input.request__box-input(type="number" v-model="phone" v-on:input="validate('phone')")
            p.error-text(v-if="errorPhone") {{ $t('request.error') }}
            button.request__box-btn(@click="postRequestData") {{ $t('request.send') }}
        .request__img
            img(src="~/assets/requestImg.svg" :alt="$t('request.img_alt')")
</template>
<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      errorPhone: false,
    };
  },
  methods: {
    validate(type) {
      if (
        (this.phone.length > 0 && this.phone.length < 9) ||
        this.phone.length > 13
      ) {
        this.errorPhone = true;
      } else {
        this.errorPhone = false;
      }
    },
    async postRequestData() {
      if (this.phone === "") {
        // this.errorPhone = "Потрібно ввести дані";
        this.errorPhone = true;
      } else if (this.errorPhone) {
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
@media screen and (max-width: 767.98px) {
  .request {
    padding: 18.75vw 5vw;

    &__img {
      display: block;
      overflow: hidden;
      height: 112.5vw;
      width: 100%;
      border-radius: 1.875vw;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    &__img-desctop {
      display: none;
    }

    &__box {
      margin-bottom: 9.375vw;
      &-title {
        display: inline-block;
        font-family: Gilroy;
        font-weight: 500;
        color: var(--primary-color);
        font-size: 7.5vw;
        line-height: 1.33;
      }
      &-label {
        display: block;
        color: var(--primary-color);
        margin-top: 9.375vw;
        font-weight: 500;
        font-size: 5vw;
        line-height: 1.25;
        margin-left: 3.125vw;
      }
      &-input {
        width: 100%;
        height: 15.625vw;
        margin-top: 4.375vw;
        border-radius: 1.875vw;
        border: 0.069vw solid rgba(54, 54, 54, 0.4);
        font-size: 4vw;
        padding: 0 4vw;
      }
      &-btn {
        font-family: Gilroy;
        font-weight: 700;
        background-color: var(--accent-main-color);
        color: #fff;
        font-size: 5vw;
        margin-top: 9.375vw;
        padding: 5vw 7.5vw;
        display: block;
        transition: all 700ms ease;
        border-radius: 1.875vw;

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
    font-size: 4.375vw;
    font-weight: 400;
    margin-top: 0.7vw;
  }
}
@media screen and (min-width: 768px) and (max-width: 1239.98px) {
  .request {
    padding: 7.813vw 4.688vw;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-around;
    &__img {
      display: none;
    }

    &__img-desctop {
      overflow: hidden;
      height: 48.307vw;
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
      padding-left: 3.906vw;
      &-title {
        display: inline-block;
        font-family: Gilroy;
        font-weight: 500;
        color: var(--primary-color);
        font-size: 3.125vw;
        line-height: 1.33;
      }
      &-label {
        display: block;
        color: var(--primary-color);
        margin-top: 2.083vw;
        font-weight: 500;
        font-size: 2.083vw;
        line-height: 1.25;
        margin-left: 0.694vw;
      }
      &-input {
        width: 100%;
        height: 6.51vw;
        margin-top: 0.972vw;
        border-radius: 0.781vw;
        border: 0.069vw solid rgba(54, 54, 54, 0.4);
        font-size: 2.083vw;
        padding: 0 2.083vw;
      }
      &-btn {
        font-family: Gilroy;
        font-weight: 700;
        background-color: var(--accent-main-color);
        color: #fff;
        font-size: 2.083vw;
        margin-top: 5.556vw;
        padding: 2.083vw 3.125vw;
        display: block;
        transition: all 700ms ease;
        border-radius: 0.781vw;

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
    font-size: 1.483vw;
    font-weight: 400;
    margin-top: 0.7vw;
  }
}
@media screen and (min-width: 1240px) {
  .request {
    padding: 8.333vw 5.556vw;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-around;
    &__img {
      display: none;
    }

    &__img-desctop {
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
        font-size: 1.111vw;
        padding: 0 1.111vw;
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
}
</style>
