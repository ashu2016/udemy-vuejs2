new Vue({
  el: "#app",
  data: {
    textField: ''
  },
  methods: {
    getText : function(event){
      
      this.textField = event.target.value;
    },    
    showAlert : function(){
      alert("Alert kar diya hai");
    }
  }
});
