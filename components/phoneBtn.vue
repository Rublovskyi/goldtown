<template lang="pug">
    .btn 
        .btn__small 
            img(src="~/assets/svg/mobile.svg")
        a.btn__big(href="tel:+380679986959")  +380679986959
</template>
<style lang="scss" scoped>
.btn {
  position: fixed;
  bottom: 6.944vw;
  right: 6.944vw;

  &__small {
    display: block;
    padding: 25px 25px;
    background-color: var(--accent-main-color);
    border-radius: 50%;
    opacity: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: all 700ms ease;
    & img {
      width: 25px;
      height: 25px;
    }
  }
  &__big {
    opacity: 0;
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--accent-main-color);
    border-radius: 10px;
    transition: all 700ms ease;
    font-size: 1.111vw;
    color: #fff;
    padding: 26px 25px;
  }
  &:hover .btn__small,
  &:focus .btn__small {
    opacity: 0;
  }
  &:hover .btn__big,
  &:focus .btn__big {
    opacity: 1;
  }
}
</style>
