var vm = new Vue({
  el: '#app',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error & this.error.type === 'fatal'
      }
    }
  }
})

var arrayDemoVM = new Vue({
  el: '#array',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})
