<template lang="pug">
    .view(v-if="info")
        .view__wrap
            .view__images
                .view__images-wrap(v-if="info.image.data" v-for="(img, i) in images()" :key="i" :class="['type'+i]" @click="openPhotoPopup(i)")
                    img(:src="`https://api.goldtowncompany.com${img.attributes.url}`")
                    p.plus-photo(v-if="i === 2") +{{amountPhoto()}} фото
                .view__images-wrap.type0(v-if="!info.image.data")
                    img(:src="testImg")
                //- .view__images-wrap.type2(v-if="info.image.data && info.image.data.length === 2")
                //-     img(:src="testImg")
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
        return this.info.image.data.length - 3;
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
    },
  },
};
</script>
<style lang="scss" scoped>
.view {
  padding: 10.417vw 5.556vw;

  &__wrap {
    display: grid;
    grid-template-columns: 36.25vw 1fr;
    column-gap: 1.389vw;
  }
  &__info {
    background-color: #fff;
    border-radius: 0.417vw;
    padding: 3.472vw;
    &-main {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 2.778vw;
      &-title {
        font-weight: 500;
        font-size: 2.083vw;
        color: var(--primary-color);
      }
      &-price {
        color: var(--accent-main-color);
        font-weight: 600;
        font-size: 1.389vw;
      }
    }
  }
  &__data {
    &-type {
      margin-bottom: 1.389vw;
      & .title {
        font-weight: 500;
        font-size: 1.111vw;
        margin-right: 0.694vw;
        color: var(--primary-color);
      }
      & .amount {
        font-weight: 400;
        font-size: 0.972vw;
        color: rgba(54, 54, 54, 0.8);
      }
    }
  }
  &__desc {
    font-weight: 500;
    font-size: 1.111vw;
    color: var(--primary-color);
    line-height: 1.5;
    margin-top: 2.778vw;
  }
  &__images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.389vw;

    &-wrap {
      height: 9.514vw;
      width: 100%;
      overflow: hidden;
      border-radius: 0.417vw;
      position: relative;
      &.type0 {
        height: 100%;
        width: 36.25vw;
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
        bottom: 1.389vw;
        right: 1.389vw;
        color: #fff;
        font-weight: 700;
        font-size: 1.111vw;
        border-bottom: 1px solid #fff;
      }
    }
  }
}
</style>
