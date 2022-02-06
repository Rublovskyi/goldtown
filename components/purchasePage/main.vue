<template lang="pug">
    .buy 
        .buy__console 
            FilterWrap(:categoryes="Categories" :typePage="type")
        .buy__cards(v-if="PurchaseData.length !== 0")
            Card(v-for="(card, i) in PurchaseData" :key="i" :card="card")
        .buy__cards(v-if="PurchaseData.length === 0")
            p Варіанти відсутні
</template>
<script>
import Card from "../card.vue";
import FilterWrap from "~/components/FilterWrap.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      PurchaseData: (state) => state.app.PurchaseData,
      Categories: (state) => state.app.PurchaseCategories,
    }),
  },
  data() {
    return {
      type: "purchase",
    };
  },
  components: {
    Card,
    FilterWrap,
  },
};
</script>
<style lang="scss" scoped>
.buy {
  padding: 10vh 5.556vw 0 0;
  background-color: var(--light-bg);
  position: relative;
  min-height: 80vw;
  &__console {
    position: absolute;
    top: 10vh;
    left: 0;
    width: 26.736vw;

    padding: 5.208vw 5.556vw 5.208vw 5.556vw;
    background-color: #fff;
  }
  &__cards {
    padding: 5.556vw 0 8.333vw 29.125vw;
    display: grid;
    grid-template-columns: repeat(3, 21.181vw);
    gap: 2.083vw;
  }
}
</style>
