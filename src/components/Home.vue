<style>
@import "../assets/css/style.css";
</style>

<template>


    <div class="container_body">
        <nav>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <router-link class="nav-link" href="#" to="/home/">ADMIN</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <router-link class="nav-link" href="#" to="/home/">TEACHER</router-link>


                            <router-link class="nav-link" to="/home/studen">STUDEN</router-link>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </nav>


        <div class="main">
        <div id="viewport">
            <!-- Sidebar -->
            <div id="sidebar">
                <header>
                    <a href="#">I.E LA SALLE</a>
                </header>
                <ul class="nav">
                    <i class="bi bi-pencil-fill"></i>
                </ul>
                <ul class="nav">
                    <i class="bi bi-trash3-fill"></i>
                </ul>
                <ul class="nav">
                    <i class="bi bi-card-image"></i>
                </ul>
                <ul class="nav">
                    <i class="bi bi-database-up"></i>
                </ul>
            </div>

        </div>

       
    </div>
    <router-view></router-view>
</div>
</template>
