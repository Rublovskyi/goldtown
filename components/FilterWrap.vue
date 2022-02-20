<template lang="pug">
    .filter 
        .filter__category
            h2.title Вибiр категорії
            n-link.filter__category-item( v-for="(category, i) in categoryes" :key="i" :class="{'select': category.selected}" :to="(`/${typePage}/${category.slug}`)") {{category.name}}
        .filter__wrap
            h2.title Фiльтри
            .filter__price 
                .filter__title Цiна
                .filter__price-select
                    .filter__price-input
                        input(type="number"  v-model="from" placeholder="Min")
                        span $
                    span -
                    .filter__price-input
                        input(type="number"  v-model="to" placeholder="Max")
                        span $
                p.error-text {{validate('price')}}
            //- button.filter__btn Застосувати
            .filter__address(v-if="addressSelect.length > 0" @click="handlerSelectAddress")
                .filter__title Адреса
                .filter__select {{address}}
                ul.filter__select-list(v-if="showAddress")
                    li.filter__select-item(v-for="(option, i) in addressSelect" :key="i") {{option}}
                p.error-text {{validate('address')}}
            .filter__type(v-if="numOfRooms.length > 0" @click="handlerSelectRooms")
                .filter__title Кількість кімнат
                .filter__select {{rooms}}
                ul.filter__select-list(v-if="showRooms")
                    li.filter__select-item(v-for="(option, i) in numOfRooms" :key="i") {{option}}
                p.error-text {{validate('rooms')}}
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
      roomsSelect: [],
      showRooms: false,
      showAddress: false,
      errorTextPrice: "",
      errorTextAddress: "",
      errorTextRooms: "",
    };
  },
  computed: {
    ...mapState({
      addressSelect: (state) => state.app.Address,
      numOfRooms: (state) => state.app.NumOfRooms,
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
        };
        this.$store.dispatch("app/getFilteredDataPurchase", {
          slug,
          data,
          type,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.filter {
  &__category {
    color: var(--primary-color);

    &-item {
      font-weight: 500;
      font-size: 1.111vw;
      display: block;
      &.select {
        color: var(--accent-main-color);
      }
    }
    :not(:last-child) {
      margin-bottom: 1.083vw;
    }
  }
  &__wrap {
    margin-top: 4.167vw;
  }
  .title {
    font-weight: 500;
    font-size: 1.667vw;
    margin-bottom: 2.778vw;
  }
  &__title {
    font-weight: 500;
    font-size: 1.111vw;
    display: block;
    margin-bottom: 1.389vw;
  }
  &__price {
    &-select {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1.389vw;
    }
    &-input {
      width: 6.111vw;
      border-bottom: 1px solid rgba(54, 54, 54, 0.4);
      display: flex;
      & input {
        border: none;
        width: 85%;
        margin-bottom: 0.694vw;
        &::placeholder {
          font-size: 1.111vw;
        }
      }
    }
  }
  &__address,
  &__type {
    margin-top: 2.083vw;
    position: relative;
  }
  &__select {
    width: 100%;
    min-height: 3.472vw;
    border: 1px solid rgba(54, 54, 54, 0.4);
    border-radius: 0.417vw;
    position: relative;
    font-size: 1.11vw;
    // padding-top: 1.042vw;
    // padding-left: 1.042vw;
    padding: 1.042vw;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 1.389vw;
      width: 1.181vw;
      height: 1.181vw;
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
      border: 0.069vw solid rgba(54, 54, 54, 0.4);

      z-index: 100;
      min-height: 2.083vw;
      max-height: 5.903vw;
      overflow: scroll;
    }
    &-item {
      position: relative;
      border-bottom: 1px solid rgba(222, 178, 218, 0.6);

      font-size: 1.11vw;

      padding: 0.694vw 1.042vw;
      cursor: pointer;
      // list-style-type: none;
    }
  }
  &__btn {
    width: 100%;
    padding: 1.111vw 0;
    margin-top: 2.083vw;
    background-color: var(--accent-main-color);
    color: #fff;
    border-radius: 0.417vw;
    font-weight: 700;
    font-size: 1.111vw;
    transition: all 500ms ease;
    &:hover {
      background-color: var(--hover-color);
    }
  }
}
input:focus {
  outline: 0 !important;
  outline-offset: 0;
}
.error-text {
  color: var(--hover-color);
  margin-top: 0.694vw;
  font-weight: 400;
  font-size: 0.972vw;
}
</style>
