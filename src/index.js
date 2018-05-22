new Vue({
  el:"#app",
  data : {
    counter :0,
    x :0,
    y:0
  },
  methods:{
    increment : function(){
      this.counter++;     
    },
    getCoordinates : function(event){
      this.x =  event.clientX;
      this.y = event.clientY;
    }
  }
});
