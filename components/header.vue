<template lang="pug">
    .header
        n-link.header__logo(:to="('/')")
            img(src="../assets/logo.png")
        ul.header__list
            li.header__item 
                n-link.header__item-link.header__item-link-buy(:to="('/purchase')") Купить 
            li.header__item 
                n-link.header__item-link(:to="('/commerce')") Купить готовый бизнес 
            li.header__item(@click="scroll('request')") Подать заявку 
            li.header__item(@click="scroll('about')") О нас
        a.header__number(href="tel:+380679986959") 
            span.header__number-icon
                //- img(src="../assets/svg/symbol-defs.svg#mobile")
            span +380679986959
        .buy 
</template>
<script>
export default {
  methods: {
    scroll(name) {
      this.$parent.goto(name);
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
  background-image: linear-gradient(
    to right,
    rgba(223, 187, 159, 0.1),
    rgba(206, 187, 173, 0.1)
  );

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
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.042vw;
  }
  &__item:not(:last-child) {
    margin-right: 2.083vw;
  }
  &__item,
  &__item a {
    transition: all 500ms ease;
    cursor: pointer;
  }
  &__item:hover,
  &__item:hover a {
    color: var(--bg-main-color);
  }
  &__number {
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 700ms ease;
    &-icon {
      display: block;
      width: 1.242vw;
      height: 1.242vw;
      background-image: url(../assets/svg/mobile.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 0.486vw;
      & img {
        width: 100%;
        height: 100%;
        object-position: center;
      }
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
