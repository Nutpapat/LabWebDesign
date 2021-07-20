// Get a reference to the database service
var database = firebase.database();
var messageRef = database.ref("message");

new Vue({
    el:"#comment",
    data:{
        messageText:'',
        messages:[],
        name:'Umim'        
    },methods: {
        storeMessage:function(){
            messageRef.push({text:this.messageText,name:this.name})
            this.messageText=''
        }
    },
    created() {
        
    },
})