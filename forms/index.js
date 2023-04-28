const app = Vue.createApp({
  data: ()=>({
      message: "result",
      checked: false,
      colors: [],
      color: '',
      selected: '',
      selects: [],
      toLazy: '',
      toTrim: '',
      toNumber: 0
  })
})
app.mount('#app')