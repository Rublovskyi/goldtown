<template lang="pug">
.lang(:class="{'white': type === 1, 'black': type === 2}")
    .lang__current(v-text="$t('title')")
    .lang__dropdown
        .lang__item(v-if="$i18n.locale != 'ua'")
            a.lang__text(:href="switchLocalePath('ua') " aria-label="Ua") Ua
        .lang__item(v-if="$i18n.locale != 'ru'")
            a.lang__text(:href="switchLocalePath('ru') + '/'" aria-label="Ru") Ru
</template>
<script>
export default {
  props: ["type"],
};
</script>
<style lang="scss" scoped>
.lang {
  font-size: 14px;
  line-height: 1;
  color: #fff;
  opacity: 0.9;
  font-family: "Fatum", sans-serif;
  padding: 0 10px;

  position: relative;
  cursor: default;
  // margin-top: -54px;
  margin-left: 46px;
  display: inline-block;
  z-index: 201;
  //   position: absolute;
  //   bottom: 39px;
  //   left: 0;

  &.black {
    color: #fff;
  }

  &__item {
    overflow: hidden;
    padding: 0 10px;
    margin: 8px 0;
  }

  &__text {
    transform: translate3d(0, 20px, 1px) rotate(10deg);
    transform-origin: 0 0;
    transition: transform 1s ease, opacity 0.5s ease;
    display: block;
    color: inherit;

    @media screen and (min-width: 1240px) {
      &:hover {
        opacity: 0.5;
      }
    }
  }

  &__dropdown {
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    padding-bottom: 2px;
    // background: #fff;
  }

  &:hover {
    .lang__text {
      transform: translate3d(0, 0, 1px) rotate(0.001deg);
    }
  }
}
</style>
