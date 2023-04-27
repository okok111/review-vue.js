const app = Vue.createApp({
  data: ()=>({
    toggle: true
  })
})
app.mount('#app')

// v-else-if
const app2 = Vue.createApp({
  data: ()=>({
    color: ""
  })
})
app2.mount('#v-else-if')

const app3 = Vue.createApp({
  data: ()=>({
    toggle: true
  })
})
app3.mount('#v-show')