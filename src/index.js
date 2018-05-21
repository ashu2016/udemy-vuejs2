new Vue({
  el:"#app",
  data : {
    title :"Hello World I am here!!",
    keepSync:false
  },
  methods:{
    changeTitle : function(){
      this.title = "Title has been changed";
    },
    KeeptextSync: function(event){
      if(this.keepSync === true){
        this.title = event.target.value;
      }
    }
  }
});
