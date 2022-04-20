<template lang="pug">
    .photo(v-if="photosData" @click="closePopup")
        .photo__wrap
            img(:src="`https://api.goldtowncompany.com${photosData.currentImg}`")
        .photo__btns-slide(v-if="photosData.images.length > 1" @click="handlerPhotoChange")
            button.photo__btns-slide-left(data-arrow="left")
            button.photo__btns-slide-right(data-arrow="right")
        .photo__btn-close
</template>
<script>
export default {
  props: ["photosData"],
  methods: {
    closePopup(e) {
      if (e.target.className === "photo__btn-close") {
        this.$parent.showPhotoPopup = false;
        document.body.style.overflow = "";
      }
    },
    handlerPhotoChange(e) {
      let cardsLenght = this.photosData.images.length;

      if (e.target.dataset.arrow === "right") {
        let indexCardNeeded = this.photosData.i + 1;
        if (indexCardNeeded === cardsLenght) {
          this.photosData.i = 0;
          this.photosData.currentImg = this.photosData.images[0].attributes.url;
        } else {
          this.photosData.i = indexCardNeeded;
          this.photosData.currentImg =
            this.photosData.images[indexCardNeeded].attributes.url;
        }
      }
      if (e.target.dataset.arrow === "left") {
        let indexCardNeeded = this.photosData.i - 1;
        if (indexCardNeeded < 0) {
          this.photosData.i = cardsLenght - 1;
          this.photosData.currentImg =
            this.photosData.images[cardsLenght - 1].attributes.url;
        } else {
          this.photosData.i = indexCardNeeded;
          this.photosData.currentImg =
            this.photosData.images[indexCardNeeded].attributes.url;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.photo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.84);
  z-index: 201;
  &__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 90vh;

    z-index: 220;
    overflow: hidden;
    border-radius: 1.875vw;
    z-index: 100;
    // background-color: #fff;

    @media screen and (min-width: 768px) {
      width: 90.625vw;
      height: 90vh;
      border-radius: 0.781vw;
    }
    @media screen and (min-width: 1240px) {
      width: 73.889vw;
      height: 90vh;
      border-radius: 0.417vw;
    }

    & img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: contain;
    }
  }
  &__btn-close {
    position: absolute;
    top: 6.25vw;
    right: 6.25vw;
    width: 15.625vw;
    height: 15.625vw;
    // background-color: #fff;
    background-image: url(../assets/svg/close.svg);
    background-repeat: no-repeat;
    background-size: 6.25vw 6.25vw;
    background-position: center;
    z-index: 10000;

    @media screen and (min-width: 768px) {
      top: 2.604vw;
      right: 2.604vw;
      width: 6.51vw;
      height: 6.51vw;
      background-size: 2.604vw 2.604vw;
    }
    @media screen and (min-width: 1240px) {
      top: 3.472vw;
      right: 5.556vw;
      width: 3.472vw;
      height: 3.472vw;
      background-size: 1.389vw 1.389vw;
    }
  }
  &__btns-slide {
    &-left,
    &-right {
      width: 9.375vw;
      height: 9.375vw;
      // background-color: #fff;
      position: absolute;
      top: 50%;
      background-repeat: no-repeat;
      background-size: 6.875vw 6.875vw;
      background-position: center;
      background-image: url(../assets/svg/vector.svg);
      transition: all 500ms ease;
      z-index: 2000;
    }
    &-left {
      left: 5vw;
      transform: rotate(180deg);
    }
    &-right {
      right: 5vw;
    }

    @media screen and (min-width: 768px) {
      &-left,
      &-right {
        width: 6.51vw;
        height: 6.51vw;
        background-size: 2.865vw 2.865vw;
      }
      &-left {
        left: 1.302vw;
      }
      &-right {
        right: 1.302vw;
      }
    }
    @media screen and (min-width: 1240px) {
      &-left,
      &-right {
        width: 3.472vw;
        height: 3.472vw;
        background-size: 1.528vw 1.528vw;
      }
      &-left {
        left: 5.556vw;
        &:hover {
          transform: rotate(180deg) scale(1.3);
        }
      }
      &-right {
        right: 5.556vw;
        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }
}
</style>
