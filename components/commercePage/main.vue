<template lang="pug">
    .buy 
        .buy__filter(:class="{'close': showFilters}" @click="openFilters")
            span.icon
            span.text Фiльтри
        .buy__console(:class="{'open': showFilters}")
            FilterWrap(:categoryes="Categories" :typePage="type")
        .buy__cards(v-if="CommerceData.length !== 0")
            Card(v-for="(card, i) in CommerceCardsData" :key="i" :card="card")
        .buy__pagination(v-if="CommerceData.length > 6")
            button.buy__pagination-left(@click="handlerPagination('back')" :disabled="page === 0") Назад
            button.buy__pagination-left(@click="handlerPagination('next')" :disabled="disabledNext")  Вперед
        .buy__cards(v-if="CommerceData.length === 0")
            .buy__cards-wrap
                p.buy__cards-icon
                p.buy__cards-text Варіанти відсутні
</template>
<script>
import Card from "../card.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      type: "commerce",
      page: 0,
      disabledNext: false,
      showFilters: false,
    };
  },
  methods: {
    handlerPagination(type) {
      let arrLength = this.CommerceData.length;
      if (type === "back") {
        this.disabledNext = false;
        this.page = this.page - 1;
        this.$store.commit("app/PAGINATION_COMMERSE", this.page);
      }
      if (type === "next") {
        this.page = this.page + 1;
        let x = 6 * (this.page + 1);
        this.$store.commit("app/PAGINATION_COMMERSE", this.page);
        if (arrLength - x < 6) {
          this.disabledNext = true;
        }
      }
    },
    openFilters() {
      this.showFilters = true;
    },
  },
  computed: {
    ...mapState({
      CommerceData: (state) => state.app.CommerceData,
      Categories: (state) => state.app.CommerceCaregoryes,
      CommerceCardsData: (state) => state.app.CommerceCardsData,
    }),
  },
  components: {
    Card,
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 767.98px) {
  .buy {
    padding: 100px 16px 0 16px;
    background-color: var(--light-bg);
    position: relative;

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
@media screen and (min-width: 768px) {
  .buy {
    padding: 100px 0 0 0;

    position: relative;
    display: flex;
    justify-content: flex-start;

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

    position: relative;
    display: flex;
    justify-content: flex-start;

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
