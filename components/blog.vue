<template lang="pug">
.blog(v-if="Blog")
    .blog__title Блог тайтл
    .blog__wrap(v-for="(item, i) in Blog" :key="i")
        .blog__img
            img(v-if="item.Image.data" :src="`https://api.goldtowncompany.com${item.Image.data.attributes.url}`" :srcset="`https://api.goldtowncompany.com${item.Image.data.attributes.formats.small ? item.Image.data.attributes.formats.small.url : item.Image.data.attributes.url} 320w, https://api.goldtowncompany.com${item.Image.data.attributes.formats.medium ? item.Image.data.attributes.formats.medium.url : item.Image.data.attributes.url} 768w, https://api.goldtowncompany.com${item.Image.data.attributes.formats.large ? item.Image.data.attributes.formats.large.url : item.Image.data.attributes.url} 1240w`")
        .blog__data
            p.blog__data-title {{item.Title}}
            p.blog__data-desc.scrollbar {{item.Description}}
            .video.video-ok(v-html="item.Video_url")
        .video.video-tab(v-html="item.Video_url")
        
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      Blog: (state) => state.app.Blog,
    }),
  },
};
</script>
<style lang="scss" scoped>
.blog {
  padding: 9.375vw 5vw 7vw 5vw;

  @media screen and (min-width: 768px) {
    padding: 3.906vw 4.688vw 2vw 4.688vw;
  }
  @media screen and (min-width: 1240px) {
    padding: 3.906vw 4.688vw 2vw 4.688vw;
  }

  &__title {
    margin-bottom: 12.5vw;
    text-align: center;
    font-size: 10.938vw;

    @media screen and (min-width: 768px) {
      margin-bottom: 5.208vw;
      font-size: 4.557vw;
    }
    @media screen and (min-width: 1240px) {
      margin-bottom: 3.226vw;
      font-size: 2.823vw;
    }
  }

  &__wrap {
    &:not(:last-child) {
      margin-bottom: 17.188vw;
    }

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 2fr 3fr;

      &:not(:last-child) {
        margin-bottom: 7.161vw;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1239.98px) {
      column-gap: 6.51vw;
      row-gap: 2.604vw;
      & .video {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
      }

      & .blog__data {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
      }
    }
    @media screen and (min-width: 1240px) {
      display: grid;
      grid-template-columns: 1fr 5fr;
      gap: 4.032vw;

      &:not(:last-child) {
        margin-bottom: 4.435vw;
      }
    }
  }

  &__img {
    width: 100%;
    height: 84.375vw;
    overflow: hidden;

    border-radius: 1.875vw;

    margin-bottom: 6.25vw;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    @media screen and (min-width: 768px) {
      width: 100%;
      height: 26.042vw;
      border-radius: 1.042vw;

      margin-bottom: 0;
    }
    @media screen and (min-width: 1240px) {
      width: 40.323vw;
      height: 40.323vw;
      border-radius: 0.556vw;
    }
  }

  &__data {
    &-title {
      margin-bottom: 4.688vw;
      font-size: 6.25vw;
      font-weight: 600;
    }
    &-desc {
      margin-bottom: 15.625vw;

      height: 46.875vw;
      overflow-y: scroll;

      padding-right: 7.813vw;

      font-size: 5vw;
      font-weight: 400;
    }

    @media screen and (min-width: 768px) {
      &-title {
        margin-bottom: 15px;
        font-size: 20px;
      }
      &-desc {
        height: 19.531vw;
        margin-bottom: 6.51vw;
        padding-right: 3.255vw;
        font-size: 2.083vw;
      }
    }
    @media screen and (min-width: 1240px) {
      &-title {
        margin-bottom: 1.21vw;
        font-size: 1.613vw;
      }
      &-desc {
        height: 8.065vw;
        margin-bottom: 4.032vw;
        padding-right: 2.016vw;
        font-size: 1.29vw;
      }
    }
  }

  ::v-deep {
    .video {
      width: 100%;
      height: 67.188vw;
      overflow: hidden;
      & iframe {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain;
        object-position: center;
      }

      &-tab {
        display: none;
      }

      @media screen and (min-width: 768px) {
        height: 41.016vw;
        &-tab {
          display: block;
        }

        &-ok {
          display: none;
        }
      }
      @media screen and (min-width: 1240px) {
        height: 25.403vw;
        &-tab {
          display: none;
        }
        &-ok {
          display: block;
        }
      }
    }
  }
}
</style>
