const app = Vue.createApp({
    data: ()=>({
        message: "hello world",
        number : 100,
        ok : true
    })
})
app.mount('#app')