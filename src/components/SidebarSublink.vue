<template>
  <router-link
    class="sidebar-sublink"
    :to="routePath"
    @click.native="clickHandle"
  >
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarSublink',
  props: {
    routePath: {
      required: true,
      type: String,
    },
  },
  methods: {
    scrollTo() {
      const section = document.querySelector(this.routePath);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    clickHandle() {
      this.$store.commit('CLOSE_MENU');
      this.scrollTo();
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar-sublink {
  color: var(--text-color);
  font-size: 14px;
  display: block;
  padding-top: 4px;
  padding-bottom: 4px;

  &:hover {
    color: var(--active-link-color);
  }
}
</style>
