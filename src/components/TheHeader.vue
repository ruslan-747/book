<template>
  <header class="header">
    <b-row class="header__row">
      <b-col cols="3">
        <header-menu class="header__menu"/>
      </b-col>
      <b-col cols="5" offset="4">
        <theme-switcher class="header__theme-switcher">Сменить тему</theme-switcher>
      </b-col>
    </b-row>
  </header>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {
  name: 'TheHeader',
  components: {
    ThemeSwitcher,
    HeaderMenu,
  },
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.header {
  height: var(--header-height);
  width: 100%;
  border-bottom: var(--border);
  box-sizing: border-box;
  background-color: var(--header-background-color);
  z-index: 5;

  &__theme-switcher {
    height: 100%;
    margin-left: auto;

    @include media-breakpoint-down(sm) {
      font-size: 14px;
    }
  }

  &__row {
    height: 100%;
  }

  &__menu {
    height: 100%;
    display: none;

    @include media-breakpoint-down(sm) {
      display: block;
    }
  }
}
</style>
