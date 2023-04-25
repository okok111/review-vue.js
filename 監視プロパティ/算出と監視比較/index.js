// 監視プロパティを使う場合
const app = Vue.createApp({
    data: ()=>({
        firstName: '',
        lastName: '',
        fullName: ''
    }),
    watch:{
        firstName: function(value) {
            this.fullName = value + ' ' + this.lastName
        },
        lastName: function(value) {
            this.fullName = this.firstName + ' ' + value
        }
    }
})
app.mount('#app')

// 算出プロパティを使う場合
const app1 = Vue.createApp({
    data: ()=>({
        firstName: '',
        lastName: ''
        }),
    computed:{
        fullName: function(){
            return this.firstName + ' ' + this.lastName
        }
    }
})
app1.mount('#app1')