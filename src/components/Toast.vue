<template>
  <div
    class="toast"
    :class="{ 'show': show }"
    role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <!-- <img src="..." class="rounded mr-2" alt="..." /> -->
      <strong class="mr-auto">{{content.title}}</strong>
      <!-- <small>11 mins ago</small> -->
      <button
        type="button"
        @click="close"
        class="ml-2 mb-1 close"
        data-dismiss="toast"
        aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      {{content.message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    show: Boolean,
    content: Object,
  },
  methods: {
    close() {
      this.$emit('onClose', true);
    },
  },
  watch: {
    show() {
      const self = this;
      setTimeout(() => self.close(), 5000);
    },
  },
};
</script>
