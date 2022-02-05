<template lang="pug">
    .filter 
        .filter__category
            h2 Вибiр категорії
            p(v-for="(type, i) in categoryes" :key="i") {{type.text}}
        .filter__wrap
</template>
<script>
export default {
  props: ["categoryes"],
};
</script>
<style lang="scss" scoped>
.filter {
  &__category {
    color: var(--primary-color);
    & h2 {
      font-weight: 500;
      font-size: 1.667vw;
    }
    & p {
      font-weight: 500;
      font-size: 1.111vw;
    }
    :not(:last-child) {
      margin-bottom: 1.083vw;
    }
  }
}
</style>
