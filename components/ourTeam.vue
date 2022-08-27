<template lang="pug">
.team 
    .team__title Наша команда 
    .team__list 
        .team__item(v-for="(item, i) in team" :key="i" :class="['card'+i]")
            .team__img 
                img(:src="item.img")
            .team__info
                .team__name(v-html="item.name") 
                .team__position(v-html="item.position")
                a.team__tel(:href="'tel:'+ item.tel_href") 
                    span.tel Телефон:
                    span.num {{item.tel}}
</template>
<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Рубльовський <br> Владислав Вадимович",
          tel_href: "380679986959",
          tel: "+38(067)998-69-59",
          position: "Директор агентства",
          img: require("~/assets/team/m3.jpg"),
        },
        {
          name: "Гроза <br> Віталій Юрійович",
          tel_href: "380994712789",
          tel: "+38(099)471-27-89",
          position: "Менеджер з продажу <br> та оренди житлової нерухомості",
          img: require("~/assets/team/m1.jpg"),
        },
        {
          name: "Косов <br> Владислав Віталійович",
          tel_href: "380639986959",
          tel: "+38(063)998-69-59",
          position: "Менеджер з продажу <br> та оренди комерційних приміщень",
          img: require("~/assets/team/m2.jpg"),
        },
        {
          name: "Рубльовський <br> Ярослав Вадимович",
          tel_href: "380739986959",
          tel: "+38(073)998-69-59",
          position: "Менеджер з продажу житлової  нерухомості",
          img: require("~/assets/team/m4.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.team {
  padding: 9.375vw 5vw 7vw 5vw;
  @media screen and (min-width: 768px) {
    padding: 2.604vw 5.953vw 2.719vw 5.953vw;
  }
  // @media screen and (min-width: 1240px) {
  //   padding: 1.389vw 7.389vw 1.222vw 7.389vw;
  // }
  @media screen and (min-width: 1240px) {
    padding: 1.389vw 10.389vw 1.222vw 10.389vw;
  }

  &__title {
    font-weight: 400;
    font-size: 7.5vw;
    margin-bottom: 9.375vw;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 3.125vw;
      margin-bottom: 4.375vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 2.083vw;
      margin-bottom: 2.375vw;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  &__list {
    position: relative;
    & .team__item:not(:last-child) {
      margin-bottom: 6.25vw;
    }
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1.953vw;
      column-gap: 3.906vw;
      & .team__item:not(:last-child) {
        margin-bottom: 0;
      }
    }
    @media screen and (min-width: 1240px) {
      grid-template-columns: repeat(7, 1fr);
      gap: 1.21vw;
    }
  }
  &__item {
    border-radius: 3.125vw;
    border: 1px solid var(--primary-color);
    overflow: hidden;
    position: relative;
    height: 109.375vw;

    @media screen and (min-width: 768px) {
      border-radius: 1.302vw;

      height: 45.573vw;
    }
    @media screen and (min-width: 1240px) {
      border-radius: 0.694vw;
      // height: 23.387vw;
      height: 20.387vw;

      &.card0 {
        // height: 48.387vw;
        height: 42.387vw;
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
      }
      &.card1 {
        grid-column-start: 4;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &.card2 {
        grid-column-start: 6;
        grid-column-end: 8;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &.card3 {
        grid-column-start: 4;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 3;
      }
    }
    color: #fff;
  }
  &__info {
    padding: 6.25vw 4.688vw 6.125vw 4.688vw;

    @media screen and (min-width: 768px) {
      padding: 2.604vw 1.953vw 2.719vw 1.953vw;
    }
    @media screen and (min-width: 1240px) {
      padding: 1.389vw 1.389vw 1.222vw 1.389vw;
    }

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    // background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
  &__name {
    font-size: 4.25vw;
    text-align: center;
    margin-bottom: 3.125vw;
    @media screen and (min-width: 768px) {
      font-size: 2.204vw;
      margin-bottom: 1.302vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 1.089vw;
      margin-bottom: 0.403vw;
    }
  }
  &__position {
    font-weight: 500;
    color: rgba(54, 54, 54, 0.8);
    font-size: 3vw;
    margin-bottom: 1.563vw;
    text-decoration-line: underline;
    color: #fff;

    @media screen and (min-width: 768px) {
      font-size: 1.483vw;
      margin-bottom: 0.651vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 0.811vw;
      margin-bottom: 0;
    }
  }
  &__tel {
    font-weight: 500;
    color: rgba(54, 54, 54, 0.8);
    font-size: 3vw;
    color: #fff;

    & .num {
      transition: all 500ms ease;
      padding-left: 2.188vw;
      &:hover {
        color: var(--hover-color);
      }
    }
    @media screen and (min-width: 768px) {
      font-size: 1.483vw;

      & .num {
        padding-left: 0.911vw;
      }
    }
    @media screen and (min-width: 1240px) {
      font-size: 0.811vw;
      & .num {
        padding-left: 0.565vw;
      }
    }
  }
}
</style>
