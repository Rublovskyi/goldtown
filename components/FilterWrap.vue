<template lang="pug">
    .filter 
        .filter__close(@click="filterClose")
        .filter__category
            h2.title Вибiр категорії
            n-link.filter__category-item( v-for="(category, i) in categoryes" :key="i" :class="{'select': category.selected}" :to="(`/${typePage}/${category.slug}`)") 
                span.box
                span.text {{category.name}}
        .filter__wrap
            h2.title Фiльтри
            .filter__price 
                .filter__title Цiна
                .filter__price-select
                    .filter__price-input
                        input(type="number"  v-model="from" placeholder="Min")
                        span.dollar $
                    span.slash -
                    .filter__price-input
                        input(type="number"  v-model="to" placeholder="Max")
                        span.dollar $
                p.error-text {{validate('price')}}
            .filter__type(v-if="numOfRooms.length > 0 && numOfRooms.length > 1" @click="handlerSelectRooms")
                .filter__title Кількість кімнат
                .filter__select {{rooms}}
                ul.filter__select-list(v-if="showRooms")
                    li.filter__select-item(v-for="(option, i) in numOfRooms" :key="i") {{option}}
                p.error-text {{validate('rooms')}}
            .filter__type(v-if="paybackArr.length > 0 && paybackArr.length > 1" @click="handlerSelectPayback")
                .filter__title Окупність (років)
                .filter__select {{payback}}
                ul.filter__select-list(v-if="showPayback")
                    li.filter__select-item(v-for="(option, i) in paybackArr" :key="i") {{option}}
                p.error-text {{validate('payback')}}
            .filter__type(v-if="annualIncome.length > 0 && annualIncome.length > 1" @click="handlerSelectIncome")
                .filter__title Річний дохід ($)
                .filter__select {{income}}
                ul.filter__select-list(v-if="showIncome")
                    li.filter__select-item(v-for="(option, i) in annualIncome" :key="i") {{option}}
                p.error-text {{validate('annual_income')}}
            button.filter__btn(@click="handlerFilteredData") Застосувати
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["categoryes", "typePage"],
  data() {
    return {
      from: "",
      to: "",
      address: "",
      rooms: "",
      payback: "",
      income: "",
      roomsSelect: [],
      showRooms: false,
      showAddress: false,
      showPayback: false,
      showIncome: false,
      errorTextPrice: "",
      errorTextAddress: "",
      errorTextRooms: "",
      errorTextPayback: "",
      errorTextIncome: "",
    };
  },
  computed: {
    ...mapState({
      addressSelect: (state) => state.app.Address,
      numOfRooms: (state) => state.app.NumOfRooms,
      paybackArr: (state) => state.app.Payback,
      annualIncome: (state) => state.app.AnnualIncome,
    }),
  },
  methods: {
    handlerSelectAddress(e) {
      if (this.showAddress) {
        this.showAddress = false;
      } else {
        this.showAddress = true;
      }
      if (e.target.className === "filter__select-item") {
        this.address = e.target.textContent;
      }
    },
    handlerSelectRooms(e) {
      if (this.showRooms) {
        this.showRooms = false;
      } else {
        this.showRooms = true;
      }
      if (e.target.className === "filter__select-item") {
        this.rooms = e.target.textContent;
      }
    },
    handlerSelectPayback(e) {
      if (this.showPayback) {
        this.showPayback = false;
      } else {
        this.showPayback = true;
      }
      if (e.target.className === "filter__select-item") {
        this.payback = e.target.textContent;
      }
    },
    handlerSelectIncome(e) {
      if (this.showIncome) {
        this.showIncome = false;
      } else {
        this.showIncome = true;
      }
      if (e.target.className === "filter__select-item") {
        this.income = e.target.textContent;
      }
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
      } else if (type === "address") {
        this.errorTextAddress = "";
        return this.errorTextAddress;
      } else if (type === "rooms") {
        this.errorTextRooms = "";
        return this.errorTextRooms;
      } else if (type === "payback") {
        this.errorTextPayback = "";
        return this.errorTextPayback;
      } else if (type === "annual_income") {
        this.errorTextIncome = "";
        return this.errorTextIncome;
      }
    },
    handlerFilteredData() {
      let slug = this.$route.params.slug;
      let type = this.typePage;
      if (this.errorTextPrice === "") {
        let data = {
          from: this.from,
          to: this.to,
          address: this.address,
          rooms: this.rooms,
          payback: this.payback,
          annual_income: this.income,
        };
        this.$store.dispatch("app/getFilteredDataPurchase", {
          slug,
          data,
          type,
        });
        this.$parent.showFilters = false;
      }
    },
    filterClose() {
      this.$parent.showFilters = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.filter {
  position: relative;
  padding: 40px 34px 40px 34px;
  border-radius: 10px;
  background-color: #fff;

  @media screen and (min-width: 1440px) {
    padding: 40px 30px 40px 30px;
    border-radius: 10px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 34px 40px 34px;
    border-radius: 0;
  }
  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 16px;
    height: 16px;
    background-image: url(../assets/svg/cross.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media screen and (min-width: 1440px) {
      display: none;
    }
  }
  &__category {
    color: var(--primary-color);

    &-item {
      font-weight: 500;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      & .box {
        display: block;
        width: 24px;
        height: 24px;
        border: 1px solid rgba(54, 54, 54, 0.4);
        border-radius: 4px;
        margin-right: 16px;
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
        margin-bottom: 20px;
      }
    }
  }
  &__wrap {
    margin-top: 40px;
  }
  .title {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 30px;
  }
  &__title {
    font-weight: 500;
    font-size: 16px;
    display: block;
    margin-bottom: 20px;
  }
  &__price {
    &-select {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      & .slash {
        font-size: 20px;
      }
    }
    &-input {
      width: 120px;
      border-bottom: 1px solid rgba(54, 54, 54, 0.4);
      display: flex;
      & input {
        border: none;
        width: 85%;
        margin-bottom: 10px;
        &::placeholder {
          font-size: 14px;
        }
      }
      & .dollar {
        font-size: 16px;
      }
    }
  }
  &__address,
  &__type {
    margin-top: 20px;
    position: relative;
  }
  &__select {
    width: 100%;
    min-height: 40px;
    border: 1px solid rgba(54, 54, 54, 0.4);
    border-radius: 6px;
    position: relative;
    font-size: 16px;
    // padding-top: 1.042vw;
    // padding-left: 1.042vw;
    padding: 10px;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 18px;
      height: 18px;
      transform: translateY(-50%);
      background-image: url(../assets/svg/selectVector.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &-list {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #fff;
      border: 1px solid rgba(54, 54, 54, 0.4);

      z-index: 100;
      min-height: 30px;
      max-height: 80px;
      overflow: scroll;
    }
    &-item {
      position: relative;
      border-bottom: 1px solid rgba(222, 178, 218, 0.6);

      font-size: 16px;

      padding: 10px 11px;
      cursor: pointer;
      // list-style-type: none;
    }
  }
  &__btn {
    width: 100%;
    padding: 16px 0;
    margin-top: 30px;
    background-color: var(--accent-main-color);
    color: #fff;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    transition: all 500ms ease;
    &:hover {
      background-color: var(--hover-color);
    }
  }
}

.error-text {
  color: var(--hover-color);
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
}
input:focus {
  outline: 0 !important;
  outline-offset: 0;
}
</style>
