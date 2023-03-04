let App ={
 data() {
    return {
        counter : 1,
        name :'yahya',
        val:'',
        goals:[]
    }
 },
 template:`
 <h2>My Course Goal</h2>
      <input type="text" v-model="val"> <button @click="addGoal">Save</button><br> 
     <p v-if="goals.length === 0">there is no goals in your list</p> 
      <p v-else v-for="goal in goals" @click="deleteGoal(goal)">{{ goal }}</p>

      <button @click="KillApp"></button>
 `,
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
        },
 },
 computed:{
  getName(){
        console.log('44444');
        return this.counter *2;
       
    },
 },
 beforeCreate() {
    console.log('beforeCreate()');
 },
 created() {
    console.log('created()');
 },
 beforeMount() {
      console.log('beforeMount()');
 },
 mounted() {
    console.log('mounted');
 },
 beforeUpdate() {
       console.log('beforeUpdae()');
 },
 updated() {
    console.log('updated');
 },
 }
const app = Vue.createApp(App);
app.mount('#user-goal');

// app.unmount();

// let message = 'Hello';

// let newMessage = message + ' '+"world" ;
// console.log(newMessage);

// message = 'Heloooooo!1';
// console.log(newMessage);