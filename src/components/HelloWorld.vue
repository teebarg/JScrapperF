<template>
  <div class="scrape_container pt-3">
    <h3 class="text-center">JScrapper</h3>
    <h6 class="text-center mb-3">Get the best discount from Jumia NG.
       JScrapper helps you find products with the
        highest discount available on Jumia the biggest Ecommerce Site in Nigeria</h6>
    <div class="d__container px-md-5 px-sm-3">
      <div style="flex-grow: 1; border: 1px solid #111; min-height: 80vh" class="p-3">
        <div class="">
          <form>
            <div class="row clear-row">
              <div class="col-lg-4 col-md-6 col-sm-6 col-8 clear-col pr-3">
                <label for="name">Category</label>
                <select class="form-control" v-model="selectedCat">
                  <option value="">Select a Category</option>
                  <option v-for="(cat, key) of categories" :key="key" :value="cat.value">
                    {{ cat.key }}
                  </option>
                </select>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-4 clear-col">
                <label for="name">Discount</label>
                <input
                  type="text"
                  v-model="target"
                  class="form-control"
                  placeholder="discount e.g 75">
              </div>
            </div>
          </form>
          <button type="button" @click="handleSearch(selectedCat)" class="btn btn-primary mt-2">
            Search
          </button>
        </div>
        <div class="listing my-3">
          <Product v-for="(prod, key) of products" :key="key" :product="prod" />
        </div>
          <template v-if="products.length">
            <div v-if="products[0].next">
              <button
               type="button"
               @click="handleSearch(products[0].next)" class="btn btn-primary mt-2">
                Next Page
              </button>
            </div>
          </template>
          <template v-else>
            <div>
              <p>Products are Not available. Use the search option</p>
            </div>
          </template>
      </div>
      <div class="control px-5">
        <h3>JScrapper Newsletter</h3>
        <p>Subscribe today and never miss out on the best discounts available on Jumia.</p>
        <div class="form-group mt-3">
            <label for="email" class="sr-only">Password</label>
            <input type="text" v-model.trim="$v.email.$model"
             class="form-control" :class="{ 'is-invalid': $v.email.$error }"
              id="email"
               placeholder="Email Address">
          </div>
          <div class="invalid-feedback">
                Please provide a valid Email.
          </div>
          <button type="button" @click="subscribe" class="btn btn-primary w-100 mb-3">
            Subscribe
          </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import swal from 'sweetalert';
import { HTTP, CATEGORIES } from '../constants';
import Product from './Product.vue';
import Footer from './Footer.vue';

export default {
  name: 'HelloWorld',
  components: { Product, Footer },
  data() {
    return {
      categories: CATEGORIES,
      selectedCat: '',
      target: 50,
      products: [],
      email: '',
    };
  },
  methods: {
    async handleSearch(e) {
      const page = `https://www.jumia.com.ng/${e}`;
      const { target } = this;
      try {
        const { data } = await HTTP.post('', { page, target });
        this.products = data;
      } catch (error) {
        swal('An Error Ocurred!', 'Please Contact Admin', 'error');
      }
    },
    async subscribe() {
      if (this.$v.$invalid) {
        swal('An Error Ocurred!', 'Please Enter a valid Email', 'error');
        return;
      }

      try {
        await HTTP.post('/subscribe', { email: this.email });
        swal('Successful!', 'Subscription Successful', 'success');
      } catch (error) {
        swal('An Error Ocurred!', 'Please Contact Admin', 'error');
      }
    },
  },
  validations: {
    email: {
      required,
      email,
    },
  },
};
</script>
<style lang="scss" scoped>
  label {
    color: inherit !important;
  }
</style>
