<template lang="pug">
    .about 
        .about__text
            h2.about__text-title Про нас
            p.about__text-subtitle Привіт! Ми агенція нерухомості GoldToun Лідер з продажу нерухомості на Петропавлівській та Софіївській Борщагівці. Працюємо по всій Київській області та м. Київ. Досконало знаємо свою справу щоб Вам було: легко, зручно, надійно. З нами Ви можете продати, купити, здати, орендувати квартиру, будинок, таунхаус, дуплекс, комерційну нерухомість або земельну ділянку. Ми працюємо відкрито і чесно, з максимальною віддачею на результат.
        .about__image
            img(src="../assets/workPlace.png")
</template>
<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8.333vw 5.556vw;
  position: relative;
  margin-left: auto;

  &__text {
    width: 50%;
    background-color: #fff;
    padding: 3vw;

    &-title {
      display: inline-block;
      color: var(--primary-color);
      font-weight: 400;
      font-size: 2.083vw;
    }
    &-subtitle {
      color: var(--primary-color);
      font-weight: 400;
      font-size: 1.111vw;
      margin-top: 1.531vw;
      line-height: 1.5;
      padding-right: 8.819vw;
    }
  }
  &__image {
    overflow: hidden;
    height: 25.139vw;
    & img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
