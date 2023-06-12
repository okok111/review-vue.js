const app = Vue.createApp({
    data: ()=>({
        message: "hello world"
    }),
    methods: {
        clickHandler: function(){
            this.message = this.message.split("").reverse().join("")
        }
    }
})
app.mount('#app')