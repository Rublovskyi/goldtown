<template lang="pug">
    .hero 
        .hero__wrap
            h2.hero__title Агентство нерухомості Goldtown 
            p.hero__text Допоможемо Вам продати/купити квартиру в новобудові вигідно і швидко
            button.hero__btn(@click="makeRequest")
                span Залишити заявку
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
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.16)
      ),
      url(../assets/heroBG.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    height: 100vh;
    position: relative;
    padding-top: 80px;
    &__wrap {
      padding: 0 16px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    &__title {
      color: #fff;
      font-size: 24px;
      line-height: 1.11;
      font-weight: 400;
      margin-bottom: 20px;
    }
    &__text {
      color: #fff;
      font-size: 16px;

      line-height: 1.3;
      font-weight: 400;

      margin-bottom: 30px;
    }
    &__btn {
      padding: 16px 24px;
      background-color: var(--accent-main-color);

      color: #fff;

      font-size: 16px;
      transition: all 700ms ease;
      border-radius: 6px;
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
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.16)
      ),
      url(../assets/heroBG.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    height: 100vh;
    position: relative;
    padding-top: 100px;
    &__wrap {
      padding: 0 4.688vw;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
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
      width: 54.818vw;
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
      &:hover .hero__btn-icon {
        background-image: url(../assets/svg/arrowRightLight.svg);
      }
    }
  }
}
@media screen and (min-width: 1240px) {
  .hero {
    padding-top: 5.556vw;
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
      width: 29.236vw;
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
</style>
