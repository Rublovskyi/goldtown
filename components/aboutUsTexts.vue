<template lang="pug">
.about-text
    .about-text__title {{ $t('header.about_us') }}
    .about-text__wrap 
        .about-text__desc(v-for="(item,i) in desc" :key="i" v-html="$i18n.locale === 'ru' ? item.text_ru : item.text_ukr") 

</template>
<script>
export default {
  data() {
    return {
      desc: [
        {
          text_ru:
            "<p> <span> Gold Town </span> – агентство недвижимости которое держится на трёх опорах – лёгкость, комфорт и надёжность! Мы прикладываем максимум усилий, чтобы нашим клиентам всегда хотелось к нам обращаться снова и снова. </p>",
          text_ukr:
            "<p> <span> Gold Town </span> - агентство нерухомості, яке тримається на трьох опорах - легкість, комфорт і надійність! Ми докладаємо максимум зусиль, щоб нашим клієнтам завжди хотілося до нас звертатися знову і знову. </p>",
        },
        {
          text_ru:
            "<p> <span> Наше ключевое направление </span> – это продажа недвижимости в жилых комплексах Киева. Так же, у нас есть множество объектов в Киевской области, частных домов в лесной местности, эксклюзивные объекты, которые Вы нигде не встретите. Мы сотрудничаем напрямую с застройщиками или собственниками! </p>",
          text_ukr:
            "<p> <span> Наш ключовий напрямок </span> – це продаж нерухомості у житлових комплексах Києва. Також у нас є безліч об'єктів у Київській області, приватних будинків у лісовій місцевості, ексклюзивні об&#39;єкти, які Ви ніде не зустрінете. Ми співпрацюємо безпосередньо із забудовниками або власниками! </p>",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.about-text {
  padding: 9.375vw 5vw 7vw 5vw;
  @media screen and (min-width: 768px) {
    padding: 2.604vw 5.953vw 2.719vw 5.953vw;
  }
  // @media screen and (min-width: 1240px) {
  //   padding: 1.389vw 7.389vw 1.222vw 7.389vw;
  // }
  @media screen and (min-width: 1240px) {
    padding: 3.389vw 10.389vw 3.222vw 10.389vw;
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
  &__wrap {
    ::v-deep {
      p {
        font-size: 5.625vw;
      }
      span {
        font-size: 6.875vw;
        font-weight: 600;
      }

      & .about-text__desc:not(:last-child) {
        margin-bottom: 4.688vw;
      }

      @media screen and (min-width: 768px) {
        p {
          font-size: 2.344vw;
        }
        span {
          font-size: 2.865vw;
        }

        & .about-text__desc:not(:last-child) {
          margin-bottom: 1.953vw;
        }
      }
      @media screen and (min-width: 1240px) {
        p {
          font-size: 1.452vw;
        }
        span {
          font-size: 1.774vw;
        }

        & .about-text__desc:not(:last-child) {
          margin-bottom: 1.21vw;
        }
      }
      @media screen and (min-width: 1920px) {
        p {
          font-size: 0.938vw;
        }
        span {
          font-size: 1.146vw;
        }

        & .about-text__desc:not(:last-child) {
          margin-bottom: 0.781vw;
        }
      }
    }
  }
}
</style>
