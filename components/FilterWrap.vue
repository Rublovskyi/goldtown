<template lang="pug">
    .filter 
        .filter__close(@click="filterClose")
        .filter__category
            h2.title Вибiр категорії
            n-link.filter__category-item( v-for="(category, i) in categoryes" :key="i" :class="{'select': category.selected}" :to="localePath(`/${typePage}/${category.slug}`)") 
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
  &__address,
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
