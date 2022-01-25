<template lang="pug">
    //- .card(v-if="card")
    n-link.card(:to="('/house/' + card.id)") 
        .card__image
            img(:src="card.src")
        .card__title {{card.title}}
        .card__price 
            span.title Цена: 
            span.amount {{card.price}} $
        .card__rooms 
            span.title  К-во комнат: 
            span.amount {{card.amountRoom}}
        .card__floor 
            span.title  Этаж: 
            span.amount {{card.floor}}
        .card__area 
            span.title  Площадь: 
            span.amount {{card.area}}
        .card__living-area 
            span.title  Жилая прощадь: 
            span.amount {{card.livingArea}}
        
        
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
    top: 20px;
    left: -20px;
    background-color: var(--accent-main-color);
    color: #fff;
    padding: 15px;
    & .title {
      color: #fff;
      font-weight: 400;
    }
    & .amount {
      font-weight: 700;
      font-size: 30px;
    }
  }
}
</style>
