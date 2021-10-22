<template>
  <ul class="sidebar-links">
    <li v-for="page in pages" :key="page.routeName">
      <sidebar-link :route-name="page.routeName">{{page.heading}}</sidebar-link>
      <sidebar-sublinks class="sidebar-links__sublinks" :page-children="page.children"/>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarSublinks from './SidebarSublinks.vue';
import SidebarLink from './SidebarLink.vue';

export default {
  name: 'SidebarLinks',
  computed: {
    ...mapGetters(['pages']),
  },
  components: {
    SidebarLink,
    SidebarSublinks,
  },
};
</script>

<style scoped lang="scss">
.sidebar-links {
  list-style: none;
  padding-left: 0;

  &__sublinks {
    transition: all 2s;
  }
}
</style>
