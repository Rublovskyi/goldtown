<template lang="pug">
.layout
    .content
        Nuxt
        Preview(v-if="!VideoShowed")
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
    }),
  },
  mounted() {
    this.$store.commit("app/UPDATE_PREVIEW", true);

    setTimeout(() => {
      this.$store.commit("app/UPDATE_PREVIEW", false);
      this.$store.commit("app/UPDATE_SHOWED_VIDEO");
    }, 9000);
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
