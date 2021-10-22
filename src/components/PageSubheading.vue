<template>
  <h3 class="page-subheading">
    <slot/>
  </h3>
</template>

<script>
export default {
  name: 'PageSubheading',
};
</script>

<style scoped lang="scss">
.page-subheading {
  font-weight: 500;
  margin-bottom: 0;
  padding-top: 20px;
}
</style>
