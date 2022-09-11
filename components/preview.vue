<template lang="pug">
.preview(:class="{'ended': ended}")
    video.preview__video(src="~/assets/gold-town-video-test.mp4"
                            width="100%"
                            ref="video"
                            muted="muted"
                            preload="auto"
                            loop
                            )
</template>
<script>
export default {
  data() {
    return {
      ended: false,
    };
  },

  methods: {
    videoShow: async function () {
      console.log("video goo");
      await this.$refs.video.play();
      this.$refs.video.play();

      setTimeout(() => {
        this.ended = true;
      }, 8000);
    },
  },
  mounted() {
    this.videoShow();
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
