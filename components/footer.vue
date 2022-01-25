<template lang="pug">
    .footer 
        a.footer__number(href="tel:+380679986959") 
            span.footer__number-icon
                //- img(src="../assets/svg/mobile.svg")
            span +380679986959
        p hello world
        n-link.footer__logo(:to="('/')")
            img(src="../assets/logo.png")
</template>
<style lang="scss" scoped>
.footer {
  height: 10vh;
  background-color: #fff;
  border-top: 1px solid var(--bg-main-color);
  display: flex;
  padding: 0 3.472vw;
  justify-content: space-between;
  align-items: center;
  &__logo {
    height: 3.556vw;
    transition: all 700ms ease;
    & img {
      height: 100%;
    }
    &:hover {
      transform: scale(0.95);
    }
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
        object-position: center;
      }
    }
    &:hover {
      color: var(--bg-main-color);
    }
    &:hover &-icon {
      background-image: url(../assets/svg/mobileHover.svg);
    }
  }
}
</style>
