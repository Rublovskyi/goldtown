<template lang="pug">
.info
    h1.info__title {{info.title}}
    p.info__text {{info.text}}
    .info__wrap(v-for="(part, i ) in info.about" :key="i")
        h2.info__wrap-title {{part.title}}
        p.info__wrap-subtitle {{part.subtitle}}
        p.info__wrap-listtitle {{part.listtitle}}
        ul.info__wrap-list 
            li.info__wrap-item(v-for="(item,i) in part.list" :key="i") {{item}}
        p.info__wrap-text {{part.text}}

</template>
<script>
export default {
  props: ["info"],
};
</script>
<style lang="scss" scoped>
.info {
  padding: 6.25vw 5vw;
  background-color: var(--light-bg);

  &__title {
    margin-bottom: 20px;
    font-size: 30px;
  }

  &__text {
    margin-bottom: 20px;
    font-size: 20px;
  }

  &__wrap {
    &-title {
      margin-bottom: 15px;
      font-size: 25px;
    }
    &-subtitle {
      margin-bottom: 15px;
      font-size: 16px;
    }
    &-listtitle {
      margin-bottom: 15px;
      font-size: 20px;
    }

    &-list {
      margin-bottom: 20px;
    }

    &-item {
      margin-left: 20px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -20px;
        width: 10px;
        height: 10px;
        background-image: url(../assets/svg/flickr.svg);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transform: translateY(-50%);
      }
    }
    &-text {
      font-size: 16px;
    }

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 2.106vw 4.688vw;
  }
  @media screen and (min-width: 1240px) {
    padding: 2.5vw 5.556vw;
  }
}
</style>
