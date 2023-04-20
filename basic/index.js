const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app1')

const app2 = Vue.createApp({
  data:() => ({ 
    message: "aiueo"
  })
}).mount('#app2')

// オブジェクトとか配列とか
const app3 = Vue.createApp({
  data:() => ({ 
    message: "aiueo",
    count: 12345,
    user:{
      lastName: "unko",
      firstName: "tarou",
      prefecture: "osaka"
    },
    colors:["red","blue","green","yellow"]
  })
}).mount('#app3')

const app4 = Vue.createApp({
  data:() => ({ 
    message: "helloooooooooo"
  })
}).mount('#app4')

const app5 = Vue.createApp({
  data:() => ({ 
    toggle: true
  })
}).mount('#app5')

const app6 = Vue.createApp({
  data:() => ({ 
    colors:["red","blue","green","yellow"]
  })
}).mount('#app6')

const app7= Vue.createApp({
  data:() => ({ 
    user:{
      lastName: "unko",
      firstName: "tarou",
      age: 100
    }
  })
}).mount('#app7')

const app8 = Vue.createApp({
  data:() => ({
    now: "..."
  }),
  methods: {
    onclick: function() {
      this.now = new Date().toLocaleDateString()
    }
  }
}).mount('#app8')

const app9 = Vue.createApp({
  data:() => ({ 
    message: ""
  }),
}).mount('#app9')


const app10 = Vue.createApp({
  data:() => ({ 
    message: ""
  }),
})
app10.component("hello-component",{
  template: "<p>Hello!</p>"
})
app10.mount('#app10')