
const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
             friends: [
                    {
                    id: '1',
                    name: 'Mohammed',
                    phone: '01234 5678 991',
                    email: 'mohammed@localhost.com',
                    },
                    {
                    id: '2',
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
})

app.mount('#app')