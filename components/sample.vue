<template lang="pug">
.sample
    n-link.sample__item.item0( :to="localePath('/purchase/house')" )
        picture
            source(type="image/webp" srcset="~/assets/sample/house.webp")
            source(type="image/jpeg" srcset="~/assets/sample/house.jpg")
            img(src="~/assets/sample/house.jpg" alt="hero")
        .sample__gradient
        p.sample__item-text {{ $t('sample.house') }}
    n-link.sample__item.item1( :to="localePath('/purchase/commercial_premises')")
        picture
            source(type="image/webp" srcset="~/assets/sample/commerce.webp")
            source(type="image/jpeg" srcset="~/assets/sample/commerce.jpg")
            img(src="~/assets/sample/commerce.jpg" alt="hero")
        .sample__gradient
        p.sample__item-text {{ $t('sample.commerce') }}
    n-link.sample__item.item2( :to="localePath('/purchase/parking')")
        picture
            source(type="image/webp" srcset="~/assets/sample/parking.webp")
            source(type="image/jpeg" srcset="~/assets/sample/parking.jpg")
            img(src="~/assets/sample/parking.jpg" alt="hero")
        .sample__gradient
        p.sample__item-text {{ $t('sample.parking') }}
    n-link.sample__item.item2( :to="localePath('/purchase/storage')")
        picture
            source(type="image/webp" srcset="~/assets/sample/storage.webp")
            source(type="image/jpeg" srcset="~/assets/sample/storage.jpg")
            img(src="~/assets/sample/storage.jpg" alt="hero")
        .sample__gradient
        p.sample__item-text {{ $t('sample.storage') }}
    n-link.sample__item.item2( :to="localePath('/purchase/stead')")
        picture
            source(type="image/webp" srcset="~/assets/sample/plot.webp")
            source(type="image/jpeg" srcset="~/assets/sample/plot.jpg")
            img(src="~/assets/sample/plot.jpg" alt="hero")
        .sample__gradient
        p.sample__item-text {{ $t('sample.stead') }}
</template>
<script>
export default {
  data() {
    return {
      house: require("~/assets/sample/house.png"),
      commerce: require("~/assets/sample/commerce.png"),
      parking: require("~/assets/sample/parking.png"),
      storage: require("~/assets/sample/storage.png"),
      plot: require("~/assets/sample/plot.png"),
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
      overflow: hidden;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
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
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
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
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    &__gradient {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        to right top,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0)
      );
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
