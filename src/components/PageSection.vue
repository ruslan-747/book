<template>
  <h2 class="page-section" :id="id">
    {{heading}}
  </h2>
</template>

<script>

export default {
  name: 'PageSection',
  data: () => ({
    routeName: '',
  }),
  computed: {
    id() {
      return this.heading.trim().replaceAll('?', '').replaceAll(/\s/g, '-');
    },
    href() {
      return `#${this.id}`;
    },
  },
  props: {
    heading: {
      required: true,
      type: String,
    },
  },
  mounted() {
    this.routeName = this.$route.name;

    this.$store.commit('PAGES_ADD_CHILD', {
      heading: this.heading,
      href: this.href,
      parentRouteName: this.routeName,
    });
  },
  destroyed() {
    this.$store.commit('PAGES_REMOVE_CHILD', {
      href: this.href,
      parentRouteName: this.routeName,
    });
  },
};
</script>

<style scoped lang="scss">
.page-section {
  scroll-margin-top: var(--header-height);
  border-bottom: var(--border);
  font-weight: 400;
  font-size: 20px;
  padding-bottom: 2px;
  padding-top: 30px;
  margin-bottom: 0;
}
</style>
