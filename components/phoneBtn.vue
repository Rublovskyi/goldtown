<template lang="pug">
    a.btn(href="tel:+380679986959")
        .btn__num +380679986959
        .btn__icon
            img(src="~/assets/svg/mobile.svg")
</template>
<style lang="scss" scoped>
.btn {
  position: fixed;
  bottom: 6.944vw;
  right: 6.944vw;
  display: flex;
  align-items: center;
  padding: 25px 25px;
  background-color: var(--accent-main-color);
  border-radius: 50%;
  transition: all 1000ms ease;

  &__icon {
    display: block;
    & img {
      width: 25px;
      height: 25px;
    }
  }
  &__num {
    display: none;
    opacity: 0;
  }
  &:hover {
    border-radius: 5px;
  }
  &:hover .btn__num {
    display: block;
    opacity: 1;
    margin-right: 15px;
  }
}
</style>
