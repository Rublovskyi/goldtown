<template lang="pug">
.why 
    .why__title {{$t('bud.why_us')}}:
    .why__list 
        .why__item(v-for="(item, i) in why" :key="i") {{$i18n.locale === 'ru' ? item.text_ru : item.text_ukr}}
</template>
<script>
export default {
  data() {
    return {
      why: [
        {
          text_ukr:
            "З нами купівля земельної ділянки для будівництва Вашого будинку буде безпечною, а угода вигідною.",
          text_ru:
            "С нами покупка земельного участка для строительства Вашего дома будет безопасной, а сделка выгодной.",
        },
        {
          text_ukr:
            "Ми завжди враховуємо всі побажання клієнтів та суворо дотримуємось їх.",
          text_ru:
            "Ми всегда учитываем все пожелания клиентов и строго придерживаемся их.",
        },
        {
          text_ukr:
            "У нас працюють професіонали своєї справи, які готові вирішити навіть найскладніші завдання.",
          text_ru:
            "У нас работают профессионалы своего дела, которые готовы решить даже самые сложные задачи.",
        },
        {
          text_ukr:
            "Співробітники агентства нерухомості Gold Town нададуть повний пакет послуг на будівництво Вашого об'єкта, а також на реалізацію його в майбутньому.",
          text_ru:
            "Сотрудники агентства недвижимости Gold Town предоставят полный пакет услуг на строительство Вашего обьекта, а также и на реализацию его в будущем.",
        },
        {
          text_ukr:
            "З нами Ви заощаджуєте свій час і позбавите себе клопоту, пов'язаного з будівництвом будинку.",
          text_ru:
            "С нами Вы экономите свое время и избавите себя от хлопот, связаных с строительством дома.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.why {
  padding: 10vw 5vw 10vw 5vw;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

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
      margin-bottom: 20px;
      font-size: 2.083vw;
      padding-left: 0.806vw;
    }
  }

  &__item {
    padding-left: 6.25vw;

    position: relative;
    margin-bottom: 3.125vw;
    color: var(--primary-color);
    font-weight: 400;
    font-size: 5vw;
    line-height: 1.5;

    &::before {
      content: "";
      position: absolute;
      width: 3.125vw;
      height: 100%;
      top: 0;
      left: 0;
      background-image: url(../../assets/svg/dots.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    @media screen and (min-width: 768px) {
      font-size: 2.083vw;
      padding-left: 2.604vw;
      margin-bottom: 1.302vw;

      &::before {
        width: 1.302vw;
      }
    }
    @media screen and (min-width: 1240px) {
      font-size: 1.111vw;
      padding-left: 1.613vw;
      margin-bottom: 0.806vw;

      &::before {
        width: 0.806vw;
      }
    }
  }
}
</style>
