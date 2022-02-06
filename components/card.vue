<template lang="pug">
    //- .card(v-if="card")
    n-link.card(:to="('/view/' + card.id)") 
        .card__image(v-if="card.attributes.src")
            img(:src="card.src")
        .card__image(v-if="!card.attributes.src")
            img(src="~/assets/test.jpeg")
        .card__info 
            .card__title(v-if="card.attributes.title || card.attributes.adress")
                .card__subtitle(v-if="card.attributes.title") {{card.attributes.title}}
                .card__address(v-if="card.attributes.adress") {{card.attributes.adress}}
            .card__price(v-if="card.attributes.price") {{card.attributes.price}} $
            .card__rooms(v-if="card.attributes.number_of_rooms")
                span.title  Кількість кімнат: 
                span.amount {{card.attributes.number_of_rooms}}
            .card__floor(v-if="card.attributes.floor")
                span.title  Поверх: 
                span.amount {{card.attributes.floor}}
            .card__area(v-if="card.attributes.apartment_area")
                span.title  Площа(м2): 
                span.amount {{card.attributes.apartment_area}}
            .card__living-area(v-if="card.attributes.livingArea") 
                span.title  Жилая прощадь: 
                span.amount {{card.livingArea}}
            .card__living-area(v-if="card.attributes.parking_type") 
                span.title  Тип паркомісця: 
                span.amount {{card.attributes.parking_type}}
        button.card__btn-more Детальнішe
</template>
<script>
export default {
  props: ["card"],
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  background-color: #fff;
  border-radius: 0.694vw;
  overflow: hidden;
  &__image {
    width: 100%;
    overflow: hidden;
    height: 13.889vw;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__title {
    font-weight: 500;
    color: var(--primary-color);
    font-size: 1.389vw;
    height: 6.944vw;
  }
  &__address {
    font-weight: 500;
    color: rgba(54, 54, 54, 0.4);
    font-size: 0.972vw;
    height: 6.944vw;
    margin-top: 0.417vw;
  }

  &__info {
    padding: 1.389vw 1.389vw 6.222vw 1.389vw;
  }

  .title {
    font-weight: 500;
    color: rgba(54, 54, 54, 0.8);
    font-size: 1.111vw;
  }
  .amount {
    font-size: 1.111vw;
    font-weight: 500;
    color: rgba(54, 54, 54, 0.8);
  }
  &__rooms,
  &__floor,
  &__area {
    margin-bottom: 10px;
  }
  &__price {
    position: absolute;
    top: 9.444vw;
    left: -1vw;
    border-radius: 0.417vw;
    background-color: var(--text-team-name);
    color: #fff;
    padding: 1.111vw 2.222vw;
    font-weight: 600;
    font-size: 1.389vw;
    color: var(--accent-main-color);
  }
  &__btn-more {
    padding: 1.111vw 5.372vw;
    // width: 100%;
    font-size: 1.583vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: var(--accent-main-color);
    border: 1px solid var(--accent-main-color);
    margin-top: 2.083vw;
    transition: all 700ms ease;
    border-radius: 0.417vw;
    position: absolute;
    bottom: 1.389vw;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
      background-color: var(--hover-color);
      border: 1px solid var(--hover-color);
      color: #fff;
    }
  }
}
</style>
