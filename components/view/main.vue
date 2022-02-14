<template lang="pug">
    .view(v-if="info")
        .view__wrap
            .view__images hrjd
            .view__info 
                .view__info-main 
                    .view__info-main-title {{info.title}}
                    .view__info-main-price {{info.price}}$
                .view__data
                    .view__data-type(v-if="info.number_of_rooms") 
                        span.title Кількість кімнат: 
                        span.amount {{info.number_of_rooms}}
                    .view__data-type(v-if="info.floor") 
                        span.title Поверх: 
                        span.amount {{info.floor}}
                    .view__data-type(v-if="info.apartment_area") 
                        span.title Площа(м2): 
                        span.amount {{info.apartment_area}} м2
                    .view__data-type(v-if="info.living_area") 
                        span.title Житлова площа: 
                        span.amount {{info.living_area}} м2
                    .view__data-type(v-if="info.parking_type") 
                        span.title Тип паркомісця:
                        span.amount {{info.parking_type}}
                    .view__data-type(v-if="info.city") 
                        span.title Місто:
                        span.amount {{info.city}}
                    .view__data-type(v-if="info.annual_income") 
                        span.title Річний дохід:
                        span.amount {{info.annual_income}}
                    .view__data-type(v-if="info.payback") 
                        span.title Окупність:
                        span.amount {{info.payback}}
                    .view__data-type(v-if="info.adress") 
                        span.title Адреса:
                        span.amount {{info.adress}}
                .view__desc(v-if="info.sub_title") {{info.sub_title}}

</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      info: (state) => state.app.CurrentPeaseData,
    }),
  },
};
</script>
<style lang="scss" scoped>
.view {
  padding: 10.417vw 5.556vw;

  &__wrap {
    display: grid;
    grid-template-columns: 36.25vw 1fr;
    column-gap: 1.389vw;
  }
  &__images {
    background-color: wheat;
  }
  &__info {
    background-color: #fff;
    border-radius: 0.417vw;
    padding: 3.472vw;
    &-main {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 2.778vw;
      &-title {
        font-weight: 500;
        font-size: 2.083vw;
        color: var(--primary-color);
      }
      &-price {
        color: var(--accent-main-color);
        font-weight: 600;
        font-size: 1.389vw;
      }
    }
  }
  &__data {
    &-type {
      margin-bottom: 1.389vw;
      & .title {
        font-weight: 500;
        font-size: 1.111vw;
        margin-right: 0.694vw;
        color: var(--primary-color);
      }
      & .amount {
        font-weight: 400;
        font-size: 0.972vw;
        color: rgba(54, 54, 54, 0.8);
      }
    }
  }
  &__desc {
    font-weight: 500;
    font-size: 1.111vw;
    color: var(--primary-color);
    line-height: 1.5;
    margin-top: 2.778vw;
  }
}
</style>
