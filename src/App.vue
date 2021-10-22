<template>
  <div id="app" class="app"
       :class="[`app--theme-${theme}`, {'app--menu-open': menuIsOpen}]"
  >
    <the-header class="app__header"/>
    <b-container fluid>
      <b-row>
        <b-col class="app__sidebar-wrapper" xl="2" md="3" sm="4" cols="6">
          <the-sidebar/>
        </b-col>
        <b-col md="6" offset-md="4">
          <the-page class="app__page"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ThePage from './components/ThePage.vue';
import TheSidebar from './components/TheSidebar.vue';

export default {
  name: 'App',
  components: {
    TheSidebar,
    ThePage,
    TheHeader,
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    menuIsOpen() {
      return this.$store.state.menuIsOpen;
    },
  },
  mounted() {
    if (Object.hasOwnProperty.call(localStorage, 'theme')) {
      this.$store.commit('SET_THEME', localStorage.theme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$store.commit('SET_THEME', 'dark');
    }
  },
};
</script>

<style lang="scss">
.app {
  --text-color: #000;
  --hover-background-color-alpha: 0.07;
  --hover-background-color-colors: 0,0,0;
  --hover-background-color: rgba(
      var(--hover-background-color-colors),
      var(--hover-background-color-alpha)
  );
  --border-color-colors: 0,0,0;
  --border-color-alpha: 0.1;
  --border-color: rgba(var(--border-color-colors), var(--border-color-alpha));
  --border: var(--border-color) solid 2px;
  --active-link-color: #42B983;
  --header-height: 3.5rem;
  --background-color: #fff;
  --svg-filter: none;
  --header-background-color: #fff;

  &--theme-dark {
    --text-color: #fff;
    --hover-background-color-colors: 255,255,255;
    --border-color-colors: 255,255,255;
    --background-color: #2B2B2B;
    --svg-filter: invert(1);
    --header-background-color: #3C3F41;
  }
}
</style>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.app {
  font-family: 'Montserrat', sans-serif;
  color: var(--text-color);
  min-height: 100vh;
  background-color: var(--background-color);

  &__sidebar-wrapper {
    position: fixed;
    padding-top: var(--header-height);
    height: 100vh;
    left: 0;
    padding-left: 0;
    padding-right: 0;
    z-index: 20;
    transition: transform 200ms ease;

    @include media-breakpoint-down(sm) {
      transform: translateX(-100%);
    }
  }

  &__header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  &__page {
    padding-top: var(--header-height);
  }

  &--menu-open .app__sidebar-wrapper {
    transform: translateX(0);
  }
}
</style>
