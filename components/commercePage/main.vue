<template lang="pug">
    .buy 
        .buy__console 
            .buy__console-category
                h2 Вибір категоріі
                p(v-for="(type, i) in categoryes" :key="i") {{type.text}}
            //- .buy__console-filter
            //-     h2 Фільтри
        .buy__cards()
            Card(v-for="(card, i) in PurchaseData" :key="i" :card="card")
</template>
<script>
import Card from "../card.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      houses: require("~/assets/data.json"),
      categoryes: [
        {
          text: "Комори",
        },
        {
          text: "Parking",
        },
        {
          text: "Квартири",
        },
        {
          text: "Комерція",
        },
        {
          text: "Земельні ділянки",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      PurchaseData: (state) => state.app.PurchaseData,
    }),
  },
  components: {
    Card,
  },
};
</script>
<style lang="scss" scoped>
.buy {
  padding: 10vh 5.944vw 0;
  // background-image: linear-gradient(to bottom, #fff, rgba(194, 146, 90, 0.5));
  display: grid;
  grid-template-columns: 25% 75%;
  column-gap: 3.472vw;
  &__console {
    border-right: 1px solid black;
    padding: 3.472vw 0;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 27.778vw);
    gap: 2.083vw;
    padding: 3.472vw 0;
  }
}
</style>
