new Vue({
  el: "#app",
  data: {
    counter: 0     
  }, 
  computed : {
    output: function() {      
      return this.counter > 5 ? 'greater than 5' : 'smaller than 5';
    }
  },
  watch :{
    counter: function(value){
      var vm = this;
      setTimeout(function(){
          vm.counter = 0;
      },3000);
    }
  }
});
