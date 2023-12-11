import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js'

const app = new Vue({
    el:'#app',
    data:{
        status:'works!',
        textarea:'',
        data:[],
        lastAnswer: ''
    },
    methods:{
        ask(){
            this.sentToGpt(this.textarea)
            
            this.textarea = ''
        },
        async sentToGpt(msg){
            await axios
            .get('/api/gpt', {
                params:{
                    message: msg
                }
            })
            .then(response => {
                console.log(response)
                this.lastAnswer = response.data.answer
                this.data.push([{
                    q: msg,
                    a: response.data.answer
                }])
                console.log(this.data.length)
            })
            .catch(error =>{
                console.log(error)
            })
        }
    }
})