<template lang="pug">
    .popup 
        .popup__wrap
            .popup__title Дякуємо! 
            .popup__subtitle Ваші дані успішно відправлені
            .popup__text Найближчим часом наші менеджери зв'яжуться з Вами!
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
    width: 33.472vw;
    height: 22.778vw;
    background-color: #fff;
    border-radius: 0.694vw;
    padding: 4.167vw;
    text-align: center;
  }
  &__title {
    margin-bottom: 0.694vw;
  }
  &__subtitle {
    margin-bottom: 1.389vw;
  }
  &__title,
  &__subtitle {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 2.083vw;
    line-height: 1.33;
  }

  &__text {
    color: var(--primary-color);
    font-weight: 400;
    font-size: 1.389vw;
    line-height: 1.4;
  }
}
</style>
