<template lang="pug">
.services
    .services__title {{$t('bud.our_servises')}}:
    .services__list
        .services__item(v-for="(item, i) in list_services" :key="i" :class="['item'+ i]") 
            img(:src="item.img")
            .services__gradient
            p.title {{$i18n.locale === 'ru' ? item.title_ru : item.title_ukr}}
</template>
<script>
export default {
  data() {
    return {
      list_services: [
        {
          title_ukr: "Підбір земельної ділянки",
          title_ru: "Подбор земельного участка",
          img: require("~/assets/land_plot_selection_1.png"),
        },
        {
          title_ukr: "Розробка дизайну",
          title_ru: "Разработка дизайна",
          img: require("~/assets/design_devel.png"),
        },
        {
          title_ukr: "Створення проекту та візуалізацію об‘єкту",
          title_ru: "Создание проекта и визуализацию объекта",
          img: require("~/assets/visualization.png"),
        },
        {
          title_ru: "Построить всё в установленный срок",
          title_ukr: "Побудувати все у встановлений термін",
          img: require("~/assets/build_ontime.png"),
        },
        {
          title_ukr: "Втілити всі можливі бажання замовника",
          title_ru: "Воплотить все возможные желания заказчика",
          img: require("~/assets/make_wish.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.services {
  padding: 10vw 5vw 10vw 5vw;

  @media screen and (min-width: 768px) {
    padding: 6vw 4.688vw 6vw 4.688vw;
  }
  @media screen and (min-width: 1240px) {
    padding: 8.333vw 4.688vw 8.333vw 4.688vw;
  }
  &__title {
    font-size: 7.5vw;
    margin-bottom: 9.375vw;
    padding-left: 3.125vw;
    @media screen and (min-width: 768px) {
      font-size: 3.125vw;
      margin-bottom: 5.208vw;
      padding-left: 1.302vw;
    }
    @media screen and (min-width: 1240px) {
      font-size: 2.083vw;
      margin-bottom: 1.613vw;
      padding-left: 0.806vw;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4.688vw;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.389vw;
    }
    @media screen and (min-width: 1240px) {
      gap: 0.806vw;
    }
  }
  &__item {
    border-radius: 1.875vw;
    position: relative;
    height: 40vw;
    overflow: hidden;
    border: 1px solid black;
    transition: all 500ms ease;

    &.item0 {
      height: 61.3vw;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;

      & .title {
        font-size: 6.25vw;
      }
    }

    & .title {
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      font-size: 4.063vw;
      // color: var(--light-color);
      color: var(--primary-color);
      text-align: center;

      font-weight: 600;

      width: 100%;

      padding: 2.5vw 3.125vw;
      // background-color: rgba(0, 0, 0, 0.7);
      background-color: rgba(255, 255, 255, 0.7);
    }
    @media screen and (min-width: 768px) {
      height: 13.5vw;
      &.item0 {
        height: 28.3vw;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;

        & .title {
          font-size: 2.604vw;
        }
      }

      & .title {
        padding: 1.302vw 3.906vw;
        font-size: 1.693vw;
      }
    }
    @media screen and (min-width: 1240px) {
      height: 10vw;
      &.item0 {
        height: 21.3vw;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;

        & .title {
          font-size: 2.016vw;
        }
      }

      & .title {
        padding: 0.806vw 2.419vw;
        font-size: 1.371vw;
      }
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &:hover {
      transform: scale(1.02);
    }
  }
  &__gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to right top,
      rgba(43, 32, 33, 0.6),
      rgba(0, 0, 0, 0)
    );
  }
}
</style>
