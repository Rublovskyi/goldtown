<template lang="pug">
    .buy 
        .buy__console 
            FilterWrap(:categoryes="Categories" :typePage="type")
        .buy__cards(v-if="PurchaseData.length !== 0")
            Card(v-for="(card, i) in PurchaseData" :key="i" :card="card")
        .buy__cards(v-if="PurchaseData.length === 0")
            .buy__cards-wrap
                p.buy__cards-icon
                p.buy__cards-text Варіанти відсутні
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
  min-height: 86vw;
  &__console {
    position: absolute;
    top: 10vh;
    left: 0;
    width: 26.736vw;

    padding: 5.208vw 5.556vw 5.208vw 5.556vw;
    background-color: #fff;
    z-index: 3;
  }
  &__cards {
    padding: 5.556vw 0 8.333vw 29.125vw;
    display: grid;
    grid-template-columns: repeat(3, 21.181vw);
    gap: 2.083vw;
    position: relative;
    z-index: 0;
    &-wrap {
      position: absolute;
      top: 13.889vw;
      right: 30.764vw;
    }
    &-icon {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 3.333vw;
      height: 3.333vw;
      background-image: url(../../assets/svg/flat-color-icons_search.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    &-text {
      font-weight: 500;
      color: rgba(54, 54, 54, 0.4);
      font-size: 1.667vw;
      margin-top: 1.111vw;
    }
  }
}
</style>
