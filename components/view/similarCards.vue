<template lang="pug">
    .similar(v-if="CurrentPeaseData && SimilarCardsData")
        div(v-for="(card, i) in cards()" :key="i")
            p {{card.attributes.title}}
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      CurrentPeaseData: (state) => state.app.CurrentPeaseData.attributes,
      SimilarCardsData: (state) => state.app.SimilarCardsData,
    }),
  },
  methods: {
    cards() {
      if (this.SimilarCardsData.length > 0) {
        let newArr = this.SimilarCardsData.slice(0, 4);
        return newArr;
      }
    },
  },
  mounted() {
    let data = {
      type: this.CurrentPeaseData.purchase_type,
      filter: this.CurrentPeaseData.product_type,
    };
    this.$store.dispatch("app/getSimilarProposal", data);
  },
};
</script>
