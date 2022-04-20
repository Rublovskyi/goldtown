<template lang="pug">
    .btn
        a.btn__num(href="tel:+380679986959") +38(067)9986959
        .btn__icon
            img(src="~/assets/svg/phoneFixed.svg")
</template>
<style lang="scss" scoped>
.btn {
  position: fixed;
  bottom: 19.722vw;
  right: 5.6vw;
  display: flex;
  align-items: flex-end;
  padding: 5vw;
  background-color: var(--accent-main-color);
  border-radius: 1.875vw;
  transition: all 1000ms ease;
  z-index: 121;

  @media screen and (min-width: 768px) {
    bottom: 9.722vw;
    padding: 2.083vw;
    border-radius: 0.781vw;
  }
  @media screen and (min-width: 1440px) {
    bottom: 9.722vw;
    padding: 1.389vw;
    border-radius: 0.417vw;
  }

  &__icon {
    display: block;
    & img {
      width: 5vw;
      height: 5vw;

      @media screen and (min-width: 768px) {
        width: 2.083vw;
        height: 2.083vw;
      }
      @media screen and (min-width: 1440px) {
        width: 1.806vw;
        height: 1.806vw;
      }
    }
  }
  &__num {
    display: none;
    opacity: 0;
    color: #fff;
    font-size: 4.375vw;
    @media screen and (min-width: 768px) {
      font-size: 1.823vw;
    }
    @media screen and (min-width: 1440px) {
      font-size: 1.389vw;
    }
  }
  &:hover {
    border-radius: 1.875vw;
    background-color: var(--hover-color);

    @media screen and (min-width: 768px) {
      border-radius: 0.781vw;
    }
    @media screen and (min-width: 1440px) {
      border-radius: 0.347vw;
    }
  }
  &:hover .btn__num {
    display: block;
    opacity: 1;
    margin-right: 1.563vw;
    @media screen and (min-width: 768px) {
      margin-right: 0.651vw;
    }
    @media screen and (min-width: 1440px) {
      margin-right: 1.042vw;
    }
  }
}
</style>
