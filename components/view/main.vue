<template lang="pug">
    .view(v-if="info")
        .view__wrap
            .view__images
                .view__images-wrap(v-if="info.image.data" v-for="(img, i) in images()" :key="i" :class="['type'+i]" @click="openPhotoPopup(i)")
                    img(:src="`https://api.goldtowncompany.com${img.attributes.url}`")
                    p.plus-photo(v-if="i === 2") {{amountPhoto()}} 
                .view__images-wrap.type0(v-if="!info.image.data")
                    img(:src="testImg")
            .view__info 
                .view__info-main 
                    .view__info-main-title {{info.title}}
                    .view__info-main-price {{info.price}}$
                .view__data
                    .view__data-type(v-if="info.number_of_rooms") 
                        span.title Кількість кімнат: 
                        span.amount {{info.number_of_rooms}}
                    .view__data-type(v-if="info.floor") 
                        span.title Поверх: 
                        span.amount {{info.floor}}
                    .view__data-type(v-if="info.apartment_area") 
                        span.title Площа(м2): 
                        span.amount {{info.apartment_area}} м2
                    .view__data-type(v-if="info.living_area") 
                        span.title Житлова площа: 
                        span.amount {{info.living_area}} м2
                    .view__data-type(v-if="info.parking_type") 
                        span.title Тип паркомісця:
                        span.amount {{info.parking_type}}
                    .view__data-type(v-if="info.city") 
                        span.title Місто:
                        span.amount {{info.city}}
                    .view__data-type(v-if="info.annual_income") 
                        span.title Річний дохід:
                        span.amount {{info.annual_income}}
                    .view__data-type(v-if="info.payback") 
                        span.title Окупність:
                        span.amount {{info.payback}}
                    .view__data-type(v-if="info.adress") 
                        span.title Адреса:
                        span.amount {{info.adress}}
                .view__desc(v-if="info.sub_title") {{info.sub_title}}
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      info: (state) => state.app.CurrentPeaseData.attributes,
    }),
  },
  data() {
    return {
      testImg: require("~/assets/noPhoto.png"),
    };
  },
  methods: {
    images() {
      if (this.info.image.data) {
        if (this.info.image.data.length > 0) {
          return this.info.image.data.slice(0, 3);
        }
      }
    },
    amountPhoto() {
      if (this.info.image.data) {
        let x = this.info.image.data.length - 3;
        let y = `+ ${x} фото`;
        if (x > 0) {
          return y;
        }
      }
    },
    openPhotoPopup(i) {
      let currentImg = this.info.image.data[i].attributes.url;
      console.log(currentImg);
      let images = this.info.image.data;
      this.$parent.photosData = {
        i,
        images,
        currentImg,
      };
      this.$parent.showPhotoPopup = true;
      document.body.style.overflow = "hidden";
    },
  },
};
</script>
<style lang="scss" scoped>
.view {
  padding: 5.417vw 5.556vw 5.417vw 5.556vw;

  &__wrap {
    @media screen and (min-width: 1440px) {
      display: grid;
      grid-template-columns: 36.25vw 1fr;
      column-gap: 1.389vw;
    }
  }
  &__info {
    background-color: #fff;
    border-radius: 6px;
    padding: 40px 16px;
    margin-top: 60px;
    &-main {
      margin-bottom: 30px;
      &-title {
        font-weight: 500;
        font-size: 24px;
        color: var(--primary-color);
      }
      &-price {
        color: var(--accent-main-color);
        font-weight: 600;
        font-size: 20px;
        margin-top: 30px;
      }
    }
    @media screen and (min-width: 768px) {
      margin-top: 60px;
      padding: 40px 30px;
      border-radius: 6px;
      &-main {
        margin-bottom: 40px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        &-title {
          font-size: 24px;
        }
        &-price {
          font-size: 20px;
          margin-top: 0;
        }
      }
    }
    @media screen and (min-width: 1440px) {
      margin-top: 0;
      padding: 3.472vw;
      border-radius: 0.417vw;
      &-main {
        margin-bottom: 2.778vw;
        &-title {
          font-size: 2.083vw;
        }
        &-price {
          font-size: 1.389vw;
        }
      }
    }
  }
  &__data {
    &-type {
      margin-bottom: 20px;
      & .title {
        font-weight: 500;
        font-size: 16px;
        margin-right: 10px;
        color: var(--primary-color);
      }
      & .amount {
        font-weight: 400;
        font-size: 14px;
        color: rgba(54, 54, 54, 0.8);
      }

      @media screen and (min-width: 768px) {
        margin-bottom: 20px;
        & .title {
          font-size: 16px;
          margin-right: 10px;
        }
        & .amount {
          font-size: 14px;
        }
      }
      @media screen and (min-width: 1440px) {
        margin-bottom: 1.389vw;
        & .title {
          font-size: 1.111vw;
          margin-right: 0.694vw;
        }
        & .amount {
          font-size: 0.972vw;
        }
      }
    }
  }
  &__desc {
    font-weight: 500;
    font-size: 16px;
    color: var(--primary-color);
    line-height: 1.5;
    margin-top: 30px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      margin-top: 40px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 1.111vw;
      margin-top: 2.778vw;
    }
  }
  &__images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    &-wrap {
      width: 100%;
      overflow: hidden;
      border-radius: 6px;
      position: relative;
      height: 120px;
      &.type0 {
        height: 100%;
        width: 100%;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      & .plus-photo {
        position: absolute;
        color: #fff;
        font-weight: 700;
        border-bottom: 1px solid #fff;
        bottom: 16px;
        right: 16px;
        font-size: 16px;
      }
    }
    @media screen and (min-width: 768px) {
      gap: 20px;
      &-wrap {
        height: 220px;
        border-radius: 6px;
        &.type0 {
          width: 100%;
        }
        & .plus-photo {
          bottom: 16px;
          right: 16px;
          font-size: 16px;
        }
      }
    }
    @media screen and (min-width: 1440px) {
      gap: 1.389vw;

      &-wrap {
        height: 9.514vw;
        border-radius: 0.417vw;
        &.type0 {
          width: 36.25vw;
        }
        & .plus-photo {
          bottom: 1.389vw;
          right: 1.389vw;
          font-size: 1.111vw;
        }
      }
    }
  }
}
</style>
