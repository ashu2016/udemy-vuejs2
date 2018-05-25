new Vue({
  el: "#app",
  data: {
    counter: 0,
    counter1 :0    
  }, 
  computed : {
    result: function() {      
      return this.counter < 37 ? 'Not there yet' : 'Done';
    }
  },
  watch :{
    result: function(value){
      var vm = this;
      setTimeout(function(){
          vm.result = 'Not there yet';
          vm.counter =  0;
      },5000);
    }
  }
});
