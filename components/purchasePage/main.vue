<template lang="pug">
.buy(id="cards")
    .buy__filter(:class="{'close': showFilters}" @click="openFilters")
        span.icon
        span.text {{ $t('main.filters') }}
    .buy__console(:class="{'open': showFilters}")
        FilterWrap.buy__console-wrap(:categoryes="Categories" :typePage="type")
    .buy__cards(v-if="PurchaseData.length !== 0" )
        //- BreadCrumbs(:info="infoCrambs")
        .buy__cards-wraper
            Card(v-for="(card, i) in PurchaseCardsData" :key="i" :card="card")
        .buy__pagination(v-if="totalPages > 1")
            vs-pagination( :total-pages="totalPages" @change="changePage" :hide-prev-next="true")
    .buy__cards(v-if="PurchaseData.length === 0")
        //- BreadCrumbs(:info="infoCrambs")
        .buy__cards-wrap.nocards
            p.buy__cards-icon
            p.buy__cards-text {{ $t('main.no_options') }}
</template>
<script>
import Card from "../card.vue";
import FilterWrap from "~/components/FilterWrap.vue";
import BreadCrumbs from "~/components/breadCrambs.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      PurchaseData: (state) => state.app.PurchaseData,
      Categories: (state) => state.app.PurchaseCategories,
      PurchaseCardsData: (state) => state.app.PurchaseCardsData,
    }),
    totalPages() {
      let x = this.PurchaseData.length / 6;
      let y = Math.ceil(x);
      return y;
    },
  },
  methods: {
    changePage(page) {
      this.page = page - 1;
      this.$store.commit("app/PAGINATION_PUECHASE", this.page);
      this.goto();
    },

    openFilters() {
      this.showFilters = true;
    },
    goto() {
      document.getElementById("cards").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  data() {
    return {
      type: "purchase",
      page: 0,
      disabledNext: false,
      showFilters: false,
      infoCrambs: {
        links: [
          {
            name: "головна",
            link: "/",
          },
          {
            name: "commerce",
            link: "/",
          },
        ],
        currentPageName: "current",
      },
    };
  },
  components: {
    Card,
    FilterWrap,
    BreadCrumbs,
    // Paginate,
  },
};
</script>
<style lang="scss" scoped>
.buy {
  padding: 9.375vw 5vw 0 5vw;
  background-color: var(--light-bg);
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 3.906vw 4.688vw 0 4.688vw;
  }
  @media screen and (min-width: 1240px) {
    padding: 0 0 0 0;
    background-color: var(--light-bg);
    position: relative;
    display: flex;
  }

  &__filter {
    width: 100%;
    display: block;
    background-color: #fff;
    color: var(--accent-main-color);
    padding: 5vw 0;
    font-size: 5vw;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.875vw;
    & .icon {
      display: block;
      width: 7.5vw;
      height: 7.5vw;
      background-image: url(../../assets/svg/filter.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin-right: 3.125vw;
    }
    &.close {
      display: none;
    }

    @media screen and (min-width: 768px) {
      padding: 2.083vw 0;
      font-size: 2.083vw;
      border-radius: 0.781vw;

      & .icon {
        width: 3.125vw;
        height: 3.125vw;
        margin-right: 1.302vw;
      }
      &.close {
        display: flex;
      }
    }

    @media screen and (min-width: 1240px) {
      display: none;
    }
  }
  &__console {
    height: 100%;
    display: none;
    &.open {
      display: block;
    }
    @media screen and (min-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1000;
      background-color: rgb(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;

      &-wrap {
        width: 40.063vw;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    @media screen and (min-width: 1240px) {
      display: block;
      position: relative;
      // width: 26.736vw;
      // z-index: 3;
      height: 100%;
      background-color: inherit;
      width: auto;
      height: auto;

      &-wrap {
        width: 329px;
        /* width: 22.833vw; */
        position: relative;
        top: 0;
        left: 0;
        transform: translateX(0);
      }
    }
    @media screen and (min-width: 1540px) {
          &-wrap {
          /* width: 28.833vw; */
          width: 450px;
       
      }
    }
    @media screen and (min-width: 1940px) {
          &-wrap {
          /* width: 28.833vw; */
          width: 600px;
       
      }
    }
  }
  &__cards {
    padding: 5.556vw 0 8.333vw 0;
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;

    &-wraper {
      & > :not(:last-child) {
        margin-bottom: 9.375vw;
      }
    }

    @media screen and (min-width: 768px) {
      padding: 5.556vw 0 8.333vw 0;

      &-wraper {
        display: grid;
        grid-template-columns: repeat(2, 44.01vw);
        gap: 2.604vw;
        & > :not(:last-child) {
          margin-bottom: 0;
        }
      }
    }

    @media screen and (min-width: 1240px)  {
      padding: 80px 0 120px 36px;
      /* padding: 5.556vw 0 8.333vw 2.5vw; */

      &-wraper {
        display: grid;
        grid-template-columns: repeat(3, 21.181vw);
        
        gap: 2.083vw;
      }
    }

    @media screen and (min-width: 1540px)  {
           &-wraper {
        
        grid-template-columns: repeat(2, 400px);
        /* grid-template-columns: repeat(2, 27.181vw); */
       
      }
    }
    @media screen and (min-width: 1940px)  {
           &-wraper {
        
        grid-template-columns: repeat(2, 570px);
        /* grid-template-columns: repeat(2, 27.181vw); */
       
      }
    }
    &-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);

      &.nocards {
        text-align: center;
      }
      @media screen and (min-width: 1240px) {
        top: 13.889vw;
        left: auto;
        right: 30.764vw;
      }
    }
    &-icon {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 15vw;
      height: 15vw;
      background-image: url(../../assets/svg/flat-color-icons_search.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      @media screen and (min-width: 768px) {
        width: 6.25vw;
        height: 6.25vw;
      }
      @media screen and (min-width: 1240px) {
        width: 3.333vw;
        height: 3.333vw;
      }
    }
    &-text {
      font-weight: 500;
      color: rgba(54, 54, 54, 0.4);
      font-size: 5vw;
      margin-top: 5vw;
      @media screen and (min-width: 768px) {
        font-size: 2.25vw;
        margin-top: 2.083vw;
      }
      @media screen and (min-width: 1240px) {
        font-size: 1.667vw;
        margin-top: 1.111vw;
      }
    }
  }
  &__pagination {
    // display: flex;
    // justify-content: center;
    padding-bottom: 9.375vw;

    margin-top: 12.5vw;
    // margin-right: auto;
    margin-left: 0%;
    // margin-left: auto;
    &-left {
      margin-right: 4.688vw;
    }
    &-left,
    &-right {
      color: var(--accent-main-color);
      font-size: 4.375vw;
      font-weight: 400;
      transition: all 500ms ease;
      &:disabled {
        color: rgba(0, 0, 0, 0.65);
      }
      &:disabled:hover {
        color: rgba(0, 0, 0, 0.65);
      }
      &:hover {
        color: var(--hover-color);
      }
    }
    @media screen and (min-width: 768px) {
      padding-bottom: 3.906vw;
      margin-top: 5.208vw;
      &-left {
        margin-right: 1.953vw;
      }
      &-left,
      &-right {
        font-size: 1.823vw;
      }
    }
    @media screen and (min-width: 1240px) {
      padding-bottom: 2.083vw;
      margin-top: 2.778vw;
      margin-left: -9%;
      &-left {
        margin-right: 1.042vw;
      }
      &-left,
      &-right {
        font-size: 0.972vw;
      }
    }
  }
}
</style>
