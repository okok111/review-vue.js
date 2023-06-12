const app = Vue.createApp({
    data: ()=>({
        colors:[
            {name:"red"},
            {name:"Green"},
            {name:"Blue"}
        ]
    }),
    watch:{
        colors: {
            handler: function(newValue, oldValue){
            console.log("Updated colors ")
            },
            deep: true
        }
    },
    methods: {
        onClick: function(event) {
            this.colors[1].name = "white"
        }
    }
})
app.mount('#app')