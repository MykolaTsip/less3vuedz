<template>
    <div>
               {{user.name}} -- {{user.password}} -- {{user.age}}

    </div>
</template>

<script>
    import arrUsers from './Users'

    export default {
        name: "User",
        props: {
            arrUsers
        }
    }
</script>

<style scoped>

</style>
