<template lang="pug">
.filter__type(v-if="info" @click="handlerOpen")
    p.filter__title {{info.name === "Number_of_rooms" ? $t('filtersSelect.number_of_rooms') : info.name === 'payback' ? $t('filtersSelect.payback') : info.name === 'annual_income' ? $t('filtersSelect.annual_income') : info.name === 'Residential_quarter' ? $t('filtersSelect.Residential_quarter') : info.name === 'Type_of_house' ? $t('filtersSelect.type_of_house') : info.name === 'kyiv_or_region' ? $t('filtersSelect.kyiv_or_region') : info.name === 'City' ? $t('filtersSelect.district') : "" }}
    //- p.filter__title {{info.name === "residential" ? $t('filtersSelect.Residential_quarter') : ""}}
    p.filter__select {{selected}}
    ul.filter__select-list(v-if="show")
        li.filter__select-item( v-for="(option, i) in info.arr" :key="i" @click="handlerSelect(option.attributes.Slug, $event)") {{locale === 'ru' ? option.attributes.Name_rus : option.attributes.Name_ukr}}
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["info"],
  data() {
    return {
      selected: "",
      show: false,
      locale: "uk",
    };
  },
  methods: {
    handlerOpen(e) {
      if (e.target.className !== "filter__select-item") {
        this.show = !this.show;
      }
    },
    handlerSelect(slug, e) {
      this.show = !this.show;
      if (e.target.className === "filter__select-item") {
        this.selected = e.target.textContent;

        console.log("e.target", e);
        this.$parent.hendlerSelect(this.info.name, slug);
      }
    },
  },
  computed: {
    ...mapState({
      addressSelect: (state) => state.app.Address,
      numOfRooms: (state) => state.app.NumOfRooms,
      paybackArr: (state) => state.app.Payback,
      annualIncome: (state) => state.app.AnnualIncome,
      filters: (state) => state.app.Filters,
    }),
  },
  mounted() {
    this.locale = this.$i18n.localeProperties.code;
  },
};
</script>
<style lang="scss" scoped>
.filter {
  &__type {
    margin-top: 6.25vw;
    position: relative;
    @media screen and (min-width: 768px) {
      margin-top: 2.604vw;
    }
    @media screen and (min-width: 1240px) {
      margin-top: 1.389vw;
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
  &__select {
    width: 100%;
    min-height: 12.5vw;
    border: 1px solid rgba(54, 54, 54, 0.4);
    border-radius: 1.875vw;
    position: relative;
    font-size: 5vw;
    padding: 3.125vw;

    @media screen and (min-width: 768px) {
      min-height: 5.208vw;
      border-radius: 0.781vw;
      font-size: 2.083vw;
      padding: 1.302vw;
    }
    @media screen and (min-width: 1240px) {
      min-height: 2.778vw;
      border-radius: 0.417vw;
      font-size: 1.111vw;
      padding: 0.694vw;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 6.25vw;
      width: 5.625vw;
      height: 5.625vw;
      transform: translateY(-50%);
      background-image: url(../assets/svg/selectVector.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      @media screen and (min-width: 768px) {
        right: 2.604vw;
        width: 2.344vw;
        height: 2.344vw;
      }
      @media screen and (min-width: 1240px) {
        right: 1.389vw;
        width: 1.25vw;
        height: 1.25vw;
      }
    }

    &-list {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #fff;
      border: 1px solid rgba(54, 54, 54, 0.4);

      z-index: 100;
      min-height: 9.375vw;
      max-height: 25vw;
      overflow: scroll;

      @media screen and (min-width: 768px) {
        min-height: 3.906vw;
        max-height: 10.417vw;
      }
      @media screen and (min-width: 1240px) {
        min-height: 2.083vw;
        max-height: 5.556vw;
      }
    }
    &-item {
      position: relative;
      border-bottom: 1px solid rgba(222, 178, 218, 0.6);

      font-size: 5vw;

      padding: 3.125vw 3.438vw;
      cursor: pointer;
      @media screen and (min-width: 768px) {
        font-size: 2.083vw;
        padding: 1.302vw 1.432vw;
      }
      @media screen and (min-width: 1240px) {
        font-size: 1.111vw;
        padding: 0.694vw 0.764vw;
      }
    }
  }
}
</style>
