<template lang="pug">
    a.btn(href="tel:+380679986959")
        .btn__num +38(067)9986959
        .btn__icon
            img(src="~/assets/svg/phoneFixed.svg")
</template>
<style lang="scss" scoped>
.btn {
  position: fixed;
  bottom: 9.722vw;
  right: 5.6vw;
  display: flex;
  align-items: flex-end;
  padding: 1.389vw;
  background-color: var(--accent-main-color);
  border-radius: 0.417vw;
  transition: all 1000ms ease;

  &__icon {
    display: block;
    & img {
      width: 1.806vw;
      height: 1.806vw;
    }
  }
  &__num {
    display: none;
    opacity: 0;
    color: #fff;
  }
  &:hover {
    border-radius: 0.347vw;
    background-color: var(--hover-color);
  }
  &:hover .btn__num {
    display: block;
    opacity: 1;
    margin-right: 1.042vw;
  }
}
</style>
