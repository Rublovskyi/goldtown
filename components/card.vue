<template lang="pug">
    //- .card(v-if="card")
    .card
        .card__image
            img(:src="test()")
        .card__info 
            .card__title(v-if="card.attributes.title || card.attributes.adress")
                .card__subtitle(v-if="card.attributes.title") {{card.attributes.title}}
                .card__address(v-if="card.attributes.adress") {{card.attributes.adress}}
            .card__price(v-if="card.attributes.purchase_type === 'purchase' && card.attributes.price") {{card.attributes.price}} $
            .card__price-commerse(v-if="card.attributes.purchase_type === 'commerce' && card.attributes.price")  {{card.attributes.price}} $
            .card__annual-commerse(v-if="card.attributes.purchase_type === 'commerce' && card.attributes.payback") {{card.attributes.payback}} роки окупність
            .card__list
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
                .card__item(v-if="card.attributes.annual_income") 
                    span.title  Річний дохід($): 
                    span.amount {{card.attributes.annual_income}}
            n-link.card__btn-more(:to="('/view/' + card.id)")  Детальнішe
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
  border-radius: 3.125vw;

  min-height: 156.25vw;

  overflow: hidden;
  @media screen and (min-width: 768px) {
    border-radius: 1.302vw;
    min-height: 65.104vw;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 0.694vw;
    min-height: 34.722vw;
  }

  &__image {
    width: 100%;
    overflow: hidden;
    height: 62.5vw;

    @media screen and (min-width: 768px) {
      height: 26.042vw;
    }

    @media screen and (min-width: 1440px) {
      height: 13.889vw;
    }
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
    font-size: 6.25vw;
    @media screen and (min-width: 768px) {
      font-size: 2.604vw;
    }
    @media screen and (min-width: 1440px) {
      font-size: 1.389vw;
      height: 6.944vw;
    }
  }
  &__address {
    font-weight: 500;
    color: rgba(54, 54, 54, 0.4);
    font-size: 4.375vw;
    margin-top: 1.875vw;

    @media screen and (min-width: 768px) {
      font-size: 1.823vw;
      margin-top: 0.781vw;
    }
    @media screen and (min-width: 1440px) {
      font-size: 0.972vw;
      height: 6.944vw;
      margin-top: 0.417vw;
    }
  }

  &__info {
    padding: 6.25vw 4.688vw 28.125vw 4.688vw;
    @media screen and (min-width: 768px) {
      padding: 2.604vw 1.953vw 11.719vw 1.953vw;
    }
    @media screen and (min-width: 1440px) {
      padding: 1.389vw 1.389vw 6.222vw 1.389vw;
    }
  }

  .title {
    font-weight: 500;
    color: rgba(54, 54, 54, 0.8);
    font-size: 5vw;

    @media screen and (min-width: 768px) {
      font-size: 2.083vw;
    }
    @media screen and (min-width: 1440px) {
      font-size: 1.111vw;
    }
  }
  .amount {
    font-weight: 400;
    color: rgba(54, 54, 54, 0.8);
    font-size: 4.375vw;
    @media screen and (min-width: 768px) {
      font-size: 1.823vw;
    }
    @media screen and (min-width: 1440px) {
      font-size: 1.111vw;
    }
  }

  &__list {
    margin-top: 6.25vw;
    // margin-bottom: 20px;

    & > :not(:last-child) {
      margin-bottom: 3.125vw;
    }

    @media screen and (min-width: 768px) {
      margin-top: 2.604vw;
      & > :not(:last-child) {
        margin-bottom: 1.302vw;
      }
    }
    @media screen and (min-width: 1440px) {
      margin-top: 1.389vw;
      & > :not(:last-child) {
        margin-bottom: 0.694vw;
      }
    }
  }

  &__price,
  &__price-commerse,
  &__annual-commerse {
    position: absolute;
    border-radius: 1.875vw;
    padding: 2.5vw 5vw;
    font-weight: 600;
    font-size: 6.25vw;

    @media screen and (min-width: 768px) {
      border-radius: 0.781vw;
      padding: 1.042vw 2.083vw;
      font-size: 2.604vw;
    }

    @media screen and (min-width: 1440px) {
      font-size: 1.389vw;
      padding: 1vw 2vw;
      border-radius: 0.417vw;
    }
  }
  &__price {
    top: 45vw;
    left: -1.875vw;
    background-color: var(--text-team-name);
    color: var(--accent-main-color);
    @media screen and (min-width: 768px) {
      top: 18.75vw;
      left: -0.781vw;
    }
    @media screen and (min-width: 1440px) {
      top: 9.444vw;
      left: -1vw;
    }
  }
  &__price-commerse {
    top: 32.813vw;
    left: -1.875vw;
    background-color: var(--text-team-name);
    color: var(--accent-main-color);
    @media screen and (min-width: 768px) {
      top: 13.672vw;
      left: -0.781vw;
    }
    @media screen and (min-width: 1440px) {
      top: 5.972vw;
      left: -1vw;
    }
  }
  &__annual-commerse {
    top: 48.438vw;
    left: -1.875vw;
    background-color: var(--accent-main-color);
    color: var(--text-team-name);
    @media screen and (min-width: 768px) {
      top: 20.182vw;
      left: -0.781vw;
    }
    @media screen and (min-width: 1440px) {
      top: 10vw;
      left: -1vw;
    }
  }
  &__btn-more {
    padding: 5vw 26.875vw;
    font-size: 5vw;
    display: block;
    color: var(--accent-main-color);
    border: 1px solid var(--accent-main-color);
    margin-top: auto;
    transition: all 700ms ease;
    border-radius: 1.875vw;
    position: absolute;
    bottom: 6.25vw;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
      background-color: var(--hover-color);
      border: 1px solid var(--hover-color);
      color: #fff;
    }

    @media screen and (min-width: 768px) {
      padding: 2.083vw 11.198vw;
      font-size: 2.083vw;
      border-radius: 0.781vw;
      bottom: 2.604vw;
    }
    @media screen and (min-width: 1440px) {
      padding: 1.111vw 5.372vw;
      font-size: 1.583vw;
      margin-top: 2.083vw;
      border-radius: 0.417vw;
      bottom: 1.204vw;
    }
  }
}
</style>
