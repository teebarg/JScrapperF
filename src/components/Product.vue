<template>
  <div class="card">
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
