<template>
  <b-carousel class="page-carousel" indicators controls label-next="" label-prev="">
    <b-carousel-slide
      v-for="(img, index) in images"
      :img-src="require(`@/assets/img/${img}`)"
      :key="index"
    />
  </b-carousel>
</template>

<script>
export default {
  name: 'PageCarousel',
  props: {
    images: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.carousel-indicators {

  & li {
    background-color: var(--text-color);
  }
}

.carousel-control-prev {
  left: -15px;
}

.carousel-control-next {
  right: -15px;
}

.carousel-control-prev,
.carousel-control-next {
  filter: var(--svg-filter);
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.carousel-item {

  & > img {
    display: block;
    margin: 0 auto;
    height: 300px;
    max-width: 90%;
    object-fit: contain;

    @include media-breakpoint-down(sm) {
      height: 200px;
    }
  }
}
</style>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.page-carousel {
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;

  @include media-breakpoint-down(lg) {
    width: 100%;
  }
}
</style>
