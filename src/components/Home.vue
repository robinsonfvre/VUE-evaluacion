<style>
@import "../assets/css/style.css";
</style>

<template>
  <div class="container_body">
    <nav>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <router-link class="nav-link" href="#" to="/home/">ADMIN</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
             <h4>EVAULACION ROBIN RIVERA</h4>
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
          <hr>
          <a id="icono">
            <span>
              <ion-icon name="accessibility-outline"></ion-icon>
            </span>
            <router-link class="nav-link" href="#" to="/home/"
              >TEACHER</router-link
            >
          </a>
          <hr>
          <a id="icono">
            <span>
              <ion-icon name="accessibility-outline"></ion-icon>
            </span>
            <router-link class="nav-link" to="/home/studen">STUDEN</router-link>
          </a>
          
          <hr >
        </div>
      </div>

      <div class="contenido">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
