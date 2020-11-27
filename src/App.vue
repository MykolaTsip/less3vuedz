<template>
    <div id="app">
        <div class="navigation">
            <ul class="nav">
                <li class="nav-item">
                    <router-link
                            class="nav-link active"
                            to="/"
                            active-class="active"
                    >
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            to="/users"
                            active-class="active"
                    >
                        User page
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            to="/hello"
                            active-class="active"
                    >
                        To hello world
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',

    }
</script>

<style scoped>
    .navigation {
        background-color: silver;
    }
</style>
