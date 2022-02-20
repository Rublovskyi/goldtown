<template lang="pug">
    .header(:class="{'show': showMenu}")
        n-link.header__logo(:to="('/')")
            img(src="../assets/Logo.png")
        .header__wrap(:class="{'show': showMenu}")
            .header__menu
                .header__list
                    .header__item(:to="('/#about')" @click="replase('about')") Про нас
                    n-link.header__item(:to="('/purchase/all')" :class="{'show': show === 'purchase'}") Нерухомість
                    n-link.header__item(:to="('/commerce/all')" :class="{'show': show === 'commerce'}") Готовий бізнес
                    .header__item(:to="('/#request')" @click="replase('request')") Залишити заявку
                a.header__number(href="tel:+380679986959") 
                    span.header__number-icon
                    span +38(067)-998-69-59
                .header__menu-close(v-if="showMenu" @click="openMobileMenu") 
        .header__burger(@click="openMobileMenu")
</template>
<script>
export default {
  props: {
    show: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    openMobileMenu() {
      if (this.showMenu) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    },
    replase(type) {
      this.showMenu = false;
      this.$router.replace({ path: `/#${type}` });
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 767.99px) {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--primary-color);
    padding: 20px 16px;
    background-color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    &__logo {
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

    &__wrap {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.4);
      overflow: scroll;
      &.show {
        display: block;
      }
    }
    &__menu {
      position: absolute;
      top: 0;
      right: 0;
      width: 219px;
      height: 100%;
      background-color: var(--primary-color);
      overflow: scroll;
      padding: 95px 25px 0 18px;
    }
    &__menu-close {
      position: absolute;
      top: 63px;
      right: 21px;
      width: 16px;
      height: 16px;
      background-image: url(../assets/svg/close.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    &__burger {
      display: block;
      width: 30px;
      height: 14px;
      background-image: url(../assets/svg/burger.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__item:not(:last-child) {
      margin-bottom: 36px;
    }
    &__item {
      display: block;
      transition: all 500ms ease;
      cursor: pointer;
      font-family: "Gilroy";
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      color: #fff;
      &.show {
        color: var(--accent-main-color);
      }
    }
    &__item:hover {
      color: var(--hover-color);
    }
    &__number {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 700ms ease;
      font-size: 16px;
      font-weight: 400;
      margin-top: 62px;
      &-icon {
        display: block;
        width: 24px;
        height: 24px;
        background-image: url(../assets/svg/mobileLight.svg);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 8px;
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
}
@media screen and (min-width: 768px) and (max-width: 1239.98px) {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--primary-color);
    padding: 30px 36px;
    background-color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    &__logo {
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
    &__wrap {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.4);
      overflow: scroll;
      &.show {
        display: block;
      }
    }
    &__menu {
      position: absolute;
      top: 0;
      right: 0;
      width: 255px;
      height: 100%;
      background-color: var(--primary-color);
      overflow: scroll;
      padding: 105px 40px 0 40px;
    }
    &__menu-close {
      position: absolute;
      top: 53px;
      right: 37px;
      width: 16px;
      height: 16px;
      background-image: url(../assets/svg/close.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    &__burger {
      display: block;
      width: 30px;
      height: 14px;
      background-image: url(../assets/svg/burger.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__item:not(:last-child) {
      margin-bottom: 36px;
    }
    &__item {
      display: block;
      transition: all 500ms ease;
      cursor: pointer;
      font-family: "Gilroy";
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      color: #fff;
      &.show {
        color: var(--accent-main-color);
      }
    }
    &__item:hover {
      color: var(--hover-color);
    }
    &__number {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 700ms ease;
      font-size: 16px;
      font-weight: 400;
      margin-top: 62px;
      &-icon {
        display: block;
        width: 24px;
        height: 24px;
        background-image: url(../assets/svg/mobileLight.svg);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 8px;
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
}
@media screen and (min-width: 1240px) {
  .header {
    display: grid;
    grid-template-columns: 35% 65%;
    align-items: center;
    color: var(--primary-color);
    padding: 1.111vw 5.556vw;
    background-color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    &__wrap {
      display: block;
    }

    &__menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

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
      color: var(--primary-color);
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
    &__burger {
      display: none;
    }
  }
}
</style>
