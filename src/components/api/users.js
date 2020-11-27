import Vue from 'vue'

export const Users = {
    CreateUser: (user) => Vue.http.post(`users.json`, user),

    GetUser: () => Vue.http.get(`users.json`)
}
