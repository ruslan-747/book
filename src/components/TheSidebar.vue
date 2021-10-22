<template>
  <aside class="sidebar" v-click-outside="closeMenu"
         >
    <sidebar-links class="sidebar__links"/>
  </aside>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import SidebarLinks from './SidebarLinks.vue';

export default {
  name: 'TheSidebar',
  components: {
    SidebarLinks,
  },
  methods: {
    closeMenu(e) {
      if (e.target.id !== 'menu') { this.$store.commit('CLOSE_MENU'); }
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  border-right: var(--border);
  background-color: var(--background-color);
  overflow-y: auto;

  &__links {
    padding-top: 4rem;
  }
}
</style>
