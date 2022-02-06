<template lang="pug">
    .buy 
        .buy__console 
            FilterWrap(:categoryes="Categories")
        .buy__cards
            Card(v-for="(card, i) in CommerceData" :key="i" :card="card")
</template>
<script>
import Card from "../card.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      // categoryes: [
      //   {
      //     text: "Комори",
      //     selected: false,
      //   },
      //   {
      //     text: "Parking",
      //     selected: false,
      //   },
      //   {
      //     text: "Квартири",
      //     selected: false,
      //   },
      //   {
      //     text: "Комерція",
      //     selected: false,
      //   },
      //   {
      //     text: "Земельні ділянки",
      //     selected: false,
      //   },
      // ],
    };
  },
  computed: {
    ...mapState({
      CommerceData: (state) => state.app.CommerceData,
      Categories: (state) => state.app.Categories,
    }),
  },
  components: {
    Card,
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
