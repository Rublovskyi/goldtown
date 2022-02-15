<template lang="pug">
    .similar(v-if="CurrentPeaseData && SimilarCardsData.length > 0")
        .similar__title(v-if="SimilarCardsData.length > 0") Рекомендовано для Вас
        .similar__cards
            Card(v-for="(card, i) in SimilarCardsData" :key="i" :card="card")
</template>
<script>
import { mapState } from "vuex";
import Card from "~/components/card.vue";

export default {
  computed: {
    ...mapState({
      CurrentPeaseData: (state) => state.app.CurrentPeaseData.attributes,
      SimilarCardsData: (state) => state.app.SimilarCardsData,
    }),
  },
  mounted() {
    let data = {
      type: this.CurrentPeaseData.purchase_type,
      filter: this.CurrentPeaseData.product_type,
    };
    this.$store.dispatch("app/getSimilarProposal", data);
  },
  components: {
    Card,
  },
};
</script>
<style lang="scss" scoped>
.similar {
  padding: 0 5.556vw 2vw 5.556vw;
  &__title {
    font-weight: 500;
    font-size: 2.083vw;
    color: var(--primary-color);
    margin-bottom: 2.778vw;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.944vw;
  }
}
</style>
