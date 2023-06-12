const app = Vue.createApp({
    data: ()=>({
        large: true,
        color: true,
        largeClass: 'large',
        dangerClass: 'danger',
        classObject: {
            "large" :true,
            'text-color':true
        },
        bigClass: {
            "large" :true,
            'text-color':true
        },
        dclass :{
            "danger":true
        },
        isLarge: true,
        color:'green',
        fontSize: 50,
        styleObject: {
            color: 'gray',
            fontSize: '35px'
        }

    })
})
app.mount('#app')