<template lang="pug">
    .btn(@click="test" :class="{'openbtn': openbtn }")
        a.btn__num(href="tel:+380984732501") +380(98)473-25-01
        .btn__icon
            img(src="~/assets/svg/phoneFixed.svg")
</template>
<script>
export default {
  methods: {
    test() {
      this.openbtn = !this.openbtn;
      console.log(this.openbtn);
    },
  },
  data() {
    return {
      openbtn: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.btn {
  position: fixed;
  bottom: 19.722vw;
  right: 5.6vw;
  display: flex;
  align-items: flex-end;
  padding: 5vw;
  background-color: var(--accent-main-color);
  border-radius: 1.875vw;
  transition: all 1000ms ease;
  z-index: 121;

  @media screen and (min-width: 768px) {
    bottom: 9.722vw;
    padding: 2.083vw;
    border-radius: 0.781vw;
  }
  @media screen and (min-width: 1240px) {
    bottom: 9.722vw;
    padding: 1.389vw;
    border-radius: 0.417vw;
  }

  &__icon {
    display: block;
    & img {
      width: 5vw;
      height: 5vw;

      @media screen and (min-width: 768px) {
        width: 2.083vw;
        height: 2.083vw;
      }
      @media screen and (min-width: 1240px) {
        width: 1.806vw;
        height: 1.806vw;
      }
    }
  }
  &__num {
    display: none;
    opacity: 0;
    color: #fff;
    font-size: 4.375vw;
    @media screen and (min-width: 768px) {
      font-size: 1.823vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 1.389vw;
    }
  }

  @media screen and (max-width: 1239.98px) {
    &.openbtn {
      border-radius: 1.875vw;
      background-color: var(--hover-color);

      @media screen and (min-width: 768px) {
        border-radius: 0.781vw;
      }
      @media screen and (min-width: 1240px) {
        border-radius: 0.347vw;
      }
    }
    &.openbtn .btn__num {
      display: block;
      opacity: 1;
      margin-right: 1.563vw;
      @media screen and (min-width: 768px) {
        margin-right: 0.651vw;
      }
      @media screen and (min-width: 1240px) {
        margin-right: 1.042vw;
      }
    }
  }

  @media screen and (min-width: 1240px) {
    &:hover {
      border-radius: 1.875vw;
      background-color: var(--hover-color);

      @media screen and (min-width: 768px) {
        border-radius: 0.781vw;
      }
      @media screen and (min-width: 1240px) {
        border-radius: 0.347vw;
      }
    }
    &:hover .btn__num {
      display: block;
      opacity: 1;
      margin-right: 1.563vw;
      @media screen and (min-width: 768px) {
        margin-right: 0.651vw;
      }
      @media screen and (min-width: 1240px) {
        margin-right: 1.042vw;
      }
    }
  }
}
</style>
