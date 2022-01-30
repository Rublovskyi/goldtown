<template lang="pug">
    //- .card(v-if="card")
    n-link.card(:to="('/view/' + card.id)") 
        .card__image(v-if="card.attributes.src")
            img(:src="card.src")
        .card__image(v-if="!card.attributes.src")
            img(src="~/assets/test.jpeg")
        .card__title(v-if="card.attributes.title") {{card.attributes.title}}
        .card__price(v-if="card.attributes.price")
            span.title Цена: 
            span.amount {{card.attributes.price}} $
        .card__rooms(v-if="card.attributes.number_of_rooms")
            span.title  К-во комнат: 
            span.amount {{card.attributes.number_of_rooms}}
        .card__floor(v-if="card.attributes.floor")
            span.title  Этаж: 
            span.amount {{card.attributes.floor}}
        .card__area(v-if="card.attributes.apartment_area")
            span.title  Площадь: 
            span.amount {{card.attributes.apartment_area}}
        .card__living-area(v-if="card.attributes.livingArea") 
            span.title  Жилая прощадь: 
            span.amount {{card.livingArea}}
        button.card__btn-more Детальнішe
</template>
<script>
export default {
  props: ["card"],
};
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid var(--bg-main-color);
  padding: 1.389vw;
  position: relative;
  background-color: #fff;
  &__image {
    width: 100%;
    overflow: hidden;
    & img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__title {
    margin: 1.736vw 0;
    font-family: NotoSerif-Regular;
    font-weight: 700;
    color: var(--primary-color);
    font-size: 1.736vw;
    text-align: center;
    height: 6.944vw;
  }

  .title {
    font-family: NotoSerif-Regular;
    font-weight: 400;
    color: var(--primary-color);
    font-size: 1.736vw;
  }
  .amount {
    font-size: 1.936vw;
  }
  &__price {
    position: absolute;
    top: 1.389vw;
    left: -1.389vw;
    background-color: var(--accent-main-color);
    color: #fff;
    padding: 1.042vw;
    & .title {
      color: #fff;
      font-weight: 400;
    }
    & .amount {
      font-weight: 700;
      font-size: 2.083vw;
    }
  }
  &__btn-more {
    padding: 1.389vw 2.083vw;
    font-size: 1.583vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: var(--accent-main-color);
    border: 1px solid var(--bg-main-color);
    background-image: linear-gradient(to left, var(--light-bg), #fff);
    margin-top: 3.472vw;
    transition: all 700ms ease;
    &:hover {
      background-image: none;
      background-color: var(--accent-main-color);
      color: #fff;
    }
  }
}
</style>
