<template lang="pug">
.crumbs(v-if="info")
    n-link.crumbs__wrap(v-for="(item, i) in info.links" :key="i" :to="item.link")
        p.name {{item.name}}
    p.crumbs__current {{info.currentPageName}}

</template>
<script>
export default {
  props: ["info"],
};
</script>
