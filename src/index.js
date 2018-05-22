new Vue({
  el:"#app",
  data : {
    name :"Ashutosh Kumar Singh",
    age : 32,
    link: "https://google.com"
  },
  methods:{
    getRandomNum : function(){
      return Math.random();     
    }
  }
});
