<template lang="pug">
.filter 
    button.filter__close(@click="filterClose")
    .filter__category
        p.title {{ $t('filter.select_category') }}
        n-link.filter__category-item( v-for="(category, i) in categoryes" :key="i" :class="{'select': category.selected}" :to="localePath(`/${typePage}/${category.slug}`)") 
            span.box
            span.text {{locale === "ru" ? category.nameRu : category.nameUa}}
    .filter__wrap
        p.title {{ $t('filter.filters') }}
        .filter__category-item.instalmet(:class="{'select': finished}" @click="selectoooor('finished')")
            span.box
            span.text {{$t('filtersSelect.finished')}}
        .filter__category-item.instalmet(:class="{'select': instalment}" @click="selectoooor('instalment')")
            span.box
            span.text {{$t('filtersSelect.instalment')}}
        .filter__price 
            p.filter__title {{ $t('filter.price') }}
            .filter__price-select
                .filter__price-input
                    input(type="number"  v-model="from" placeholder="Min")
                    span.dollar $
                span.slash -
                .filter__price-input
                    input(type="number"  v-model="to" placeholder="Max")
                    span.dollar $
            p.error-text {{validate('price')}}
        .filter__variants(v-for="(item,i) in filters" :key="i")
            filterSelect(:info="item" v-if="canShowFilter(item.name)")
        .filter__category-item.instalmet(:class="{'select': pool}" @click="selectoooor('pool')" v-if="canShowFilter('pool')")
            span.box
            span.text {{$t('filtersSelect.pool')}}
        button.filter__btn(@click="handlerFilteredData") {{ $t('filter.to_apply') }}
</template>
<script>
import { mapState } from "vuex";
import filterSelect from "~/components/filterSelect.vue";

export default {
  props: ["categoryes", "typePage"],
  data() {
    return {
      from: "",
      to: "",
      errorTextPrice: "",
      locale: "ua",
      newArrToget: {},
      instalment: false,
      pool: false,
      finished: false,
    };
  },
  computed: {
    ...mapState({
      filters: (state) => state.app.Filters,
    }),
  },
  methods: {
    hendlerSelect(name, selectedItem) {
      // console.log("im hererere", name, selectedItem);
      let x = {
        name,
        selectedItem,
      };
      this.newArrToget[`${x.name}`] = x.selectedItem;

      // console.log("this.newArrToget", this.newArrToget);
    },
    validate(type) {
      if (type === "price") {
        if (this.from < 0 || this.to < 0) {
          this.errorTextPrice = "Ціна не повінна мати мінусових значень";
        } else if (this.from.length !== 0 && this.to.length !== 0) {
          let numFrom = Number(this.from);
          let numTo = Number(this.to);
          if (numFrom > numTo) {
            this.errorTextPrice = "Початкова ціна має бути меньше за кінцеву";
          } else {
            this.errorTextPrice = "";
          }
        } else {
          this.errorTextPrice = "";
        }
        return this.errorTextPrice;
      }
    },
    handlerFilteredData() {
      if (this.from.length !== 0) {
        this.newArrToget.price_from = this.from;
      }
      if (this.to.length !== 0) {
        this.newArrToget.price_to = this.to;
      }

      if (this.errorTextPrice.length === 0) {
        this.localePathRoute();
      }
    },
    localePathRoute() {
      let x = [];

      for (let key in this.newArrToget) {
        if (this.newArrToget.hasOwnProperty(key)) {
          x.push(`${key}=${this.newArrToget[key]}`);
        }
      }

      if (this.pool) {
        x.push("pool");
      }
      if (this.instalment) {
        // x[0] = "Instalment";
        x.push("instalment");
      }
      if (this.finished) {
        // x[0] = "Instalment";
        x.push("finished");
      }

      let y = x.join("&");

      // console.log("itn ono", y, this.typePage);

      if (this.$route.params.type) {
        this.$router.push({
          path: this.localePath(
            `/${this.typePage}/${this.$route.params.type}/${y}`
          ),
        });
      } else {
        this.$router.push({
          path: this.localePath(
            `/${this.typePage}/${this.$route.params.slug}/${y}`
          ),
        });
      }
    },
    filterClose() {
      this.$parent.showFilters = false;
    },
    selectoooor(type) {
      if (type === "pool") {
        this.pool = !this.pool;
      } else if (type === "finished") {
        this.finished = !this.finished;
      } else {
        this.instalment = !this.instalment;
      }

      // finished;
    },
    canShowFilter(name) {
      if (
        name === "number_of_rooms" ||
        name === "type_of_house" ||
        name === "pool"
      ) {
        if (this.$route.params.type) {
          if (
            this.$route.params.type === "house" ||
            this.$route.params.type === "all"
          ) {
            return true;
          } else {
            return false;
          }
        } else if (!this.$route.params.type) {
          if (
            this.$route.params.slug === "house" ||
            this.$route.params.slug === "all"
          ) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return true;
      }
      // if (this.$route.params.type) {
      //   if (this.$route.params.type !== "house") {
      //     if (item.name === "Number_of_rooms") {
      //       return false;
      //     } else {
      //       return true;
      //     }
      //   } else {
      //     return true;
      //   }
      // }
    },
    findSelectedFilters() {
      console.log("route params type can show filt", this.$route.params.slug);
      let x = this.$route.params.slug.split("&");

      x.forEach((el) => {
        let y = el.split("=");

        let name = y[0];
        let value = y[1];

        if (name === "pool") {
          this.pool = true;
        } else if (name === "instalment") {
          this.instalment = true;
        } else if (name === "finished") {
          this.finished = true;
        }
      });
    },
    clearFilterField(filter) {
      console.log("clear", filter, this.newArrToget);

      delete this.newArrToget[filter];
      console.log("clear", filter, this.newArrToget);
    },
  },
  components: {
    filterSelect,
  },
  mounted() {
    this.locale = this._i18n.locale;

    if (this.$route.params.type) {
      this.findSelectedFilters();
    }
  },
};
</script>
<style lang="scss" scoped>
.filter {
  position: relative;
  padding: 12.5vw 10.625vw 12.5vw 10.625vw;
  border-radius: 3.125vw;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding: 5.208vw 3.906vw 5.208vw 3.906vw;
    border-radius: 1.302vw;
  }

  @media screen and (min-width: 1240px) {
    padding: 40px 34px;
    /* padding: 2.778vw 2.361vw 2.778vw 2.361vw; */
    border-radius: 0;
  }
  &__close {
    position: absolute;
    top: 6.25vw;
    right: 6.25vw;
    width: 5vw;
    height: 5vw;
    background-image: url(../assets/svg/cross.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    @media screen and (min-width: 768px) {
      top: 2.604vw;
      right: 2.604vw;
      width: 2.083vw;
      height: 2.083vw;
    }

    @media screen and (min-width: 1240px) {
      display: none;
    }
  }
  &__category {
    color: var(--primary-color);

    &-item {
      font-weight: 500;
      font-size: 5vw;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      & .box {
        display: block;
        width: 7.5vw;
        height: 7.5vw;
        border: 1px solid rgba(54, 54, 54, 0.4);
        border-radius: 1.25vw;
        margin-right: 5vw;
      }
      &.select {
        & .text {
          color: var(--accent-main-color);
        }
        & .box {
          background-color: var(--accent-main-color);
        }
      }
      &:not(:last-child) {
        margin-bottom: 6.25vw;
      }

      @media screen and (min-width: 768px) {
        font-size: 2.083vw;
        & .box {
          width: 3.125vw;
          height: 3.125vw;
          border-radius: 0.521vw;
          margin-right: 2.083vw;
        }
        &:not(:last-child) {
          margin-bottom: 2.604vw;
        }
      }
      @media screen and (min-width: 1240px) {
        font-size: 1.111vw;
        & .box {
          width: 1.667vw;
          height: 1.667vw;
          border-radius: 0.278vw;
          margin-right: 1.111vw;
        }
        &:not(:last-child) {
          margin-bottom: 1.389vw;
        }
      }
    }
  }
  &__wrap {
    margin-top: 12.5vw;

    @media screen and (min-width: 768px) {
      margin-top: 5.208vw;
    }
    @media screen and (min-width: 1240px) {
      margin-top: 2.778vw;
    }
  }
  .title {
    font-weight: 500;
    font-size: 7.5vw;
    margin-bottom: 9.375vw;
    @media screen and (min-width: 768px) {
      font-size: 3.125vw;
      margin-bottom: 3.906vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 1.58vw;
      margin-bottom: 2.083vw;
    }
  }
  &__title {
    font-weight: 500;
    font-size: 5vw;
    display: block;
    margin-bottom: 6.25vw;

    @media screen and (min-width: 768px) {
      font-size: 2.083vw;
      margin-bottom: 2.604vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 1.111vw;
      margin-bottom: 1.389vw;
    }
  }
  &__price {
    &-select {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 6.25vw;

      & .slash {
        font-size: 6.25vw;
      }
    }
    &-input {
      width: 37.5vw;
      border-bottom: 1px solid rgba(54, 54, 54, 0.4);
      display: flex;
      & input {
        border: none;
        width: 85%;
        margin-bottom: 3.125vw;
        &::placeholder {
          font-size: 4.375vw;
        }
      }
      & .dollar {
        font-size: 5vw;
      }
    }

    @media screen and (min-width: 768px) {
      &-select {
        margin-top: 2.604vw;

        & .slash {
          font-size: 2.604vw;
        }
      }
      &-input {
        width: 15.625vw;
        & input {
          margin-bottom: 1.302vw;
          &::placeholder {
            font-size: 1.823vw;
          }
        }
        & .dollar {
          font-size: 2.083vw;
        }
      }
    }
    @media screen and (min-width: 1240px) {
      &-select {
        margin-top: 1.389vw;

        & .slash {
          font-size: 1.389vw;
        }
      }
      &-input {
        width: 8.333vw;
        & input {
          margin-bottom: 0.694vw;
          &::placeholder {
            font-size: 0.972vw;
          }
        }
        & .dollar {
          font-size: 1.111vw;
        }
      }
    }
  }

  &__btn {
    width: 100%;
    padding: 5vw 0;
    margin-top: 9.375vw;
    background-color: var(--accent-main-color);
    color: #fff;
    border-radius: 3.125vw;
    font-weight: 700;
    font-size: 5vw;
    transition: all 500ms ease;
    &:hover {
      background-color: var(--hover-color);
    }

    @media screen and (min-width: 768px) {
      padding: 2.083vw 0;
      margin-top: 3.906vw;
      border-radius: 1.302vw;
      font-size: 2.083vw;
    }
    @media screen and (min-width: 1240px) {
      padding: 1.111vw 0;
      margin-top: 2.083vw;
      border-radius: 0.694vw;
      font-size: 1.111vw;
      /* font-size: 16px; */
    }
  }

  & .instalmet {
    &.select {
      & .box {
        background-color: var(--accent-main-color);
      }
    }
  }

  &__variants {
    margin-bottom: 15px;
  }
}

.error-text {
  color: var(--hover-color);
  margin-top: 3.125vw;
  font-weight: 400;
  font-size: 3.75vw;
  @media screen and (min-width: 768px) {
    margin-top: 1.302vw;
    font-size: 1.563vw;
  }
  @media screen and (min-width: 1240px) {
    margin-top: 0.694vw;
    font-size: 0.833vw;
  }
}
input:focus {
  outline: 0 !important;
  outline-offset: 0;
}
</style>
