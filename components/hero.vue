<template lang="pug">
    .hero 
        .hero__wrap
            h2.hero__title Агентство нерухомості Goldtown 
            p.hero__text Допоможемо Вам продати/купити квартиру в <br/> новобудові вигідно і швидко
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
.hero {
  background-image: url(../assets/heroBG.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 41.078vw;
  position: relative;
  margin-top: 10vh;
  &__wrap {
    padding: 0 5.417vw;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  &__title {
    color: #fff;
    font-size: 2.5vw;
    line-height: 1.11;
    font-weight: 400;
    margin-bottom: 2.083vw;
  }
  &__text {
    color: #fff;
    font-size: 1.389vw;

    line-height: 1.3;
    font-weight: 400;

    margin-bottom: 2.778vw;
  }
  &__btn {
    padding: 1.042vw 2.389vw;
    background-color: var(--accent-main-color);

    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.181vw;
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
</style>
