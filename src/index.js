new Vue({
  el: "#app",
  data: {
    color: "green",
    width : 100
  
  },
  computed : {
    myStyle : function(){
      return {
        'background-color': this.color,
        'width' : this.width,
        'height' : this.width
      }
    }
  }
});
