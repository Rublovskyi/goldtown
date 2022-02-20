<template lang="pug">
    a.btn(href="tel:+380679986959")
        .btn__num +38(067)9986959
        .btn__icon
            img(src="~/assets/svg/phoneFixed.svg")
</template>
<style lang="scss" scoped>
@media screen and (max-width: 1439.98px) {
  .btn {
    position: fixed;
    bottom: 19.722vw;
    right: 5.6vw;
    display: flex;
    align-items: flex-end;
    padding: 16px;
    background-color: var(--accent-main-color);
    border-radius: 6px;
    transition: all 1000ms ease;
    z-index: 121;

    &__icon {
      display: block;
      & img {
        width: 16px;
        height: 16px;
      }
    }
    &__num {
      display: none;
      opacity: 0;
      color: #fff;
      font-size: 14px;
    }
    &:hover {
      border-radius: 6px;
      background-color: var(--hover-color);
    }
    &:hover .btn__num {
      display: block;
      opacity: 1;
      margin-right: 5px;
    }
  }
}
@media screen and (min-width: 768px) {
  .btn {
    bottom: 9.722vw;
  }
}

@media screen and (min-width: 1240px) {
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
      font-size: 1.389vw;
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
}
</style>
