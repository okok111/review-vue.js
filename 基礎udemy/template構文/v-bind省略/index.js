const app = Vue.createApp({
    data: ()=>({
        message: "hello world",
        url : "https://google.com"
    })
})
app.mount('#app')