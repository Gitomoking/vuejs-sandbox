new Vue({
  data: {
    a: 1
  },
  created: function() {
    // `this` は vm インスタンスのこと
    console.log('a is: ' + this.a)
  }
})
