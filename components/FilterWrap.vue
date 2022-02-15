<template lang="pug">
    .filter 
        .filter__category
            h2.title Вибiр категорії
            n-link.filter__category-item( v-for="(category, i) in categoryes" :key="i" :class="{'select': category.selected}" :to="(`/${typePage}/${category.slug}`)") {{category.name}}
        //- .filter__wrap
        //-     h2.title Фiльтри
        //-     .filter__price 
        //-         .filter__title Цiна
        //-         .filter__price-select
        //-             .filter__price-input
        //-                 input(type="number"  v-model="from" placeholder="Min")
        //-                 span $
        //-             span -
        //-             .filter__price-input
        //-                 input(type="number"  v-model="to" placeholder="Max")
        //-                 span $
        //-     .filter__address(v-if="addressSelect.length > 0" @click="handlerSelectAddress")
        //-         .filter__title Адреса
        //-         .filter__select {{address}}
        //-         ul.filter__select-list(v-if="showAddress")
        //-             li.filter__select-item(v-for="(option, i) in addressSelect" :key="i") {{option}}
        //-     .filter__type(v-if="roomsSelect.length > 0" @click="handlerSelectType")
        //-         .filter__title Кількість кімнат
        //-         .filter__select {{type}}
        //-         ul.filter__select-list(v-if="showType")
        //-             li.filter__select-item(v-for="(option, i) in roomsSelect" :key="i") {{option}}
        //-     button.filter__btn Застосувати
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
      type: "",
      roomsSelect: [],
      showType: false,
      showAddress: false,
    };
  },
  computed: {
    ...mapState({
      addressSelect: (state) => state.app.Address,
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
    handlerSelectType(e) {
      if (this.showType) {
        this.showType = false;
      } else {
        this.showType = true;
      }
      if (e.target.className === "filter__select-item") {
        this.type = e.target.textContent;
      }
    },
    // selectCategoryes(type) {
    //   this.$store.commit("app/UPDATE_CATEGORIES", type);
    // },
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
    height: 3.472vw;
    border: 1px solid rgba(54, 54, 54, 0.4);
    border-radius: 0.417vw;
    position: relative;
    padding-top: 1.042vw;
    padding-left: 1.042vw;

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
      border: 1px solid rgba(54, 54, 54, 0.4);

      z-index: 100;
    }
    &-item {
      position: relative;
      border-bottom: 1px solid rgba(222, 178, 218, 0.6);

      font-size: 1.25vw;

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
  }
}
input:focus {
  outline: 0 !important;
  outline-offset: 0;
}
</style>
