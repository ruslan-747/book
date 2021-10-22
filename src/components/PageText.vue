<template>
  <p class="page-text">
    <slot/>
  </p>
</template>

<script>
export default {
  name: 'PageText',
};
</script>

<style scoped lang="scss">
.page-text {
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 1.3rem;
  margin-bottom: 0;
}
</style>
