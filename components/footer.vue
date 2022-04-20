<template lang="pug">
    .footer 
        n-link.footer__logo(:to="('/')")
            img(src="../assets/logoLight.png")
        .footer__info
            a.footer__number(href="tel:+380984732501") 
                span.footer__number-icon
                span +380(98)473-25-01
            a.footer__address(href="/") 
                span.footer__address-icon
                span Київська обл. с.Святопетрівське <br/> вул.Богдана Хмельницького 1Б
</template>
<style lang="scss" scoped>
@media screen and (max-width: 767.98px) {
  .footer {
    // height: 218px;
    background-color: var(--primary-color);
    padding: 9.375vw 5vw;
    position: relative;
    z-index: 120;
    &__logo {
      display: block;
      height: 12.5vw;
      width: 49.375vw;
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
    &__info {
      margin-top: 9.375vw;
    }
    &__number,
    &__address {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all 700ms ease;
      font-size: 5vw;
      font-weight: 400;
      &-icon {
        display: block;
        width: 7.5vw;
        height: 7.5vw;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 2.5vw;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    &__number {
      margin-bottom: 3.125vw;
    }
    &__number-icon {
      background-image: url(../assets/svg/mobileLight.svg);
    }
    &__address-icon {
      background-image: url(../assets/svg/carbon_location.svg);
    }
  }
}
@media screen and (min-width: 768px) {
  .footer {
    // height: 12vh;
    background-color: var(--primary-color);
    display: flex;
    padding: 3.646vw 4.688vw;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 120;
    &__logo {
      height: 6.51vw;
      width: 23.307vw;
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
    &__number,
    &__address {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all 700ms ease;
      font-size: 2.083vw;
      font-weight: 400;
      &-icon {
        display: block;
        width: 3.125vw;
        height: 3.125vw;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 1.042vw;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    &__number {
      margin-bottom: 1.302vw;
    }
    &__number-icon {
      background-image: url(../assets/svg/mobileLight.svg);
    }
    &__address-icon {
      background-image: url(../assets/svg/carbon_location.svg);
    }
  }
}
@media screen and (min-width: 1440px) {
  .footer {
    padding: 2.639vw 5.556vw;

    &__logo {
      height: 3.653vw;
      width: 12.431vw;
    }
    &__number,
    &__address {
      font-size: 1.111vw;
      &-icon {
        width: 1.242vw;
        height: 1.242vw;
        margin-right: 0.486vw;
      }
    }
    &__number {
      margin-bottom: 1.111vw;
    }
  }
}
</style>
