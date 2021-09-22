const app = Vue.createApp({

    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
        }
    },
})

app.mount('#app')