<template lang="pug">
    .about 
        .about__text
            h2.about__text-title О компании
            p.about__text-subtitle Привіт! Ми агенція нерухомості GoldToun Лідер з продажу нерухомості на Петропавлівській та Софіївській Борщагівці. Працюємо по всій Київській області та м. Київ. Досконало знаємо свою справу щоб Вам було: легко, зручно, надійно. З нами Ви можете продати, купити, здати, орендувати квартиру, будинок, таунхаус, дуплекс, комерційну нерухомість або земельну ділянку. Ми працюємо відкрито і чесно, з максимальною віддачею на результат.
        .about__image
            img(src="../assets/workPlace.jpeg")
</template>
<style lang="scss" scoped>
.about {
  display: flex;

  justify-content: flex-end;
  align-items: center;
  padding: 6.25vw 4.861vw;
  position: relative;
  margin-left: auto;
  background-image: linear-gradient(to bottom, #fff, rgba(187, 148, 119, 0.5));

  &__text {
    position: absolute;
    top: 8%;
    left: 15%;
    width: 40%;
    // height: 75%;
    background-color: #fff;
    padding: 3vw;

    &-title {
      display: inline-block;
      font-family: NotoSerif-Regular;
      color: var(--primary-color);
      font-size: 2.778vw;
      border-bottom: 0.347vw solid var(--primary-color);
    }
    &-subtitle {
      font-family: NotoSerif-Regular;
      color: var(--primary-color);
      font-size: 1.736vw;
      margin-top: 1.531vw;
    }
  }
  &__image {
    width: 60%;
    overflow: hidden;
    & img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
