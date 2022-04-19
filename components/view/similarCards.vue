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
      } else if (this.windowW >= 768 && this.windowW < 1440) {
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
  padding: 60px 16px 60px 16px;
  &__title {
    font-weight: 500;
    font-size: 24px;
    color: var(--primary-color);
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    padding: 60px 34px 60px 34px;

    &__title {
      font-size: 24px;
      margin-bottom: 30px;
    }
    &__cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1.944vw;
    }
  }
  @media screen and (min-width: 1440px) {
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
