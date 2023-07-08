<template lang="pug">
.info(v-if="information && info")
    .info__text(v-html="info")
</template>
<script>
export default {
  props: ["information", "type"],
  data() {
    return {
      info: "",
    };
  },
  mounted() {
    // console.log("this.$route.params.slug ", this.$route.params.slug);
    console.log("djdjjd", this.$route.params.slug);
    if (this.$route.params.slug === "all") {
      this.info = this.information.all;
    } else if (this.$route.params.slug === "number_of_rooms=1") {
      this.info = this.information.kimnatnakvartira1;
      return;
    } else if (this.$route.params.slug === "number_of_rooms=2") {
      this.info = this.information.kimnatnakvartira2;
      return;
    } else if (this.$route.params.slug === "type_of_house=townhouse") {
      this.info = this.information.townhouse;
    } else if (this.$route.params.slug === "type_of_house=kvartira&pool") {
      console.log("djdkvartira with pooljjd");
      this.info = this.information.apartmentwithpool;
    } else if (this.$route.params.slug === "type_of_house=townhouse&pool") {
      this.info = this.information.townhousewithpool;
    } else if (
      this.$route.params.type === "house" ||
      this.$route.params.slug === "house"
    ) {
      this.info = this.information.house;
    } else {
      this.info = "";
    }
  },
};
</script>
<style lang="scss" scoped>
.info {
  padding: 2vw 5vw 6.25vw 5vw;
  background-color: var(--light-bg);
  //   background-color: #fff;
  &__text {
    background-color: #fff;
    padding: 12.5vw 6.25vw;
    box-shadow: 0px 1.25vw 1.25vw rgba(0, 0, 0, 0.25);
    border-radius: 2.5vw;

    @media screen and (min-width: 768px) {
      padding: 5.208vw 2.604vw;
      box-shadow: 0px 0.521vw 0.521vw rgba(0, 0, 0, 0.25);
      border-radius: 1.042vw;
    }
    @media screen and (min-width: 1240px) {
      padding: 3.226vw 1.613vw;
      box-shadow: 0px 0.323vw 0.323vw rgba(0, 0, 0, 0.25);
      border-radius: 0.645vw;
    }
  }

  ::v-deep {
    h1 {
      margin-bottom: 6.25vw;
      font-size: 6.375vw;
    }
    h2 {
      margin-bottom: 6.25vw;
      font-size: 5.625vw;
    }

    p {
      margin-bottom: 6.25vw;
      font-size: 5.625vw;
      font-weight: 400;
    }

    ul {
      margin-bottom: 6.25vw;
    }

    li {
      margin-left: 6.25vw;
      position: relative;
      font-size: 16px;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -6.25vw;
        width: 3.125vw;
        height: 3.125vw;
        background-image: url(../assets/svg/flickr.svg);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transform: translateY(-50%);
      }
    }

    @media screen and (min-width: 768px) {
      h1 {
        margin-bottom: 2.604vw;
        font-size: 2.906vw;
      }
      h2 {
        margin-bottom: 2.604vw;
        font-size: 2.344vw;
      }

      p {
        margin-bottom: 2.604vw;
        font-size: 2.344vw;
      }

      ul {
        margin-bottom: 2.604vw;
      }
      li {
        margin-left: 2.604vw;
        font-size: 2.083vw;

        &::before {
          content: "";
          left: -2.604vw;
          width: 1.302vw;
          height: 1.302vw;
        }
      }
    }
    @media screen and (min-width: 1240px) {
      h1 {
        margin-bottom: 1.613vw;
        font-size: 2.119vw;
      }
      h2 {
        margin-bottom: 1.613vw;
        font-size: 1.452vw;
      }

      p {
        margin-bottom: 1.613vw;
        font-size: 1.452vw;
      }

      ul {
        margin-bottom: 1.613vw;
      }
      li {
        margin-left: 1.613vw;
        font-size: 1.29vw;

        &::before {
          content: "";
          left: -1.613vw;
          width: 0.806vw;
          height: 0.806vw;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 1.5vw 4.688vw 2.106vw 4.688vw;
  }
  @media screen and (min-width: 1240px) {
    padding: 2vw 5.556vw 2.5vw 5.556vw;
  }
  /* @media screen and (min-width: 2540px) {
    margin-bottom: 9.3%;
  } */
}
</style>
