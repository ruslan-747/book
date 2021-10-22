<template>
  <h1 class="page-heading">
    <slot/>
  </h1>
</template>

<script>
export default {
  name: 'PageHeading',
};
</script>

<style scoped lang="scss">
.page-heading {
  font-size: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-weight: 600;
}
</style>
