<template lang="pug">
.layout
    .container
        .content
            Nuxt
        //- Preview(v-if="!VideoShowed && PreviewShow")
</template>

<script>
import Preview from "~/components/preview.vue";
import { mapState } from "vuex";

export default {
  components: {
    Preview,
  },
  computed: {
    ...mapState({
      VideoShowed: (state) => state.app.VideoShowed,
      PreviewShow: (state) => state.app.PreviewShow,
    }),
  },
  mounted() {
    // console.log("navigator", navigator);
    // const connection = navigator.connection;
    // if (connection && !this.VideoShowed) {
    //   if (
    //     connection.effectiveType === "4g" ||
    //     connection.effectiveType === "3g"
    //   ) {
    //     console.log(
    //       "connection.effectiveType inside",
    //       connection.effectiveType === "4g"
    //     );
    //     this.$store.commit("app/UPDATE_PREVIEW", true);
    //     document.body.style.overflow = "hidden";
    //   }
    // }
  },
};
</script>

<style lang="scss" scoped>
.layout {
  overflow: hidden;
}

.content {
  //   max-width: $max-width;
  margin: 0 auto;
}
</style>
