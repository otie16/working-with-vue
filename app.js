new Vue({
  el: "#vue-app",
  data: {
    name: "John is using vue",
    job: "He got a job at google",
    website: 'http://www.netninja.co.uk',
    age: 6,
    a: 0,
    b: 0,
  },

  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    },
  //   addToA: function(){
  //     console.log('addToA')
  //      return this.a + this.age;
  //   },
  //   addToB: function(){
  //     console.log('addToB')
  //     return this.b + this.age;
  //   }
  // 
  },

  computed: {
    addToA: function(){
      console.log('addToA')
      return this.a + this.age;
   },
   addToB: function(){
    console.log('addToB')
     return this.b + this.age;
   }

  }
})
