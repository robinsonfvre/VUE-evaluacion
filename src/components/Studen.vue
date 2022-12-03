<style>
@import "../assets/css/diseño.css";
</style>
<template>
  <div class="container_studens">

   <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" v-model="search" @keyup="filtrar" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit" @click="filtrar" >Search</button>
    </form>
  </div>
</nav>
    <div class="puntos">
      <p>ALL STUDENS</p>
      <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
    </div>
    <div class="contenido_table">
      <table class="table table-striped table-hover">
        <thead>
          <tr id="table">
            <th scope="col">name</th>
            <th scope="col">apellido</th>
            <th scope="col">dni</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th>funciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in mostrar_datos">
            <th>{{ p.name }}</th>
            <td>{{ p.apellido }}</td>
            <td>{{ p.dni }}</td>
            <td>{{ p.email }}</td>
            <td>{{ p.addres }}</td>
            <td>
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#modal_editar"
              >
                <ion-icon name="create-outline"></ion-icon>
              </button>
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#modal_eliminar"
              >
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ----------modals--------------- -->
  <!-- Button trigger modal -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="modal_editar"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">EDITAR</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">name</label>
              <input
                v-model="mostrar_datos.name"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >apellido</label
              >
              <input
                v-model="mostrar_datos.apellido"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">dni</label>
              <input
                v-model="mostrar_datos.dni"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                v-model="mostrar_datos.email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">addres</label>
              <input
                v-model="mostrar_datos.addres"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" data-bs-dismiss="modal" class="btn btn-primary">
            editar
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modal_eliminar"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">eliminar</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"><h4>¿deseas eliminar este studiante?</h4></div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" data-bs-dismiss="modal" class="btn btn-primary">
            eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista_productos: [],
      mostrar_datos: [],
      search: "",
    };
  },
  mounted() {},

  created() {
    this.lista_productos = [
      {
        name: "Robin ",
        apellido: "Rivera",
        dni: 1006521559,
        email: "rvrobin2001@gmail.com",
        addres: "Matematicas",
      },
      {
        name: "Arley ",
        apellido: "Acosta",
        dni: 1006432456,
        email: "arlry231@gmail.com",
        addres: "Fisica",
      },
      {
        name: "Jhoan",
        apellido: "Quiñoes",
        dni: 1006654789,
        email: "quiñones1@gmail.com",
        addres: "Español",
      },
      {
        name: "Andres ",
        apellido: "Quiros",
        dni: 1004325672,
        email: "AndresQr@gmail.com",
        addres: "Ingles",
      },
      {
        name: "Daniel",
        apellido: "Oscorio",
        dni: 1006567876,
        email: "Daielos@gmail.com",
        addres: "Matematicas",
      },
    ];
    this.mostrar_datos = this.lista_productos;
  },

  methods: {
    insertar(codigo_buscar) {
      let item = this.mostrar_prod.find((pro) => pro.name == codigo_buscar);

      let encontrado = this.mostrar_datos.find(
        (pro) => pro.name == item.name
      );

      if (encontrado == undefined) {
        item.cantidad = 1;
        item.seleccionado = true;

      }
    },

    filtrar() {
      this.mostrar_datos = this.lista_productos.filter(
        (pro) =>
          (pro.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) |
          (pro.dni.toString().indexOf(this.search) > -1)
          
      );
    },
  },
};
</script>
