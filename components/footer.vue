<template lang="pug">
    .footer 
        n-link.footer__logo(:to="('/')")
            img(src="../assets/logoLight.png")
        .footer__info
            a.footer__number(href="tel:+380679986959") 
                span.footer__number-icon
                span +38(067)-998-69-59
            a.footer__address(href="/") 
                span.footer__address-icon
                span Київська обл. с.Святопетрівське <br/> вул.Богдана Хмельницького 1В
</template>
<style lang="scss" scoped>
@media screen and (max-width: 767.98px) {
  .footer {
    // height: 218px;
    background-color: var(--primary-color);
    padding: 30px 16px;
    position: relative;
    z-index: 120;
    &__logo {
      display: block;
      height: 40px;
      width: 158px;
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
      margin-top: 30px;
    }
    &__number,
    &__address {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all 700ms ease;
      font-size: 16px;
      font-weight: 400;
      &-icon {
        display: block;
        width: 24px;
        height: 24px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 8px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    &__number {
      margin-bottom: 10px;
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
    padding: 28px 36px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 120;
    &__logo {
      height: 50px;
      width: 179px;
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
      font-size: 16px;
      font-weight: 400;
      &-icon {
        display: block;
        width: 24px;
        height: 24px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 8px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    &__number {
      margin-bottom: 10px;
    }
    &__number-icon {
      background-image: url(../assets/svg/mobileLight.svg);
    }
    &__address-icon {
      background-image: url(../assets/svg/carbon_location.svg);
    }
  }
}
@media screen and (min-width: 1240px) {
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
