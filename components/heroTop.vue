<template lang="pug">
    .hero 
        .hero__content
            p.hero__content-subtitle Недвижимость в Киеве и Киевской области 
            h2.hero__content-title Поможем Вам продать/купить <br/> квартиру в новостое выгодно и быстро
            p.hero__content-text  Агентство недвижимости GOLDTOWN
</template>

<style lang="scss" scoped>
.hero {
  height: 45vh;
  &__content {
    padding-top: 8.819vw;
    width: 100%;
    height: 100%;
    text-align: center;
    &-subtitle {
      margin-bottom: 1.389vw;
      color: var(--bg-main-color);
      font-size: 0.903vw;
    }
    &-title {
      font-family: NotoSerif-Regular;
      color: var(--primary-color);
      font-size: 3.125vw;
      margin: 1.389vw 0;
    }
    &-text {
      color: var(--bg-main-color);
      font-size: 0.903vw;
    }
    &-subtitle,
    &-text {
      position: relative;
      display: inline;
      text-transform: uppercase;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 1.042vw;
        height: 1.042vw;
        background-image: url(../assets/svg/dots.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      &::before {
        left: -1.736vw;
      }
      &::after {
        right: -1.736vw;
      }
    }
    &-btn {
      padding: 0.694vw 1.042vw;
      background-color: var(--accent-main-color);

      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.181vw;
      margin-top: 1.736vw;
      &-icon {
        display: block;
        width: 1.389vw;
        height: 1.389vw;
        background-image: url(../assets/svg/arrowRight.svg);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: 0.486vw;
      }
    }
  }
}
</style>
