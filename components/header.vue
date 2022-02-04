<template lang="pug">
    .header
        n-link.header__logo(:to="('/')")
            img(src="../assets/logo.png")
        .header__list
            n-link.header__item(:to="('/#about')") О нас
            n-link.header__item(:to="('/purchase')") Недвижимость 
            n-link.header__item(:to="('/commerce')") Готовый бизнес  
            n-link.header__item(:to="('/#request')") Подать заявку 
        a.header__number(href="tel:+380679986959") 
            span.header__number-icon
            span +380679986959
        .buy 
</template>
<script>
export default {
  methods: {},
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
  z-index: 1000;

  &__logo {
    height: 5.556vw;
    transition: all 700ms ease;
    & img {
      height: 100%;
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
  }
  &__item:hover {
    color: var(--bg-main-color);
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
      color: var(--bg-main-color);
    }
    &:hover &-icon {
      background-image: url(../assets/svg/mobileHover.svg);
      // fill: var(--bg-main-color);
    }
  }
}
.buy {
  width: 100%;
  height: 300px;
  position: absolute;
  background-color: var(--test);
  top: 10vh;
  left: 0;
  right: 0;
  opacity: 0;
  pointer-events: none;
}
// .header__item-link:hover .buy {
//   opacity: 1;
//   pointer-events: visible;
// }
</style>
