<template lang="pug">
    //- .card(v-if="card")
    n-link.card(:to="('/view/' + card.id)") 
        .card__image
            img(:src="test()")
        .card__info 
            .card__title(v-if="card.attributes.title || card.attributes.adress")
                .card__subtitle(v-if="card.attributes.title") {{card.attributes.title}}
                .card__address(v-if="card.attributes.adress") {{card.attributes.adress}}
            .card__price(v-if="card.attributes.purchase_type === 'purchase' && card.attributes.price") {{card.attributes.price}} $
            .card__price-commerse(v-if="card.attributes.purchase_type === 'commerce' && card.attributes.price")  {{card.attributes.price}} $
            .card__annual-commerse(v-if="card.attributes.purchase_type === 'commerce' && card.attributes.annual_income") {{card.attributes.annual_income}} роки окупність
            .card__item(v-if="card.attributes.number_of_rooms")
                span.title  Кількість кімнат: 
                span.amount {{card.attributes.number_of_rooms}}
            .card__item(v-if="card.attributes.floor")
                span.title  Поверх: 
                span.amount {{card.attributes.floor}}
            .card__item(v-if="card.attributes.apartment_area")
                span.title  Площа(м2): 
                span.amount {{card.attributes.apartment_area}}
            .card__item(v-if="card.attributes.living_area") 
                span.title  Житлова площа: 
                span.amount {{card.attributes.living_area}}
            .card__item(v-if="card.attributes.parking_type") 
                span.title  Тип паркомісця: 
                span.amount {{card.attributes.parking_type}}
        button.card__btn-more Детальнішe
</template>
<script>
export default {
  props: ["card"],
  data() {
    return {
      reserveImg: require("~/assets/test.jpeg"),
    };
  },
  methods: {
    test() {
      if (this.card.attributes.image.data) {
        let url;
        url = this.card.attributes.image.data[0].attributes.url;
        let link = `https://api.goldtowncompany.com${url}`;
        return link;
      } else {
        return this.reserveImg;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  background-color: #fff;
  border-radius: 0.694vw;
  overflow: hidden;
  max-height: 38.194vw;
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
  &__item {
    margin-bottom: 10px;
  }
  &__price,
  &__price-commerse,
  &__annual-commerse {
    position: absolute;
    border-radius: 0.417vw;
    padding: 1vw 2vw;
    font-weight: 600;
    font-size: 1.389vw;
  }
  &__price {
    top: 9.444vw;
    left: -1vw;
    background-color: var(--text-team-name);
    color: var(--accent-main-color);
  }
  &__price-commerse {
    top: 5.972vw;
    left: -1vw;
    background-color: var(--text-team-name);
    color: var(--accent-main-color);
  }
  &__annual-commerse {
    top: 10vw;
    left: -1vw;
    background-color: var(--accent-main-color);
    color: var(--text-team-name);
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
