const app = Vue.createApp({
    data: ()=>({
        message: "hello <span style='color:red;'>world</span>"
    })
})
app.mount('#app')