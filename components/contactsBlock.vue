<template lang="pug">
.contacts
    .contacts__wrap
        .contacts__title Контакти
        .contacts__nums
            a.contacts__number(href="tel:+380994712789") 
                span.contacts__number-icon
                span +380(99)471-27-89 
            a.contacts__number(href="tel:+380739986959") 
                span.contacts__number-icon
                span +380(73)998-69-59
            a.contacts__number(href="tel:+380679986958") 
                span.contacts__number-icon
                span +380(67)998-69-58
            a.contacts__number(href="tel:+380984732501") 
                span.contacts__number-icon
                span +380(98)473-25-01
        .contacts__works 
            .contacts__works-schadule
                p.days пн-пт: 
                p.time 10:00 - 20:00
            .contacts__works-schadule
                p.days сб: 
                p.time 11:00 - 16:00
            .contacts__works-schadule
                p.days нд: 
                p.time вихідний
        a.contacts__mail(href="mailto:goldtowncompanygr@gmail.com")
            span.contacts__mail-icon 
            span goldtowncompanygr@gmail.com
        a.contacts__address(href="https://goo.gl/maps/KnUsTrPfS5usf9u79") 
            span.contacts__address-icon
            span 08141, Киевская обл. <br/> Бучанский р-н. с. Святопетровское, <br/> ул. Богдана Хмельницкого 1Б.
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.4154613758433!2d30.316770700000003!3d50.3960944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb6fde964d09%3A0xf0d93b41995ebf45!2z0J_QuNGC0L3QsCDQstC-0LTQsA!5e0!3m2!1sru!2sua!4v1657630756940!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>
<style lang="scss" scoped>
.contacts {
  padding: 9.375vw 5vw 7vw 5vw;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    padding: 3.906vw 4.688vw 2vw 4.688vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
  @media screen and (min-width: 1240px) {
    padding: 3.906vw 4.688vw 2vw 4.688vw;
  }

  &__title {
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: 500;
  }

  &__wrap {
    // @media screen and (min-width: 1240px) {
    //   margin-right: 80px;
    // }
  }

  & iframe {
    width: 100%;
    height: 220px;

    @media screen and (min-width: 768px) {
      width: 100%;
      height: 320px;
    }
    @media screen and (min-width: 1240px) {
      width: 600px;
      height: 450px;
    }
  }

  &__nums {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-content: flex-start;
  }

  &__number,
  &__address {
    color: #000;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 700ms ease;
    // font-size: 5vw;
    font-size: 4vw;
    font-weight: 400;
    // margin-bottom: 2.125vw;
    &-icon {
      display: block;
      // width: 7.5vw;
      // height: 7.5vw;
      width: 6vw;
      height: 6vw;

      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 2.5vw;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.4vw;

      &-icon {
        width: 2.125vw;
        height: 2.125vw;
        margin-right: 1.042vw;
      }
    }
    @media screen and (min-width: 1240px) {
      font-size: 1.111vw;
      &-icon {
        width: 1.242vw;
        height: 1.242vw;
        margin-right: 0.486vw;
      }
      //   &:not(:last-child) {
      //     margin-bottom: 1.111vw;
      //   }
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  &__address {
    margin-bottom: 15px;
  }
  &__number-icon {
    background-image: url(../assets/svg/mobile.svg);
  }
  &__address-icon {
    background-image: url(../assets/svg/carbon_location-black.svg);
  }

  &__works {
    margin: 20px 0;
    &-schadule {
      display: flex;

      & .days {
        font-size: 13px;
        margin-right: 10px;
        width: 40px;
      }
      & .time {
        font-size: 13px;
        font-weight: 500;
      }
      & :not(:last-child) {
        margin-bottom: 5px;
      }
    }
    @media screen and (min-width: 768px) {
      margin: 25px 0;
    }
    @media screen and (min-width: 1240px) {
      margin: 25px 0;
    }
  }

  &__mail {
    font-size: 14px;
    display: flex;
    margin-bottom: 15px;

    &-icon {
      display: block;
      width: 6vw;
      height: 6vw;

      background-image: url(../assets/svg/letter_icon.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      margin-right: 10px;
    }

    @media screen and (min-width: 768px) {
      font-size: 14px;
      margin-bottom: 25px;

      &-icon {
        width: 2.125vw;
        height: 2.125vw;
      }
    }
    @media screen and (min-width: 1240px) {
      font-size: 14px;
      margin-bottom: 25px;

      &-icon {
        width: 1.242vw;
        height: 1.242vw;
      }
    }
  }
}
</style>
