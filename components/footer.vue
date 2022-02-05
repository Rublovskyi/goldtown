<template lang="pug">
    .footer 
        n-link.footer__logo(:to="('/')")
            img(src="../assets/logoLight.svg")
        a.footer__number(href="tel:+380679986959") 
            span.footer__number-icon
            span +38(067)9986959
</template>
<style lang="scss" scoped>
.footer {
  height: 9.722vw;
  background-color: var(--primary-color);
  display: flex;
  padding: 0 5.556vw;
  justify-content: space-between;
  align-items: center;
  &__logo {
    height: 4.653vw;
    transition: all 700ms ease;
    & img {
      height: 100%;
    }
    &:hover {
      transform: scale(0.95);
    }
  }
  &__number {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 700ms ease;
    font-size: 1.111vw;
    font-weight: 400;
    &-icon {
      display: block;
      width: 1.242vw;
      height: 1.242vw;
      background-image: url(../assets/svg/mobileLight.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 0.486vw;
      & img {
        width: 100%;
        object-position: center;
      }
    }
    &:hover {
      // color: var(--accent-main-color);
      transform: scale(1.1);
    }
    // &:hover &-icon {
    //   background-image: url(../assets/svg/mobileHover.svg);
    // }
  }
}
</style>
