<template lang="pug">
.services
    .services__title Наши услуги:
    .services__list
        .services__item(v-for="(item, i) in list_services" :key="i" :class="['item'+ i]") 
            img(src="~/assets/sample/house.jpg")
            .services__gradient
            p.title {{item.title}}
</template>
<script>
export default {
  data() {
    return {
      list_services: [
        {
          title: "Подбор земельного участка",
          img: "",
        },
        {
          title: "Создание проекта и визуализацию будущего обьекта",
          img: "",
        },
        {
          title: "Воплотить все возможные желания заказчика",
          img: "",
        },
        {
          title: "Разработка дизайна",
          img: "",
        },
        {
          title: "Построить все в установленый срок",
          img: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.services {
  padding: 0 5vw 0 5vw;

  @media screen and (min-width: 768px) {
    padding: 0 4.688vw 0 4.688vw;
  }
  @media screen and (min-width: 1240px) {
    padding: 8.333vw 4.688vw 8.333vw 4.688vw;
  }
  &__title {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 2.083vw;
    padding-left: 10px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.389vw;
  }
  &__item {
    border-radius: 1.875vw;
    position: relative;
    height: 10vw;
    overflow: hidden;
    border: 1px solid black;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &.item0 {
      height: 21.3vw;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;

      & .title {
        font-size: 25px;
      }
    }
    transition: all 500ms ease;
    &:hover {
      transform: scale(1.02);
    }

    position: relative;

    & .title {
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      font-size: 17px;
      // color: var(--light-color);
      color: var(--primary-color);
      text-align: center;

      font-weight: 600;

      width: 100%;

      padding: 10px 30px;
      // background-color: rgba(0, 0, 0, 0.7);
      background-color: rgba(255, 255, 255, 0.9);
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
