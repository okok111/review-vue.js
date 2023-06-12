const helloComponent ={
  template:'<p>hello!!</p>'
}
const buttonCounter = {
  template: '<div><span>count:</span><button v-on:click="countUp"> {{ count }}</button></div>',
  data:()=>({
    count:0
  }),
  methods: {
    countUp: function(event){
      this.count++
    }
  }
}
const app = Vue.createApp({
  data: ()=>({
    
  }),
  components:{
    'hello-component':helloComponent,
    'button-counter':buttonCounter
  }
})


app.mount('#app')