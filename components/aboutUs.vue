<template lang="pug">
.about 
    .about__text
        h2.about__text-title {{ $t('about_us.title') }}
        p.about__text-subtitle {{ $t('about_us.description') }}
    .about__image
        //- img(src="../assets/workPlace.png" alt="про нас")
        picture
            source(type="image/webp" srcset="~/assets/workPlace.webp")
            source(type="image/jpeg" srcset="~/assets/workPlace.jpg")
            img(src="~/assets/workPlace.jpg" alt="hero")
</template>
<style lang="scss" scoped>
@media screen and (max-width: 767.98px) {
  .about {
    padding: 18.75vw 5vw;
    position: relative;
    margin-left: auto;

    &__text {
      background-color: #fff;
      // padding: 3vw;

      &-title {
        display: inline-block;
        color: var(--primary-color);
        font-weight: 400;
        font-size: 7.5vw;
        margin-bottom: 9.375vw;
      }
      &-subtitle {
        color: var(--primary-color);
        font-weight: 400;
        font-size: 5vw;
        line-height: 1.5;
      }
    }
    &__image {
      display: none;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1239.98px) {
  .about {
    padding: 7.813vw 4.688vw;
    position: relative;
    margin-left: auto;

    &__text {
      background-color: #fff;
      padding: 3vw;

      &-title {
        display: inline-block;
        color: var(--primary-color);
        font-weight: 400;
        font-size: 3.125vw;
        margin-bottom: 5.208vw;
      }
      &-subtitle {
        color: var(--primary-color);
        font-weight: 400;
        font-size: 2.083vw;
        line-height: 1.5;
      }
    }
    &__image {
      display: none;
    }
  }
}
@media screen and (min-width: 1240px) {
  .about {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8.333vw 5.556vw;
    position: relative;
    margin-left: auto;

    &__text {
      width: 50%;
      background-color: #fff;
      padding: 3vw;

      &-title {
        display: inline-block;
        color: var(--primary-color);
        font-weight: 400;
        font-size: 2.083vw;
      }
      &-subtitle {
        color: var(--primary-color);
        font-weight: 400;
        font-size: 1.111vw;
        margin-top: 1.531vw;
        line-height: 1.5;
        padding-right: 8.819vw;
      }
    }
    &__image {
      overflow: hidden;
      height: 25.139vw;
      & img {
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
</style>
