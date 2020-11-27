<template>
    <div>
        <h1>
            Users
        </h1>
        <div class="form">
            <label>Name</label>
            <input
                    type="text"
                    v-model="nameUser"
            >
            <br>
            <label>Password</label>
            <input
                    type="password"
                    v-model="passwordUser"
            >
            <br>
            <label>Age</label>
            <input
                    type="number"
                    v-model="ageUser"
            >
        </div>
        <hr>
        <div class="buttons">
            <button
                    class="btn btn-outline-primary"
                    @click="createUser"
            >
                Add user
            </button>
            <button
                    class="btn btn-outline-primary"
                    @click="lookUser"
            >
                Look users
            </button>
        </div>
        <hr>

        <h2>
            Users
        </h2>
<!--        <ul>-->
<!--            <li v-for="(user, i) in arrUsers" :key="`${user.name} ${i}`">-->
<!--        <User :arrUsers="user"/>-->
<!--            </li>-->
<!--        </ul>-->
        <hr>
        <ul>
            <li v-for="(user, i) in arrUsers" :key="`${user.name} ${i}`">
                {{user.name}} - {{user.age}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {API} from "../api";
    // import User from "./User";

    export default {
        name: "Users",

        // components: {
        //   User
        // },

        data() {
            return {
                nameUser: '',
                passwordUser: '',
                ageUser: '',
                arrUsers: []
            }
        },

        methods: {
            async createUser() {
                 API.Users.CreateUser(this.nameUser)
            },

            async lookUser() {
              const users = await API.Users.GetUser
                  const arrUsers = []
                Object.entries(users.body).forEach((key, value) => arrUsers.push({
                    ...value,
                    id: key
                }))

                console.log(arrUsers)

                this.arrUsers = arrUsers
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        margin: 60px 0;
        text-align: center;
    }

    .form {
        /*display: flex;*/
        /*justify-content: center;*/
        text-align: center;
    }

    .form input[type="password"] {
        margin-right: 30px;
    }

    .buttons {
        text-align: center;
    }

    button {
        margin-left: 10px;
    }
</style>
