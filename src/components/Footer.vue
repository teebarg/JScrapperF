<template>
  <footer class="new_footer_area bg_color">
    <div class="new_footer_top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 pt-3">
            <div
              class="f_widget company_widget wow fadeInLeft"
              data-wow-delay="0.2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"
            >
              <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
              <p>Contact Us Today for your technological needs</p>
              <form>
                  <div class="form-row">
                    <div class="col form-group">
                      <label for="email">Email*</label>
                      <input
                      v-model.trim="$v.email.$model"
                      type="text"
                      required
                      class="form-control" :class="{ 'is-invalid': $v.email.$error }" id="email">
                      <div class="invalid-feedback">
                        Please provide a valid Email.
                      </div>
                    </div>
                    <div class="col form-group">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                  </div>
                  <button class="btn btn_get btn_get_two"
                   @click="handleClick" :disabled="$v.$invalid"
                   type="button">
                    Submit
                    </button>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pt-3">
            <div
              class="f_widget about-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.4s"
              style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;"
            >
              <h3 class="f-title f_600 t_color f_size_18">Services</h3>
              <ul class="list-unstyled f_list">
                <li><span>Web Applications</span></li>
                <li><span>Enterprise Resource Apps</span></li>
                <li><span>Mobile Development</span></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pt-3">
            <div
              class="f_widget social-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.8s"
              style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;"
            >
              <h3 class="f-title f_600 t_color f_size_18">Connections</h3>
              <div class="f_social_icon">
                <a href="#" class="fab fa-twitter"></a>
                <a href="https://www.linkedin.com/in/adeniyi-aderounmu-b46724ba" target="_blank" class="fab fa-linkedin"></a>
                <a href="https://github.com/teebarg" class="fab fa-github" target="_blank"></a>
                <a href="https://stackoverflow.com/users/11933327/adeniyi-aderounmu" class="fab fa-stack-overflow" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
            <p class="mb-0 f_400">
              © Cynatics Inc.. {{new Date().getFullYear()}} All rights reserved.
            </p>
          </div>
          <div class="col-6">
            <h6 class="mb-0 f_400">
              Disclaimer: <span style="font-size: 80%">
                JScrapper is not an affiliate of JUMIA.
                </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import swal from 'sweetalert';
import { HTTP } from '../constants';

export default {
  name: 'Footer',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    async handleClick() {
      if (this.$v.$invalid) {
        swal('An Error Ocurred!', 'Please Enter a valid Email', 'error');
        return;
      }

      try {
        await HTTP.post('/contact', { email: this.email, name: this.name, message: this.message });
        swal('Successful!', 'Message Successful sent', 'success');
      } catch (error) {
        swal('An Error Ocurred!', 'Please Contact Admin', 'error');
      }
    },
  },
};
</script>
