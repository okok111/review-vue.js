const app = Vue.createApp({
    data: ()=>({
        items: null,
        keyward: '',
        message:''
    }),
    watch:{
        keyward: function(newKeyward,oldKeyward) {
            console.log(newKeyward)
            this.message = "wainting for"
            this.debouncedGetAnswer()
        }
    },
    mounted: function(){
        // this.keyward = "javascript"
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function(){
            if(this.keyward === ''){
                this.items = null
                return 
            }
            this.message = "Lading...."
            const vm = this
            const params = { page: 1,per_page: 20,query: this.keyword}
            axios.get('https://qiita.com/api/v2/items' ,{params})
                .then(function(response){
                    // console.log(response)
                    vm.items = response.data
                })
                .catch(function(error){
                    vm.message = "error!!!!" +error
                })
                .finally(function(){
                    vm.message = ""
                })
        }
    },
})
app.mount('#app')