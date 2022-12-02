<style>
@import "../assets/css/design.css";
</style>
<template>
    <main>
        <div>
            <div class="login-box">
                <h2>Login</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" >
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="">
                        <label>Password</label>
                    </div>
                        <router-link to="/home">Submit</router-link>
                </form>
            </div>
        </div>
    </main>
    <router-view></router-view>
</template>