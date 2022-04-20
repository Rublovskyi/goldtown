<template lang="pug">
    .similar(v-if="CurrentPeaseData && SimilarCardsData && ViewPageGetData")
        .similar__title(v-if="SimilarCardsData.length > 0") Рекомендовано для Вас
        .similar__cards
            Card(v-for="(card, i) in test()" :key="i" :card="card")
</template>
<script>
import { mapState } from "vuex";
import Card from "~/components/card.vue";

export default {
  data() {
    return {
      windowW: 768,
    };
  },
  computed: {
    ...mapState({
      CurrentPeaseData: (state) => state.app.CurrentPeaseData.attributes,
      SimilarCardsData: (state) => state.app.SimilarCardsData,
      ViewPageGetData: (state) => state.app.ViewPageGetData,
    }),
  },
  methods: {
    test() {
      let x = [];
      if (this.windowW < 768) {
        x = this.SimilarCardsData.slice(0, 1);
      } else if (this.windowW >= 768 && this.windowW < 1240) {
        x = this.SimilarCardsData.slice(0, 2);
      } else {
        x = this.SimilarCardsData.slice(0, 4);
      }
      return x;
    },
  },
  mounted() {
    let data = {
      type: this.CurrentPeaseData.purchase_type,
      filter: this.CurrentPeaseData.product_type,
    };
    this.$store.dispatch("app/getSimilarProposal", data);
    this.windowW = window.innerWidth;
  },
  components: {
    Card,
  },
};
</script>
<style lang="scss" scoped>
.similar {
  padding: 18.75vw 5vw 18.75vw 5vw;
  &__title {
    font-weight: 500;
    font-size: 7.5vw;
    color: var(--primary-color);
    margin-bottom: 9.375vw;
  }

  @media screen and (min-width: 768px) {
    padding: 7.813vw 4.427vw 7.813vw 4.427vw;

    &__title {
      font-size: 3.125vw;
      margin-bottom: 3.906vw;
    }
    &__cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1.944vw;
    }
  }
  @media screen and (min-width: 1240px) {
    padding: 0 5.556vw 2vw 5.556vw;
    &__title {
      font-size: 2.083vw;
      margin-bottom: 2.778vw;
    }
    &__cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1.944vw;
    }
  }
}
</style>
