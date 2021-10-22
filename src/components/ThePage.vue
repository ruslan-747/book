<template>
  <main class="page">
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'ThePage',
};
</script>

<style scoped lang="scss">
.page {
  overscroll-behavior: contain;
}
</style>
