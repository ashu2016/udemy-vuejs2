new Vue({
  el: "#app",
  data: {
    counter: 0,
    result : ""
  },
  methods: {
    increment : function(){
      
      this.counter++;
      this.result =  this.counter > 5 ? 'greater than 5' : 'smaller than 5';
    }
  }
});
