<template lang="pug">
.footer 
    .footer__wrap
        n-link.footer__logo(:to="localePath('/')")
            //- img(src="../assets/logoLight.png" alt="Logo Gold Town")
            img(src="../assets/Logo_new.png" alt="Logo Gold Town")
        .footer__mobile
            Lang.footer__lang
    .footer__info
        //- .footer__links 
        //-     n-link.link(:to="('/purchase/house/1-k-apartment')") 1к квартири
        //-     n-link.link(:to="('/purchase/house/2-k-apartment')") 2к квартири
        //-     n-link.link(:to="('/purchase/house/townhouse')") Таунхауси
        //-     n-link.link(:to="('/purchase/house/apartment-with-pool')") Квартири з басейном
        //-     n-link.link(:to="('/purchase/house/townhouse-with-pool')") Таунхауси з басейном
        .footer__social 
            .footer__desc
                Lang.footer__lang(:type="1")
            .footer__social-wrap
                a.footer__social-item(href="https://www.facebook.com/profile.php?id=100094212323029"  target="_blank")
                    img(src="~/assets/svg/facebook.svg" alt="facefook icon")
                a.footer__social-item(href="https://instagram.com/gold_town.ua/"  target="_blank")
                    img(src="~/assets/svg/instagram.svg" alt="instagram icon")
            .footer__tablet
                Lang.footer__lang(:type="1")
        .footer__wrapper
            .footer__nums
                //- a.footer__number(href="tel:+380994712789") 
                //-     span.footer__number-icon
                //-     span +380(99)471-27-89 
                //- a.footer__number(href="tel:+380739986959") 
                //-     span.footer__number-icon
                //-     span +380(73)998-69-59
                //- a.footer__number(href="tel:+380679986959") 
                //-     span.footer__number-icon
                //-     span +380(67)998-69-59
                //- a.footer__number(href="tel:+380639986959") 
                //-     span.footer__number-icon
                //-     span +380(63)998-69-59.
                a.footer__number(href="tel:+380639986955") 
                    span.footer__number-icon
                    span +380(63)998-69-55 
            .footer__data
                a.footer__address(href="https://goo.gl/maps/KnUsTrPfS5usf9u79") 
                    span.footer__address-icon 
                    p(v-html="$t('contacts.address')") 
                a.footer__mail(href="https://goo.gl/maps/KnUsTrPfS5usf9u79") 
                    span.footer__mail-icon 
                    p goldtown.v@gmail.com
</template>
<script>
import Lang from "~/components/lang.vue";
export default {
  components: {
    Lang,
  },
  // data() {
  //   return {
  //     address: $t("contacts.address"),
  //   };
  // },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 767.98px) {
  .footer {
    // height: 218px;
    background-color: var(--bg-logo-color);
    padding: 9.375vw 5vw;
    position: relative;
    z-index: 120;

    &__wrap {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }

    &__desc,
    &__tablet {
      display: none;
    }

    &__lang {
      margin-bottom: 10px;
    }
    &__links {
      margin-bottom: 5vw;
      & .link {
        display: block;
        color: #fff;
        font-size: 4vw;
        font-weight: 400;
        position: relative;
        padding-left: 7.813vw;

        transition: transform 500ms ease;

        &:hover {
          transform: scale(1.02);
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background-image: url(../assets/svg/home3.svg);
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          width: 4.688vw;
          height: 4.688vw;
        }
      }

      .link:not(:last-child) {
        margin-bottom: 2vw;
      }
    }
    &__social {
      color: #fff;
      font-size: 5vw;
      margin-bottom: 5vw;

      &-item {
        width: 5.25vw;
        height: 5.25vw;
        border-radius: 50%;
        // background-color: #fff;

        margin-right: 3vw;
        transition: all 500ms ease;

        & img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }

        &:hover {
          transform: scale(0.95);
        }
      }

      &-wrap {
        display: flex;
      }
    }
    &__logo {
      display: block;
      height: 12.5vw;
      width: 17.375vw;
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
    &__address,
    &__mail {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all 700ms ease;
      // font-size: 5vw;
      font-size: 4vw;
      font-weight: 400;
      &-icon {
        display: block;
        // width: 7.5vw;
        // height: 7.5vw;
        width: 6vw;
        height: 6vw;

        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 2.5vw;
      }
      &:hover {
        transform: scale(1.02);
      }
    }
    &__number,
    &__address {
      margin-bottom: 2.125vw;
      // font-size: 4vw;

      // &-icon {
      //   width: 6vw;
      //   height: 6vw;
      // }
    }
    &__number-icon {
      background-image: url(../assets/svg/mobileLight.svg);
    }
    &__address-icon {
      background-image: url(../assets/svg/carbon_location.svg);
    }
    &__mail-icon {
      background-image: url(../assets/svg/letter_icon-w.svg);
    }
  }
}
@media screen and (min-width: 768px) {
  .footer {
    // height: 12vh;
    background-color: var(--bg-logo-color);
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    gap: 5vw;

    // display: flex;

    // display: flex;
    padding: 3.646vw 4.688vw;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 120;
    &__logo {
      display: block;
      height: 13.51vw;
      width: 19.51vw;
      transition: all 700ms ease;
      overflow: hidden;

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
    &__mobile,
    &__desc {
      display: none;
    }

    &__links {
      margin-bottom: 1vw;
      display: flex;
      flex-wrap: wrap;
      // grid-template-columns: repeat(3, 1fr);
      padding-right: 2.604vw;

      & .link {
        display: block;
        color: #fff;
        font-size: 1.4vw;
        font-weight: 400;
        position: relative;
        padding-left: 2.604vw;
        margin-right: 2.604vw;

        transition: transform 500ms ease;

        &:hover {
          transform: scale(1.1);
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background-image: url(../assets/svg/home3.svg);
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          width: 1.563vw;
          height: 1.563vw;
        }
      }

      .link:not(:last-child) {
        margin-bottom: 1vw;
      }
    }
    &__social {
      color: #fff;
      font-size: 2.083vw;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 2.083vw;

      &-wrap {
        display: flex;
      }
      &-item {
        width: 2.25vw;
        height: 2.25vw;
        border-radius: 50%;
        // background-color: #fff;

        margin-right: 1.4vw;

        transition: all 500ms ease;

        &:hover {
          transform: scale(1.2);
        }
        // padding: 2vw;

        & img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }
    }
    &__number,
    &__address,
    &__mail {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all 700ms ease;
      // font-size: 2.083vw;
      font-size: 1.4vw;
      font-weight: 400;
      &-icon {
        display: block;
        // width: 3.125vw;
        // height: 3.125vw;

        width: 2.125vw;
        height: 2.125vw;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 1.042vw;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    // &__address {
    //   width: 27.995vw;
    // }
    &__wrapper {
      // display: grid;
      // grid-template-columns: 1fr 1fr;
      // gap: 1vw;
      display: flex;
      align-items: flex-start;
      // grid-template-columns: 1fr 1fr;
    }
    &__address {
      margin-bottom: 1.302vw;
    }
    &__number {
      &:not(:last-child) {
        margin-bottom: 1.302vw;
      }
      margin-right: 2vw;
    }
    &__number-icon {
      background-image: url(../assets/svg/mobileLight.svg);
    }
    &__address-icon {
      background-image: url(../assets/svg/carbon_location.svg);
    }
    &__mail-icon {
      background-image: url(../assets/svg/letter_icon-w.svg);
    }
  }
}


@media screen and (min-width: 1240px) {
  .footer {
    padding: 2.639vw 3.556vw;
    grid-template-columns: 1fr 2.7fr;
    gap: 4vw;

    

    &__logo {
      height: 6.653vw;
      width: 12.431vw;
    }

    &__tablet {
      display: none;
    }
    &__desc {
      display: block;
      margin-right: 2vw;
    }

    &__lang {
      margin-bottom: 0.5vw;
    }

    &__info {
      display: flex;
      align-items: center;
    }
    &__links {
      margin-bottom: 1vw;
      display: block;
      // grid-template-columns: repeat(3, 1fr);
      padding-right: 1.613vw;

      & .link {
        display: block;
        color: #fff;
        font-size: 1.111vw;
        font-weight: 400;
        position: relative;
        padding-left: 2.016vw;
        margin-right: 0;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background-image: url(../assets/svg/home3.svg);
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          width: 1.21vw;
          height: 1.21vw;
        }
      }

      .link:not(:last-child) {
        margin-bottom: 1vw;
      }
    }

    &__social {
      font-size: 1.111vw;
      margin-bottom: 0;
      &-item {
        width: 1.25vw;
        height: 1.25vw;

        margin-right: 1vw;
        margin-bottom: 0.4vw;
      }
      &-wrap {
        /* margin-right: 2vw; */
        margin-right: 1vw;
      }
    }
    &__wrapper {
      align-items: center;
    }
    &__number,
    &__address,
    &__mail {
      font-size: 1.111vw;
      &-icon {
        width: 1.242vw;
        height: 1.242vw;
        margin-right: 0.486vw;
      }
    }
    &__address {
      margin-bottom: 1.111vw;
    }

    // &__address {
    //   width: 270px;
    // }
    &__number {
      &:not(:last-child) {
        margin-bottom: 1.111vw;
      }
    }
  }
}

@media screen and (min-width: 2540px) {
   .footer {
    width: 105vw;
    left: -21%;
    
     }
    }


</style>
