<template>
    <div>
        <router-link tag='a' to="/" class="navbar-item">Home</router-link>
        <router-link tag='a' to="/about" class="navbar-item">About</router-link>


        <router-view></router-view>
    </div>
</template>

<script>
    export default {
            name: 'home'

    }
</script>
