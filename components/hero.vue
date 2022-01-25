<template lang="pug">
    .hero 
        button.hero__btn(@click="makeRequest")
                span Оставить заявку
                span.hero__btn-icon 
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
  background-image: linear-gradient(
      to right,
      rgba(187, 148, 119, 0.5),
      rgba(187, 148, 119, 0.5)
    ),
    url(../assets/heroBG.jpeg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 55vh;
  position: relative;
  &__btn {
    padding: 2.042vw 3.389vw;
    background-color: var(--light-bg);

    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.181vw;
    margin-top: 1.736vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 700ms ease;
    &-icon {
      display: block;
      width: 1.389vw;
      height: 1.389vw;
      background-image: url(../assets/svg/arrowRight.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      margin-left: 0.694vw;
    }
    &:hover {
      background-color: var(--bg-main-color);
      color: #fff;
    }
    &:hover .hero__btn-icon {
      background-image: url(../assets/svg/arrowRightLight.svg);
    }
  }
}
</style>
