<template lang="pug">
    .buy
        .buy__filter(:class="{'close': showFilters}" @click="openFilters")
            span.icon
            span.text Фiльтри
        .buy__console(:class="{'open': showFilters}")
            FilterWrap(:categoryes="Categories" :typePage="type")
        .buy__cards(v-if="PurchaseData.length !== 0")
            Card(v-for="(card, i) in PurchaseCardsData" :key="i" :card="card")
        .buy__pagination(v-if="PurchaseData.length > 6")
            button.buy__pagination-left(@click="handlerPagination('back')" :disabled="page === 0") Назад
            button.buy__pagination-left(@click="handlerPagination('next')" :disabled="disabledNext")  Вперед
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
      PurchaseCardsData: (state) => state.app.PurchaseCardsData,
    }),
  },
  methods: {
    handlerPagination(type) {
      let arrLength = this.PurchaseData.length;
      if (type === "back") {
        this.disabledNext = false;
        this.page = this.page - 1;
        this.$store.commit("app/PAGINATION_PUECHASE", this.page);
      }
      if (type === "next") {
        this.page = this.page + 1;
        let x = 6 * (this.page + 1);
        this.$store.commit("app/PAGINATION_PUECHASE", this.page);
        if (arrLength - x < 6) {
          this.disabledNext = true;
        }
      }
    },
    openFilters() {
      this.showFilters = true;
    },
  },
  data() {
    return {
      type: "purchase",
      page: 0,
      disabledNext: false,
      showFilters: false,
    };
  },
  components: {
    Card,
    FilterWrap,
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 767.98px) {
  .buy {
    padding: 100px 16px 0 16px;
    background-color: var(--light-bg);
    position: relative;

    &__filter {
      width: 100%;
      display: block;
      background-color: #fff;
      color: var(--accent-main-color);
      padding: 16px 0;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      & .icon {
        display: block;
        width: 24px;
        height: 24px;
        background-image: url(../../assets/svg/filter.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        margin-right: 10px;
      }
      &.close {
        display: none;
      }
    }
    &__console {
      // width: 26.736vw;

      height: 100%;
      display: none;
      &.open {
        display: block;
      }
    }
    &__cards {
      padding: 5.556vw 0 8.333vw 2.5vw;
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
    &__pagination {
      // display: flex;
      // align-items: center;
      // padding-left: 60%;
      display: block;
      padding-bottom: 30px;
      position: absolute;
      bottom: 0;
      left: 58%;
      &-left {
        margin-right: 15px;
      }
      &-left,
      &-right {
        color: var(--accent-main-color);
        font-size: 14px;
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
    }
  }
}
@media screen and (min-width: 768px) {
  .buy {
    padding: 100px 0 0 0;
    background-color: var(--light-bg);
    position: relative;
    // min-height: 86vw;
    display: flex;
    &__filter {
      display: none;
    }
    &__console {
      // position: absolute;
      // top: 10vh;
      // left: 0;
      width: 26.736vw;
      // z-index: 3;
      height: 100%;
    }
    &__cards {
      padding: 5.556vw 0 8.333vw 2.5vw;
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
    &__pagination {
      // display: flex;
      // align-items: center;
      // padding-left: 60%;
      display: block;
      padding-bottom: 30px;
      position: absolute;
      bottom: 0;
      left: 58%;
      &-left {
        margin-right: 15px;
      }
      &-left,
      &-right {
        color: var(--accent-main-color);
        font-size: 14px;
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
    }
  }
}
@media screen and (min-width: 1240px) {
  .buy {
    padding: 10vh 0 0 0;
    background-color: var(--light-bg);
    position: relative;
    // min-height: 86vw;
    display: flex;
    &__filter {
      display: none;
    }
    &__console {
      // position: absolute;
      // top: 10vh;
      // left: 0;
      width: 26.736vw;
      // z-index: 3;
      height: 100%;
    }
    &__cards {
      padding: 5.556vw 0 8.333vw 2.5vw;
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
    &__pagination {
      // display: flex;
      // align-items: center;
      // padding-left: 60%;
      display: block;
      padding-bottom: 30px;
      position: absolute;
      bottom: 0;
      left: 58%;
      &-left {
        margin-right: 15px;
      }
      &-left,
      &-right {
        color: var(--accent-main-color);
        font-size: 14px;
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
    }
  }
}
</style>
