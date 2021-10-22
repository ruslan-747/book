<template>
  <ul class="page-list" :class="{'page-list--disc': disc}">
    <li v-for="(item, index) in listItems" :key="index">
      <div v-if="typeof item === 'object'">
        {{item.text}}
        <page-list disc :list-items="item.children"/>
      </div>
      <div v-else>
        {{item}}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PageList',
  props: {
    listItems: {
      type: Array,
      required: true,
    },
    disc: {
      required: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.page-list {
  &--disc {
    list-style: disc;
  }

  list-style: decimal;
  font-size: 14px;
  padding-top: 10px;
}
</style>
