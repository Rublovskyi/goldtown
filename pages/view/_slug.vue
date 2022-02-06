<template lang="pug">
    div(v-if="CurrentPeaseData")
        p New page 
        p(v-if="CurrentPeaseData.title") {{CurrentPeaseData.title}}
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      CurrentPeaseData: (state) => state.app.CurrentPeaseData,
    }),
  },
  mounted() {
    let slug = this.$route.params.slug;
    this.$store.dispatch("app/getDataCurrentPease", slug);
  },
};
</script>
