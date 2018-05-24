new Vue({
  el: "#app",
  data: {
    counter: 0,
    secondCounter:0
   
  },
  methods: {
    result : function(){
      alert("result");
      return  this.counter > 5 ? 'greater than 5' : 'smaller than 5';
    }
  },
  computed : {
    output: function() {
      alert("Output");
      return this.counter > 5 ? 'greater than 5' : 'smaller than 5';

    }
  }
});
