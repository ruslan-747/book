<template>
  <button id="menu" class="header-menu" @click="$store.commit('TOGGLE_MENU')">
    <img src="../assets/menu.svg" alt="Menu" class="header-menu__img">
  </button>
</template>

<script>
export default {
  name: 'HeaderMenu',
};
</script>

<style scoped lang="scss">
.header-menu {
  background-color: transparent;
  border: none;
  outline: none;
  fill: #fff;
  filter: var(--svg-filter);

  &__img {
    pointer-events: none;
  }
}
</style>
