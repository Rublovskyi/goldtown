<template lang="pug">
    .scroll-up(:class="{ 'headerUnvisible': headerUnvisible}" @click="scrollUp") 
        img.scroll-up__img(src="~/assets/svg/vector.svg")
</template>
<script>
export default {
  data() {
    return {
      scrollPrev: 0,
      headerUnvisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY;

      if (scrolled > 100) {
        this.headerUnvisible = true;
      } else {
        this.headerUnvisible = false;
      }
      this.scrollPrev = scrolled;
    });
  },
  methods: {
    scrollUp() {
      this.$parent.goto();
    },
  },
};
</script>
<style lang="scss" scoped>
.scroll-up {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 50vw;
  height: 15.625vw;
  border-radius: 50%;
  //   border-top-left-radius: 50%;
  background-color: rgba($color: #000000, $alpha: 0.3);
  z-index: 400;
  transform: translate(-50%, 100%);

  &__img {
    position: absolute;
    top: 1.563vw;
    left: 50%;
    width: 6.25vw;
    height: 6.25vw;
    // background-image: url(../assets/svg/vector.svg);
    // background-repeat: no-repeat;
    // background-position: top;
    // background-size: contain;
    transform: translate(-50%, 0) rotate(-90deg);
  }

  @media screen and (min-width: 768px) {
    width: 19.531vw;
    height: 5.208vw;
    &__img {
      width: 1.953vw;
      height: 1.953vw;
      top: 0.521vw;
    }
  }
  @media screen and (min-width: 1240px) {
    width: 12.903vw;
    height: 4.839vw;
    &__img {
      width: 1.613vw;
      height: 1.613vw;
      top: 0.484vw;
    }
  }
}
.scroll-up.headerUnvisible {
  transform: translate(-50%, 50%);
}
</style>
