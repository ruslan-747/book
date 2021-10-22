<template>
  <ul class="sidebar-sublinks">
    <li v-for="child in pageChildren" :key="child.href">
      <sidebar-sublink :route-path="child.href">{{child.heading}}</sidebar-sublink>
    </li>
  </ul>
</template>

<script>
import SidebarSublink from './SidebarSublink.vue';

export default {
  name: 'SidebarSublinks',
  props: {
    pageChildren: {
      required: true,
      type: Array,
    },
  },
  components: {
    SidebarSublink,
  },
};
</script>

<style scoped lang="scss">
.sidebar-sublinks {
  list-style: none;
  padding-left: 30px;
  overflow-y: hidden;
}
</style>
