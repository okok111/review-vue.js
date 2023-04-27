const app = Vue.createApp({
  data: ()=>({
      counter: 0
  }),
  methods: {
    
  },
})
app.mount('#app')

// メソッドイベントはんどら
const app2 = Vue.createApp({
  data: ()=>({
      counter: 0
  }),
  methods: {
    clickHandler: function(){
      this.counter++
    }
  },
})
app2.mount('#app2')

// メソッドイベントはんどら
const app3 = Vue.createApp({
  data: ()=>({
      counter: 0
  }),
  methods: {
    clickHandler: function(event){
      this.counter++
      console.log(event.target)
      console.log(event.target.tagName)
      console.log(event.target.innerHTML)
      console.log(event.target.type)
      console.log(event.target.id)
    }
  },
})
app3.mount('#app3')

const app4 = Vue.createApp({
  data: ()=>({
      counter: 0,
      message: ''
  }),
  methods: {
    clickHandler: function($event, message){
      // console.log(message)
      this.message = message
      console.log($event)
    }
  },
})
app4.mount('#app4')

const once = Vue.createApp({
  data: ()=>({
    message: ''
  }),
  methods: {
    clickHandler: function(){
      this.message =new Date().toLocaleTimeString()
    }
  },
})
once.mount('#once')

