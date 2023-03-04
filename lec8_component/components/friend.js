export default{
      template:`
             <li>
            <h2>{{ name }}</h2>
            <br>
            <slot/>
            <button @click="toggleDetails()">
                {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
            </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ phoneNumber }}</li>
                <li><strong>Email:</strong> {{ email }}</li>
            </ul>
            </li>
            `,
            data(){
                return{
                    detailsAreVisible:false
                }
            },
            props:{
                name:{
                    type:String ,
                    required : false,
                    default : 'Anon'
                },
                phoneNumber :{
                    type:String ,
                    required : true,
                    default : 'Anon'
                },
                email : {
                    type: String ,
                    required : true,
                    default : 'Anon',
                }
            },
            methods: {
                toggleDetails(){
                    this.detailsAreVisible = !this.detailsAreVisible;
                }
            },
}