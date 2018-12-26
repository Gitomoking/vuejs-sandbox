var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

 var demo1_vm = new Vue({
   el: '#watch-demo',
   data: {
     firstName: 'Foo',
     lastName: 'Bar',
     fullName: 'Foo Bar'
   },
   watch: {
     firstName: function (val) {
       this.fullName = val + ' ' + this.lastName
     },
     lastName: function (val) {
       this.fullName = this.firstName + ' ' + val
     }
   }
 })

var demo2_vm = new Vue({
  el: '#computed-demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})

var demo3_vm = new Vue({
  el: '#setter-demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter 関数
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})
