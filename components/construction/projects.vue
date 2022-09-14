<template lang="pug">
.construction 
    .construction__projects 
        .construction__projects-title {{$t('bud.projects_done')}} :
        .construction__projects-list 
            .construction__projects-item(v-for="(item, i) in projects" :key="i" ) 
                .construction__projects-img
                    img(:src="item.img")
                .construction__projects-text 
                    .text Lorem: Lorem Lorem
                    .text Lorem: Lorem Lorem
                    p {{item.text}}
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          img: require("~/assets/construction.jpg"),
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        // {
        //   img: require("~/assets/construction.jpg"),
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // },
        // {
        //   img: require("~/assets/construction.jpg"),
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.construction {
  //   padding: 9.375vw 0 7vw 0;
  // border-top: 1px solid rgba(0, 0, 0, 0.2);

  //   @media screen and (min-width: 768px) {
  //     padding: 3.906vw 0 2vw 0;
  //   }
  //   @media screen and (min-width: 1240px) {
  //     padding: 3.906vw 0 2vw 0;
  //   }

  &__title {
    font-size: 2.823vw;
    font-weight: 600;
    text-align: center;

    margin-bottom: 20px;
  }

  &__projects {
    // margin-top: 35px;
    padding: 10vw 5vw 10vw 5vw;

    @media screen and (min-width: 768px) {
      padding: 6vw 4.688vw 6vw 4.688vw;
    }
    @media screen and (min-width: 1240px) {
      padding: 8.333vw 4.688vw 8.333vw 4.688vw;
    }
    background-color: var(--light-bg);
    &-title {
      font-size: 7.5vw;
      margin-bottom: 9.375vw;
      padding-left: 10px;
      @media screen and (min-width: 768px) {
        padding-left: 10px;
        font-size: 3.125vw;
        margin-bottom: 5.208vw;
      }
      @media screen and (min-width: 1240px) {
        margin-bottom: 20px;
        font-size: 2.083vw;
        padding-left: 10px;
      }
    }
    &-list {
      @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      @media screen and (min-width: 1240px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
      }
    }
    &-item {
      background-color: #fff;
      overflow: hidden;

      margin-bottom: 15px;
      border-radius: 3.125vw;
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
        border-radius: 1.302vw;
      }
      @media screen and (min-width: 1240px) {
        border-radius: 0.694vw;
      }
    }
    &-img {
      width: 100%;
      height: 250px;
      overflow: hidden;
      //   border-radius: 1.875vw;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      @media screen and (min-width: 768px) {
        height: 250px;
      }
      @media screen and (min-width: 1240px) {
        height: 250px;
      }
    }
    &-text {
      font-size: 14px;
      padding: 20px;

      & .text {
        margin-bottom: 10px;
      }

      @media screen and (min-width: 768px) {
        font-size: 16px;
        padding: 20px;

        & .text {
          margin-bottom: 10px;
        }
      }
      @media screen and (min-width: 1240px) {
        font-size: 18px;
        padding: 20px;

        & .text {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
