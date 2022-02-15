<template lang="pug">
    .photo(v-if="photosData" @click="closePopup")
        .photo__wrap
            img(:src="`https://api.goldtowncompany.com${photosData.currentImg}`")
            .photo__btns-slide(v-if="photosData.images.length > 1" @click="handlerPhotoChange")
                button.photo__btns-slide-left(data-arrow="left")
                button.photo__btns-slide-right(data-arrow="right")
        //- .photo__btn-close
</template>
<script>
export default {
  props: ["photosData"],
  methods: {
    closePopup(e) {
      if (e.target === e.currentTarget) {
        this.$parent.showPhotoPopup = false;
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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 201;
  &__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;
    height: 80%;
    z-index: 220;
    overflow: hidden;
    border-radius: 0.417vw;
    // background-color: #fff;

    & img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }
  &__btn-close {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 20px;
    height: 20px;
    background-color: #fff;
  }
  &__btns-slide {
    &-left,
    &-right {
      width: 40px;
      height: 40px;
      background-color: #fff;
      position: absolute;
      top: 50%;
    }
    &-left {
      left: 0;
    }
    &-right {
      right: 0;
    }
  }
}
</style>
