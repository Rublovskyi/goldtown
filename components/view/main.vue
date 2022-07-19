<template lang="pug">
.view(v-if="info")
    .view__wrap
        .view__images
            .view__images-wrap(v-if="info.image.data" v-for="(img, i) in images()" :key="i" :class="['type'+i]" @click="openPhotoPopup(i)")
                //- img(:src="`https://api.goldtowncompany.com${img.attributes.url}`" :alt="info.title")
                //- img(:src="makePhotoUrl(img,'big')" :alt="info.title")
                img(v-if="img.attributes.url" :src="`https://api.goldtowncompany.com${img.attributes.url}`" :srcset="`https://api.goldtowncompany.com${img.attributes.formats.small ? img.attributes.formats.small.url : img.attributes.url} 320w, https://api.goldtowncompany.com${img.attributes.formats.medium ? img.attributes.formats.medium.url : img.attributes.url} 768w, https://api.goldtowncompany.com${img.attributes.formats.large ? img.attributes.formats.large.url : img.attributes.url} 1240w`" :alt="img.attributes.title")
                img(v-if="!img.attributes.url" :src="reserveImg")
                //- img(:src="makePhotoUrl(img,'big')" :srcset="`${img.attributes.formats.small.url ? makePhotoUrl(img,'small') : makePhotoUrl(img,'big')} 320w, ${img.attributes.formats.medium.url ? makePhotoUrl(img,'medium') : makePhotoUrl(img,'big')} 768w, ${img.attributes.formats.large.url ? makePhotoUrl(img,'large') : makePhotoUrl(img,'big')} 1240w`" )
                p.plus-photo(v-if="i === 2") {{amountPhoto()}} 
            .view__images-wrap.type0(v-if="!info.image.data")
                img(:src="testImg" alt="Фото отсутствует")
        .view__info 
            .view__info-main 
                h3.view__info-main-title {{info.title}}
                p.view__info-main-price {{info.price}}$
            .view__data
                p.view__data-type(v-if="info.number_of_rooms") 
                    span.title {{ $t('card.number_of_rooms') }}: 
                    span.amount {{info.number_of_rooms}}
                p.view__data-type(v-if="info.floor") 
                    span.title {{ $t('card.floor') }}: 
                    span.amount {{info.floor}}
                p.view__data-type(v-if="info.apartment_area") 
                    span.title {{ $t('card.apartment_area') }}: 
                    span.amount {{info.apartment_area}} м2
                p.view__data-type(v-if="info.living_area") 
                    span.title {{ $t('card.living_area') }}: 
                    span.amount {{info.living_area}} м2
                p.view__data-type(v-if="info.parking_type") 
                    span.title {{ $t('card.parking_type') }}:
                    span.amount {{info.parking_type}}
                p.view__data-type(v-if="info.city") 
                    span.title {{ $t('card.city') }}:
                    span.amount {{info.city}}
                p.view__data-type(v-if="info.annual_income") 
                    span.title {{ $t('card.annual_income') }}:
                    span.amount {{info.annual_income}}
                p.view__data-type(v-if="info.payback") 
                    span.title {{ $t('card.payback_view') }}:
                    span.amount {{info.payback}}
                p.view__data-type(v-if="info.adress") 
                    span.title {{ $t('card.address') }}:
                    span.amount {{info.adress}}
            p.view__desc(v-if="info.sub_title") {{info.sub_title}}
            .view__social
                a.view__social-item(href="https://www.facebook.com/goldtown.company"  target="_blank")
                    img(src="~/assets/svg/facebook-black.svg" alt="facefook icon")
                a.view__social-item(href="https://www.instagram.com/gt.org.ua/"  target="_blank")
                    img(src="~/assets/svg/instagram-black.svg" alt="instagram icon")

</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      info: (state) => state.app.CurrentPeaseData.attributes,
    }),
  },
  mounted() {
    console.log("main this info", this.info);
  },
  data() {
    return {
      testImg: require("~/assets/noPhoto.png"),
      reserveImg: require("~/assets/test.jpeg"),
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
      let currentImg = this.info.image.data[i];
      let images = this.info.image.data;
      this.$parent.photosData = {
        i,
        images,
        currentImg,
      };
      this.$parent.showPhotoPopup = true;
      document.body.style.overflow = "hidden";
    },
    makePhotoUrl(img, size) {
      console.log("imgimgimg", img);
      if (img) {
        let url;
        // url = this.card.attributes.image.data[0].attributes.formats.large.url;
        url =
          size === "large"
            ? img.attributes.formats.large.url
            : size === "medium"
            ? img.attributes.formats.medium.url
            : size === "small"
            ? img.attributes.formats.small.url
            : img.attributes.url;

        let link = `https://api.goldtowncompany.com${url}`;

        console.log(link);

        return link;
      } else {
        return this.reserveImg;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.view {
  padding: 6.25vw 5vw 6.25vw 5vw;

  @media screen and (min-width: 768px) {
    padding: 3.906vw 4.688vw 3.906vw 4.688vw;
  }

  @media screen and (min-width: 1240px) {
    padding: 5.417vw 5.556vw 5.417vw 5.556vw;
  }

  &__wrap {
    @media screen and (min-width: 1240px) {
      display: grid;
      grid-template-columns: 36.25vw 1fr;
      column-gap: 1.389vw;
    }
  }
  &__info {
    background-color: #fff;
    border-radius: 1.875vw;
    padding: 12.5vw 5vw;
    margin-top: 18.75vw;
    &-main {
      margin-bottom: 9.375vw;
      &-title {
        font-weight: 500;
        font-size: 7.5vw;
        color: var(--primary-color);
      }
      &-price {
        color: var(--accent-main-color);
        font-weight: 600;
        font-size: 6.25vw;
        margin-top: 9.375vw;
      }
    }
    @media screen and (min-width: 768px) {
      margin-top: 7.813vw;
      padding: 5.208vw 3.906vw;
      border-radius: 0.781vw;
      &-main {
        margin-bottom: 5.208vw;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        &-title {
          font-size: 3.125vw;
        }
        &-price {
          font-size: 2.604vw;
          margin-top: 0;
        }
      }
    }
    @media screen and (min-width: 1240px) {
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
      margin-bottom: 6.25vw;
      & .title {
        font-weight: 500;
        font-size: 5vw;
        margin-right: 3.125vw;
        color: var(--primary-color);
      }
      & .amount {
        font-weight: 400;
        font-size: 4.375vw;
        color: rgba(54, 54, 54, 0.8);
      }

      @media screen and (min-width: 768px) {
        margin-bottom: 2.604vw;
        & .title {
          font-size: 2.083vw;
          margin-right: 1.302vw;
        }
        & .amount {
          font-size: 1.823vw;
        }
      }
      @media screen and (min-width: 1240px) {
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
    font-size: 5vw;
    color: var(--primary-color);
    line-height: 1.5;
    margin-top: 9.375vw;

    @media screen and (min-width: 768px) {
      font-size: 2.083vw;
      margin-top: 5.208vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 1.111vw;
      margin-top: 2.778vw;
    }
  }
  &__images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5vw;

    &-wrap {
      width: 100%;
      overflow: hidden;
      border-radius: 1.875vw;
      position: relative;
      height: 37.5vw;
      &.type0 {
        max-height: 171.875vw;
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
        bottom: 5vw;
        right: 5vw;
        font-size: 5vw;
      }
    }
    @media screen and (min-width: 768px) {
      gap: 2.604vw;
      &-wrap {
        height: 28.646vw;
        border-radius: 0.781vw;
        &.type0 {
          max-height: 75vh;
          width: 100%;
        }
        & .plus-photo {
          bottom: 2.083vw;
          right: 2.083vw;
          font-size: 2.083vw;
        }
      }
    }
    @media screen and (min-width: 1240px) {
      gap: 1.389vw;

      &-wrap {
        height: 9.514vw;
        border-radius: 0.417vw;
        &.type0 {
          width: 36.25vw;
          max-height: 34.722vw;
        }
        & .plus-photo {
          bottom: 1.389vw;
          right: 1.389vw;
          font-size: 1.111vw;
        }
      }
    }
  }
  &__social {
    color: #fff;

    display: flex;
    font-size: 5vw;
    margin-top: 3vw;
    justify-content: flex-end;

    &-item {
      width: 5.25vw;
      height: 5.25vw;
      border-radius: 50%;
      // background-color: #fff;

      margin-right: 3vw;
      transition: all 500ms ease;

      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }

      &:hover {
        transform: scale(0.95);
      }
    }

    @media screen and (min-width: 768px) {
      font-size: 2.083vw;
      margin-top: 2.083vw;

      &-item {
        width: 2.25vw;
        height: 2.25vw;
        margin-right: 1.4vw;
      }
    }
    @media screen and (min-width: 1240px) {
      font-size: 1.111vw;
      margin-top: 1.111vw;

      &-item {
        width: 1.25vw;
        height: 1.25vw;

        margin-right: 1vw;
        margin-bottom: 0.4vw;
      }
    }
  }
}
</style>
