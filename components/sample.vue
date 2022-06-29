<template lang="pug">
    .sample
        n-link.sample__item(v-for="(card, i) in cards" :key="i" :to="localePath(`${card.link}`)" :style="{'background-image': `linear-gradient(to right top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('${card.img}')`}" :class="`item${i}`")
            p.sample__item-text {{card.text}}
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          text: "Квартири",
          link: "/purchase/house",
          img: require("~/assets/sample/house.png"),
        },
        {
          text: "Комерцiя",
          link: "/commerce/all",
          img: require("~/assets/sample/commerce.png"),
        },
        {
          text: "Паркомісце",
          link: "/purchase/parking",
          img: require("~/assets/sample/parking.png"),
        },
        {
          text: "Комори",
          link: "/purchase/storage",
          img: require("~/assets/sample/storage.png"),
        },
        {
          text: "Земельнi дiлянки",
          link: "/purchase/stead",
          img: require("~/assets/sample/plot.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 767.98px) {
  .sample {
    padding: 18.75vw 5vw;
    background-color: var(--light-bg);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5vw;
    &__item {
      border-radius: 1.875vw;
      position: relative;
      height: 39.688vw;
      &-text {
        position: absolute;
        bottom: 5vw;
        left: 5vw;
        color: #fff;
        font-weight: 700;
        font-size: 5vw;
        line-height: 1;
      }
    }
    & .item0 {
      height: 79.375vw;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &__item {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      overflow: hidden;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1239.98px) {
  .sample {
    padding: 7.813vw 4.688vw;
    background-color: var(--light-bg);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.604vw;
    &__item {
      border-radius: 1.042vw;
      position: relative;
      height: 28.646vw;

      &-text {
        position: absolute;
        bottom: 2.344vw;
        left: 2.604vw;
        color: #fff;
        font-weight: 700;
        font-size: 2.083vw;
        line-height: 1;
      }
    }
    & .item0 {
      height: 44.271vw;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &__item {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      overflow: hidden;
    }
  }
}
@media screen and (min-width: 1240px) {
  .sample {
    padding: 8.333vw 5.556vw;
    background-color: var(--light-bg);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.389vw;
    &__item {
      border-radius: 0.556vw;
      position: relative;
      &-text {
        position: absolute;
        bottom: 1.389vw;
        left: 1.389vw;
        color: #fff;
        font-weight: 700;
        font-size: 1.111vw;
        line-height: 1;
      }
    }
    & .item0 {
      height: 34.722vw;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &__item {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      overflow: hidden;
    }
  }
}

a {
  transition: all 400ms ease;
}
a:hover {
  transform: scale(1.02);
}
</style>
