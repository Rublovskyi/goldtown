<template lang="pug">
    .header(:class="{'show': showMenu, 'headerUnvisible': headerUnvisible}")
        n-link.header__logo(:to="('/')")
            img(src="../assets/Logo.png")
        .header__wrap(:class="{'show': showMenu}")
            .header__menu
                .header__list
                    .header__item( @click="replase('about')") Про нас
                    n-link.header__item(:to="('/purchase/all')" :class="{'show': show === 'purchase'}") Нерухомість
                    n-link.header__item(:to="('/commerce/all')" :class="{'show': show === 'commerce'}") Готовий бізнес
                    .header__item( @click="replase('request')") Залишити заявку
                a.header__number(href="tel:+380984732501") 
                    span.header__number-icon
                    span +380(98)473-25-01
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
      scrollPrev: 0,
      headerUnvisible: false,
    };
  },
  methods: {
    openMobileMenu() {
      if (this.showMenu) {
        document.body.style.overflow = "";
        this.showMenu = false;
      } else {
        document.body.style.overflow = "hidden";
        this.$gtag("event", "showMenu", {
          event_category: "show menu",
        });
        this.showMenu = true;
      }
    },
    replase(type) {
      this.showMenu = false;
      document.body.style.overflow = "";

      this.$router.replace({ path: `/#${type}` });
    },
    scrollViewHeader() {
      window.addEventListener("scroll", () => {
        let scrolled = window.scrollY;

        if (scrolled > 100 && scrolled > this.scrollPrev) {
          this.headerUnvisible = true;
        } else {
          this.headerUnvisible = false;
        }
        this.scrollPrev = scrolled;
      });
    },
  },
  mounted() {
    document.body.style.overflow = "";
    // this.scrollViewHeader();
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
    padding: 6.25vw 5vw;
    background-color: #fff;
    transition: all 500ms ease;

    // position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    &__logo {
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
      width: 68.438vw;
      height: 100%;
      background-color: var(--primary-color);
      overflow: scroll;
      padding: 29.688vw 0 0 5.625vw;
    }
    &__menu-close {
      position: absolute;
      top: 19.688vw;
      right: 6.563vw;
      width: 5vw;
      height: 5vw;
      background-image: url(../assets/svg/close.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    &__burger {
      display: block;
      width: 9.375vw;
      height: 4.375vw;
      background-image: url(../assets/svg/burger.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__item:not(:last-child) {
      margin-bottom: 11.25vw;
    }
    &__item {
      display: block;
      transition: all 500ms ease;
      cursor: pointer;
      font-family: "Gilroy";
      font-weight: 400;
      font-size: 5vw;
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
      justify-content: flex-start;
      transition: all 700ms ease;
      font-size: 5vw;
      font-weight: 400;
      margin-top: 19.375vw;
      &-icon {
        display: block;
        width: 7.5vw;
        height: 7.5vw;
        background-image: url(../assets/svg/mobileLight.svg);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 2.5vw;
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
    padding: 2.106vw 4.688vw;
    background-color: #fff;
    transition: all 500ms ease;

    // position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    &__logo {
      height: 5.208vw;
      width: 20.573vw;
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
      width: 33.203vw;
      height: 100%;
      background-color: var(--primary-color);
      overflow: scroll;
      padding: 13.672vw 5.208vw 0 5.208vw;
    }
    &__menu-close {
      position: absolute;
      top: 6.901vw;
      right: 4.818vw;
      width: 2.083vw;
      height: 2.083vw;
      background-image: url(../assets/svg/close.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    &__burger {
      display: block;
      width: 3.906vw;
      height: 1.823vw;
      background-image: url(../assets/svg/burger.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__item:not(:last-child) {
      margin-bottom: 4.688vw;
    }
    &__item {
      display: block;
      transition: all 500ms ease;
      cursor: pointer;
      font-family: "Gilroy";
      font-weight: 400;
      font-size: 2.083vw;
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
      justify-content: flex-start;
      transition: all 700ms ease;
      font-size: 2.083vw;
      font-weight: 400;
      margin-top: 8.073vw;
      &-icon {
        display: block;
        width: 3.125vw;
        height: 3.125vw;
        background-image: url(../assets/svg/mobileLight.svg);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 1.042vw;
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
    padding: 0.5vw 5.556vw;
    background-color: #fff;
    transition: all 500ms ease;

    // position: fixed;
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

.header.headerUnvisible {
  transform: translateY(-100%);
}
</style>
