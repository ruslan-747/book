<template>
  <button class="theme-switcher" @click="switchTheme">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  methods: {
    switchTheme() {
      let theme;

      if (this.$store.state.theme === 'dark') {
        theme = 'light';
      } else {
        theme = 'dark';
      }

      this.$store.commit('SET_THEME', theme);
    },
  },
};
</script>

<style scoped lang="scss">
.theme-switcher {
  background-color: transparent;
  color: var(--text-color);
  border: none;
  cursor: pointer;
  outline: none;
  display: block;

  &:hover {
    background-color: var(--hover-background-color);
  }
}
</style>
