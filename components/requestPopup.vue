<template lang="pug">
.popup(@click="closePopup")
    .popup__wrap
        h3.popup__title(v-html="$t('request.title')") 
        p.popup__label {{ $t('request.name') }}
        input.popup__input(type="text" v-model="name"  v-on:input="validate('name')" )
        p.popup__label {{ $t('request.number') }}
        input.popup__input(type="number" v-model="phone" v-on:input="validate('phone')")
        p.error-text(v-if="errorPhone") {{ $t('request.error') }}
        button.popup__btn(@click="postRequestData") {{ $t('request.send') }}
        button.popup__close
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
    closePopup(e) {
      if (
        e.target === e.currentTarget ||
        e.target.className === "popup__close"
      ) {
        this.$parent.showPopup = false;
      }
    },
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
          if (response) {
            this.$gtag("event", "request_send", data);
            this.leadTrack();
          }
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
    leadTrack() {
      fbq("track", "Lead");
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
  z-index: 20000;
  &__wrap {
    width: 90vw;
    min-height: 147.813vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 12.5vw 5vw;
    border-radius: 3.125vw;

    @media screen and (min-width: 768px) {
      width: 57.292vw;
      min-height: 57.292vw;
      padding: 5.208vw;
      border-radius: 1.302vw;
    }

    @media screen and (min-width: 1240px) {
      width: 40.278vw;
      min-height: 37.986vw;
      padding: 4.167vw;
      border-radius: 0.694vw;
    }
  }
  &__close {
    width: 6.25vw;
    height: 6.25vw;
    position: absolute;
    top: 6.25vw;
    right: 6.25vw;
    background-image: url(../assets/svg/cross.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    @media screen and (min-width: 768px) {
      width: 2.604vw;
      height: 2.604vw;
      top: 3.906vw;
      right: 4.948vw;
    }
    @media screen and (min-width: 1240px) {
      width: 1.389vw;
      height: 1.389vw;
      top: 2.778vw;
      right: 2.778vw;
    }
  }

  &__title {
    display: inline-block;
    color: var(--primary-color);
    font-size: 7.5vw;
    font-weight: 500;
    text-align: center;
    line-height: 1.33;

    @media screen and (min-width: 768px) {
      font-size: 3.125vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 2.083vw;
    }
  }
  &__label {
    display: block;
    color: var(--primary-color);
    margin-top: 6.25vw;
    font-weight: 500;
    font-size: 5vw;
    line-height: 1.25;
    margin-left: 3.125vw;
    @media screen and (min-width: 768px) {
      margin-top: 2.604vw;
      font-size: 2.083vw;
      margin-left: 1.302vw;
    }
    @media screen and (min-width: 1240px) {
      margin-top: 2.083vw;
      font-size: 1.111vw;
      margin-left: 0.694vw;
    }
  }
  &__input {
    width: 100%;
    height: 15.625vw;
    margin-top: 4.375vw;
    font-size: 4vw;
    border-radius: 1.875vw;
    border: 0.313vw solid rgba(54, 54, 54, 0.4);
    @media screen and (min-width: 768px) {
      height: 6.51vw;
      margin-top: 1.823vw;
      border-radius: 0.781vw;
      font-size: 2.083vw;
      border: 0.13vw solid rgba(54, 54, 54, 0.4);
    }
    @media screen and (min-width: 1240px) {
      height: 4.167vw;
      margin-top: 0.972vw;
      border-radius: 0.417vw;
      font-size: 1.111vw;
      border: 0.069vw solid rgba(54, 54, 54, 0.4);
    }
  }
  &__btn {
    font-family: Gilroy;
    font-weight: 700;
    width: 100%;
    height: 15.938vw;
    background-color: var(--accent-main-color);
    font-family: NotoSerif-Regular;
    color: #fff;
    font-size: 5vw;
    margin-top: 14.375vw;
    border-radius: 1.875vw;
    transition: all 500ms ease;
    &:hover {
      background-color: var(--hover-color);
    }
    @media screen and (min-width: 768px) {
      height: 6.641vw;
      font-size: 2.083vw;
      margin-top: 5.99vw;
      border-radius: 0.781vw;
    }
    @media screen and (min-width: 1240px) {
      height: 3.542vw;
      font-size: 1.2vw;
      margin-top: 2.778vw;
      border-radius: 0.417vw;
    }
  }
}
.error-text {
  color: var(--accent-main-color);
  font-family: Gilroy;
  font-size: 3.75vw;
  font-weight: 400;
  margin-top: 3.125vw;

  @media screen and (min-width: 768px) {
    font-size: 1.563vw;
    margin-top: 1.302vw;
  }
  @media screen and (min-width: 1240px) {
    font-size: 1.11vw;
    margin-top: 0.7vw;
  }
}
</style>
