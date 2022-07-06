<template lang="pug">
    .popup 
        .popup__wrap
            p.popup__title {{ $t('success_popup.title') }} 
            p.popup__subtitle {{ $t('success_popup.subtitle') }} 
            p.popup__text {{ $t('success_popup.text') }} 
</template>
<script>
export default {
  methods: {
    closePopup() {
      this.$parent.successPopup = false;
    },
  },
  mounted() {
    setTimeout(this.closePopup, 2300);
  },
};
</script>
<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  &__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 78.75vw;
    background-color: #fff;
    border-radius: 3.125vw;
    padding: 12.5vw 6.563vw;
    text-align: center;

    @media screen and (min-width: 768px) {
      width: 45.573vw;
      height: 33.073vw;
      padding: 5.208vw;
      border-radius: 1.302vw;
    }
    @media screen and (min-width: 1240px) {
      width: 33.472vw;
      height: 22.778vw;
      padding: 4.167vw;
      border-radius: 0.694vw;
    }
  }
  &__title {
    margin-bottom: 5vw;

    @media screen and (min-width: 768px) {
      margin-bottom: 2.604vw;
    }
    @media screen and (min-width: 1240px) {
      margin-bottom: 0.694vw;
    }
  }
  &__subtitle {
    margin-bottom: 1.25vw;
    @media screen and (min-width: 768px) {
      margin-bottom: 1.302vw;
    }
    @media screen and (min-width: 1240px) {
      margin-bottom: 1.389vw;
    }
  }
  &__title,
  &__subtitle {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 7.5vw;
    line-height: 1.33;
    @media screen and (min-width: 768px) {
      font-size: 3.125vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 2.083vw;
    }
  }

  &__text {
    color: var(--primary-color);
    font-weight: 400;
    font-size: 5vw;
    line-height: 1.4;
    @media screen and (min-width: 768px) {
      font-size: 2.083vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 1.389vw;
    }
  }
}
</style>
