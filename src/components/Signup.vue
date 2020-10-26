<template>
  <div class="divlogin">
    <div class="container">
      <div class="divcont">
        <img alt="Dayscool logo" src="../assets/logod.png" />
        <h3>Crear una cuenta de Dayscool</h3>
        <br />
        <form id>
          <label>Nombre completo</label>
          <input
            v-model="form.nombreC"
            class="form-input"
            id="nombreUsuario"
            required
          />
          <label>Nombre de usuario</label>
          <input
            v-model="form.nombreU"
            class="form-input"
            id="nombreU"
            required
          />
          <label>Correo electronico</label>
          <input
            type="email"
            v-model="form.email"
            class="form-input"
            id="email"
            required
          />
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            v-model="form.fecha"
            class="form-input"
            id="fechaN"
            required
          />
          <label>Carrera</label>
          <input
            type="text"
            v-model="form.carrera"
            class="form-input"
            id="carrera"
            required
          />
          <label>Rol</label>
          <select name="rol" id="rol" v-model="form.rol">
            <option>Profesor</option>
            <option>Estudiante</option>
          </select>
          <label>Contraseña</label>
          <input
            type="password"
            v-model="form.password"
            class="form-input"
            id="password"
            placeholder="Contraseña"
          />
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            v-model="form.cpassword"
            class="form-input"
            id="cpassword"
            placeholder="Confirmar Contraseña"
          />
        </form>
        <button type="submit" class="button button1" @click="sendNewUser()">Registrarme</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "signup",
  data() {
    return {
      errors: [],
      form: {
        nombreC: "",
        nombreU: "",
        email: "",
        fecha: "",
        rol:"",
        carrera: "",
        password: "",
        cpassword: "",
      },
      prueba: {}
    };
  },
  methods: {
    checkUser: function(e) {
      if (
        this.form.nombreC &&
        this.form.nombreU &&
        this.form.email &&
        this.form.fecha &&
        this.form.carrera &&
        this.form.password &&
        this.form.cpassword
      ) {
        return true;
      } else {
        this.errors.push("datos incompletos");
      }
      e.preventDefault();
      console.log(this.errors);
    },
    sendNewUser(){
      //if (checkUser) {
        axios.post(this.$store.state.backURL , {
            query: `
            mutation createUser2($user2: User2Input!){
              createUser2(user2: $user2) {
                id
                username
                role
              }
            }`,
            variables:{ user2: {
              username: this.form.nombreU,
              mail: this.form.email,
              birthDate: this.form.fecha,
              career: this.form.carrera,
              role: this.form.rol,
              name: this.form.nombreC,
              password: this.form.password}
            }
        }).then(response => {
          console.log(response.data.data)
        })
        .catch(err => console.log(err));

        console.log(this.form.fecha)
      //} else  {
        //mostrar error
      //}
    }
  }
};
</script>

<style scoped lang="scss">
body {
  background: #4191e0;
  display: flex;
}

.divlogin {
  //background: url(../img/fondo.jpg) no-repeat;
  background-color: #4191e0;
  width: 100%;
  padding: 0%;
  display: flex;
  align-content: center;
  align-items: center;
}
.container {
  width: 100%;
  padding: 0%;
  text-align: center;
}
.divcont {
  max-width: 50%;
  max-height: 70%;
  background: white;
  margin: 30px;
  padding: 2%;
  border-radius: 10px;
  display: inline-block;
}
input,select {
  width: 100%;
  padding: 5px 5px;
  margin: 1px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid #ccc;
  text-decoration-color: gray;
}
.input1 {
  width: 50%;
}
label {
  font-size: 70%;
}
form {
  text-align: left;
}
button {
  background-color: #4191e0;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 8px 14px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button1 {
  background-color: white;
  color: black;
  border: 1px solid #4191e0;
}
.button1:hover {
  background-color: #4191e0;
  color: white;
}
</style>
