<template lang="pug">
.hero 
    .hero__photo 
        img( src="~/assets/design_devel.png")
    .hero__data
        .hero__wrap
            h1.hero__title GoldTownBud
            p.hero__text  {{$t('bud.hero_subtitle')}}
            button.hero__btn(@click="makeRequest")
                span {{ $t('hero.button_text') }}
                //- span.hero__btn-icon 
                
</template>
<script>
export default {
  methods: {
    makeRequest() {
      this.$parent.showPopup = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 767.98px) {
  .hero {
    // background-image: linear-gradient(
    //   to bottom,
    //   rgba(0, 0, 0, 0.8),
    //   rgba(0, 0, 0, 0.16)
    // );

    // background-position: center;
    // background-size: cover;
    // background-repeat: no-repeat;

    height: 100vh;
    position: relative;

    padding-top: 23vw;
    // padding-top: 25vw;

    &__photo {
      height: 100%;
      width: 100%;
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }
    &__data {
      position: absolute;
      top: 0%;
      left: 0;
      height: 100%;
      width: 100%;

      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.16)
      );

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &__wrap {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      padding: 0 5vw;
    }
    &__title {
      color: #fff;
      font-size: 7.5vw;
      line-height: 1.11;
      font-weight: 400;
      margin-bottom: 6.25vw;
    }
    &__text {
      color: #fff;
      font-size: 5vw;

      line-height: 1.3;
      font-weight: 400;

      margin-bottom: 9.375vw;
    }
    &__btn {
      padding: 5vw 7.5vw;
      background-color: var(--accent-main-color);

      color: #fff;

      font-size: 5vw;
      transition: all 700ms ease;
      border-radius: 1.875vw;
      font-weight: 400;

      &:hover {
        background-color: var(--hover-color);
        color: #fff;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .hero {
    // background-image: linear-gradient(
    //   to bottom,
    //   rgba(0, 0, 0, 0.8),
    //   rgba(0, 0, 0, 0.16)
    // );
    // background-position: center;
    // background-size: cover;
    // background-repeat: no-repeat;

    padding-top: 9vw;

    height: 100vh;
    position: relative;
    // padding-top: 13.021vw;

    &__photo {
      height: 100%;
      width: 100%;
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }
    &__data {
      padding: 0 4.688vw;
      position: absolute;
      top: 0%;
      left: 0;
      height: 100%;
      width: 100%;

      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.16)
      );

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &__wrap {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      padding: 0 4.688vw;
    }
    &__title {
      color: #fff;
      font-size: 4.688vw;
      line-height: 1.11;
      font-weight: 400;
      margin-bottom: 3.906vw;
    }
    &__text {
      color: #fff;
      font-size: 2.604vw;

      line-height: 1.3;
      font-weight: 400;

      margin-bottom: 5.208vw;
      width: 44.818vw;
    }
    &__btn {
      padding: 2.083vw 4.167vw;
      background-color: var(--accent-main-color);

      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 2.083vw;
      transition: all 700ms ease;
      border-radius: 0.417vw;
      font-weight: 400;

      &:hover {
        background-color: var(--hover-color);
        color: #fff;
      }
      // &:hover .hero__btn-icon {
      //   background-image: url(../assets/svg/arrowRightLight.svg);
      // }
    }
  }
}
@media screen and (min-width: 1240px) {
  .hero {
    // padding-top: 5.556vw;
    // background-image: linear-gradient(
    //   to right,
    //   rgba(0, 0, 0, 0.8),
    //   rgba(0, 0, 0, 0.16)
    // );
    // &__data {
    //   // padding: 0 5.417vw;
    // }
    padding-top: 5vw;

    &__wrap {
      padding: 0 5.417vw;
    }
    &__title {
      font-size: 2.5vw;
      line-height: 1.11;
      margin-bottom: 2.083vw;
    }
    &__text {
      font-size: 1.389vw;
      line-height: 1.3;
      margin-bottom: 2.778vw;
      width: 25.236vw;
    }
    &__btn {
      padding: 1.042vw 2.389vw;
      font-size: 1.181vw;
      transition: all 700ms ease;
      border-radius: 0.417vw;
      font-weight: 400;
    }
  }
}

  @media screen and (min-width: 2540px) {
    .hero{
    /* margin-top:9.3%; */

    }
  }
</style>
