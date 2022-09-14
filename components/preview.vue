<template lang="pug">
.preview( :class="{'ended': ended}")
    video.preview__video(src="~/assets/gold-town-video-test.mp4"
                            width="100%"
                            ref="video"
                            muted="muted"
                            preload="auto"
                            loop
                            )
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      ended: false,
    };
  },
  methods: {
    videoShow: async function () {
      console.log("video goo");
      let video = this.$refs.video;
      // console.log("video.readyState", video.readyState);
      await this.$refs.video.play();
      // console.log("video.readyState", video.readyState);
      this.$refs.video.play();

      setTimeout(() => {
        this.ended = true;
      }, 8000);

      setTimeout(() => {
        this.$store.commit("app/UPDATE_PREVIEW", false);
        this.$store.commit("app/UPDATE_SHOWED_VIDEO");
        document.body.style.overflow = "";
      }, 9000);

      // if (video.readyState >= 3) {
      //   setTimeout(() => {
      //     this.ended = true;
      //   }, 8000);
      //   setTimeout(() => {
      //     this.$store.commit("app/UPDATE_PREVIEW", false);
      //     this.$store.commit("app/UPDATE_SHOWED_VIDEO");
      //     document.body.style.overflow = "";
      //   }, 9000);
      // }
    },
  },
  mounted() {
    this.videoShow();
    // let video = this.$refs.video;
    // console.log("video.readyState", video.readyState);
    // if (video.readyState === 4) {
    //   // it's loaded
    //   console.log("hello loaded video");
    // }
  },
  computed: {
    ...mapState({
      VideoShowed: (state) => state.app.VideoShowed,
    }),
  },
};
</script>
<style lang="scss" scoped>
.preview {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 100000;

  background-color: black;
  opacity: 1;
  transition: opacity 1000ms ease;

  &.ended {
    opacity: 0;
  }
  & video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>
