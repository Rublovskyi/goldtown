<template lang="pug">
    .buy 
        .buy__console 
            FilterWrap(:categoryes="Categories")
        .buy__cards
            Card(v-for="(card, i) in PurchaseData" :key="i" :card="card")
</template>
<script>
import Card from "../card.vue";
import FilterWrap from "~/components/FilterWrap.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      // categoryes: [
      //   {
      //     text: "Квартири",
      //     selected: false,
      //   },
      //   {
      //     text: "Parking",
      //     selected: false,
      //   },
      //   {
      //     text: "Комори",
      //     selected: false,
      //   },
      // ],
    };
  },
  computed: {
    ...mapState({
      PurchaseData: (state) => state.app.PurchaseData,
      Categories: (state) => state.app.Categories,
    }),
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
