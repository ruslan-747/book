<template>
  <router-link
    class="sidebar-link"
    :to="{name: routeName}"
    active-class="sidebar-link--active"
    @click.native="clickHandle"
  >
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarLink',
  props: {
    routeName: {
      required: true,
      type: String,
    },
  },
  methods: {
    clickHandle() {
      this.$store.commit('CLOSE_MENU');
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar-link {
  color: var(--text-color);
  text-decoration: none;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  font-size: 20px;

  &:hover {
    background-color: var(--hover-background-color);
    color: var(--active-link-color);
  }

  &--active {
    color: var(--active-link-color);
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: var(--active-link-color);
      left: 0;
    }
  }
}
</style>
