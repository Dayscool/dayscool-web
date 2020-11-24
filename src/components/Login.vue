<template>
  <div class="divlogin">
    <div class="container">
      <div class="divcont">
        <img class="logo" alt="Dayscool logo" src="../assets/Logo512px.svg" />
        <h3>Iniciar Sesión</h3>
        <br />
        <form>
          <div class="form-label">
            <label>Nombre de usuario</label>
          </div>
          <input
            v-model="form.nombreU"
            class="form-input"
            id="nombreU"
            required
            placeholder="Contraseña"
          />
          <div class="form-label">
            <label>Contraseña:</label>
          </div>
          <input
            v-model="form.password"
            class="form-input"
            type="password"
            id="password"
            placeholder="Contraseña"
          />
        </form>
        <div>
          <router-link :to="{ name: 'signup' }"
            ><button class="button button1">Crear cuenta</button></router-link
          >
          <p v-if="err" class="error">
            Has introducido mal el email o la contraseña.
          </p>
          <button class="button button2" type="submit" @click="login">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      form: {
        nombreU: "",
        password: ""
      },
      err: false
    };
  },
  methods: {
    login() {
      if (this.form.username != "" && this.form.password != "") {
        axios
          .post(this.$store.state.backURL, {
            query: `
              query  getUserByUsername($username: String!){
                getUserByUsername(username: $username){
                  id
                  username
                  name
                  mail
                  birthDate
                  career
                  role
                }
              }`,
            variables: {
              username: this.form.nombreU
              //password: this.form.password,
            }
          })
          .then(response => {
            console.log(response.data.data.getUserByUsername);
            let user = {
              id: response.data.data.getUserByUsername.id,
              username: response.data.data.getUserByUsername.username,
              mail: response.data.data.getUserByUsername.mail,
              birthDate: response.data.data.getUserByUsername.birthDate,
              career: response.data.data.getUserByUsername.career,
              role: response.data.data.getUserByUsername.role,
              name: response.data.data.getUserByUsername.name
            };
            this.$store.dispatch("login", user);
            this.$store.dispatch("changeLogState");
            this.$store.dispatch("loginPrint");
            this.$store.dispatch("swapPage", "Mis cursos");

            const FIREBASE_DATABASE = firebase.database();

            FIREBASE_DATABASE.ref("/notifications")
              .push({
                user: response.data.data.getUserByUsername.name
              })
              .catch(() => {
                console.log("error sending notification :(");
              });
            this.$router.push("/nani");
          })
          .catch(err => {
            console.log(err);
            this.err = true;
          });
      } else {
        alert("Un nombre de usuario y contraseña deben ser proporcionados");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.divcont {
  width: 30vw;
  padding: 2%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  min-height: 65vh;
  background-color: white;
}
.button1 {
  background-color: white;
  color: #4c87af;
  border: none;
}
.button1:hover {
  background-color: #4c87af;
  color: white;
}
.button2 {
  background-color: #4c87af;
  color: white;
  border: 2px solid #4c87af;
}
.form-label {
  text-align: left;
  width: 100%;
}
</style>
