let App ={
 data() {
    return {
        counter : 1,
        name :'yahya',
        val:'',
        goals:[]
    }
 },
 methods: {
    addNum(val){
        this.counter = this.counter + val ;
    },
     deleteNum(val){
        this.counter = this.counter - val ;
    },
    setName(event){
        this.name = event.target.value ;
    },
    EnterdForm(event){
        alert('lllloooo')
    },
    addGoal(){
        if(this.val != ''){
             this.goals.push(this.val);
        this.val = ''
        }
    },
     deleteGoal(goal){
            this.goals.splice(goal,1)
        }
 },
 computed:{
  getName(){
        console.log('44444');
        return this.counter *2;
       
    },
 }
}
const app = Vue.createApp(App);
app.mount('#user-goal');