new Vue({
  el:"#app",
  data : {
    title :"Hello World I am here!!",
    link: "https://google.com"
  },
  methods:{
    sayHello : function(){
      this.title = 'Hello World';
     return this.title;
    }
  }
});
