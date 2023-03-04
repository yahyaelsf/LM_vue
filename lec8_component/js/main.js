import friend from "../components/friend.js";
const app = Vue.createApp({
    components:{
        'friend' :friend
    },
    data() {
        return {
            detailsAreVisible: false,
             friends: [
                    {
                    name: 'Mohammed',
                    phone: '01234 5678 991',
                    email: 'mohammed@localhost.com',
                    },
                    {
                    name: 'Ali',
                    phone: '09876 543 221',
                    email: 'ali@localhost.com',
                    },
                ],
        }
    },
    methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
}
});
app.mount('#app')