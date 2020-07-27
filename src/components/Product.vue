<template>
  <div class="card">
  <img :src="product.img" class="card-img-top" :alt="product.img">
  <div class="card-body d-flex flex-column">
    <h6 class="card-title">{{product.name}}</h6>
    <div class="mt-auto">
      <p class="card-text">Old Price: <span>{{product.old}}</span></p>
      <p class="card-text">New Price: <span>{{product.current}}</span></p>
      <p class="card-text mb-2">Discount: <span>{{product.discount}}</span>%</p>
      <a :href="'https://www.jumia.com.ng' + product.href" target="_blank" class="card-link">
        Go to Product
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Product',
  methods: {
  },
  props: {
    product: Object,
  },
};
</script>
<style lang="scss">
  .card-img-top{
      max-height: 160px;
      height: 100%;
  }
  .card-title {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
