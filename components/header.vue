<template lang="pug">
    .header
        n-link.header__logo(:to="('/')")
            img(src="../assets/logo.svg")
        .header__list
            n-link.header__item(:to="('/#about')") Про нас
            n-link.header__item(:to="('/purchase/all')" :class="{'show': show === 'purchase'}") Нерухомість
            n-link.header__item(:to="('/commerce/all')" :class="{'show': show === 'commerce'}") Готовий бізнес
            n-link.header__item(:to="('/#request')") Залишити заявку
        a.header__number(href="tel:+380679986959") 
            span.header__number-icon
            span +38(067)-998-69-59
</template>
<script>
export default {
  props: {
    show: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--primary-color);
  height: 10vh;
  padding: 0 3.472vw;
  background-color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;

  &__logo {
    height: 5.556vw;
    width: 12.431vw;
    transition: all 700ms ease;
    & img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
    &:hover {
      transform: scale(0.95);
    }
  }
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &__item:not(:last-child) {
    margin-right: 2.083vw;
  }
  &__item {
    transition: all 500ms ease;
    cursor: pointer;
    font-family: "Gilroy";
    font-weight: 400;
    font-size: 1.111vw;
    line-height: 1.25;
    &.show {
      color: var(--accent-main-color);
    }
  }
  &__item:hover {
    color: var(--hover-color);
  }
  &__number {
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 700ms ease;
    font-size: 1.111vw;
    font-weight: 400;
    &-icon {
      display: block;
      width: 1.667vw;
      height: 1.667vw;
      background-image: url(../assets/svg/mobile.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 0.486vw;
    }
    &:hover {
      color: var(--hover-color);
    }
    &:hover &-icon {
      background-image: url(../assets/svg/mobileHover.svg);
      // fill: var(--accent-main-color);
    }
  }
}
</style>
