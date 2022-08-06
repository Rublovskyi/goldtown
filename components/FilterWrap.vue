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
        //- .filter__category-item.instalmet(:class="{'select': Instalment}" @click="selectInstalment")
        //-     span.box
        //-     span.text {{$t('filtersSelect.Instalment')}}
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
        .filter_test(v-for="(item,i) in filters" :key="i")
            filterSelect(:info="item")
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
      Instalment: false,
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
      let locale = this._i18n.locale;

      if (locale === "ru") {
        locale = "ru";
      } else {
        locale = "en";
      }
      let slug = this.$route.params.slug;

      if (this.$route.params.type) {
        slug = this.$route.params.type;

        if (this.$route.params.slug === "1-k-apartment") {
          this.newArrToget.Number_of_rooms = 1;
        } else if (this.$route.params.slug === "2-k-apartment") {
          this.newArrToget.Number_of_rooms = 2;
        } else if (this.$route.params.slug === "townhouse") {
          this.newArrToget.type_of_house = "Таунхаус";
        } else if (this.$route.params.slug === "apartment-with-pool") {
          this.newArrToget.pool = true;
        } else if (this.$route.params.slug === "townhouse-with-pool") {
          this.newArrToget.pool = true;
          this.newArrToget.type_of_house = "Таунхаус";
        }
      }

      let type = this.typePage;

      if (this.errorTextPrice === "") {
        this.newArrToget.from = this.from;
        this.newArrToget.to = this.to;

        let data = this.newArrToget;

        this.$store.dispatch("app/getFilteredDataPurchase", {
          slug,
          data,
          type,
          locale,
        });
        this.$parent.showFilters = false;
      }
    },
    filterClose() {
      this.$parent.showFilters = false;
    },
    selectInstalment() {
      this.Instalment = !this.Instalment;
    },
  },
  components: {
    filterSelect,
  },
  mounted() {
    this.locale = this._i18n.locale;
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
    padding: 2.778vw 2.361vw 2.778vw 2.361vw;
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
      font-size: 1.667vw;
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
    }
  }

  & .instalmet {
    &.select {
      & .box {
        background-color: var(--accent-main-color);
      }
    }
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
