<template>
  <div class="divlogin">
    <div class="container">
      <div class="divcont">
        <img alt="Dayscool logo" src="../assets/logod.png" />
        <h3>Iniciar Sesión</h3>
        <br />
        <form>
          <label>Nombre de usuario</label>
          <input
            v-model="form.nombreU"
            class="form-input"
            id="nombreU"
            required
            placeholder="Contraseña"
          />
          <label>Contraseña:</label>
          <input
            v-model="form.password"
            class="form-input"
            type="password"
            id="password"
            placeholder="Contraseña"
          />
        </form>
        <router-link :to="{ name: 'signup' }"
          ><button class="button button1">Crear cuenta</button></router-link
        >
        <p v-if="err" class="error">Has introducido mal el email o la contraseña.</p>
        <button class="button button2" type="submit" @click="login">
          Ingresar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
              query  getUserC($username: String!, $password: String!){
                getUserC(username: $username, password: $password){
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
              username: this.form.nombreU,
              password: this.form.password
            }
          })
          .then(response => {
            console.log(response.data.data.getUserC);
            let user ={
              id: response.data.data.getUserC.id,
              username: response.data.data.getUserC.username,
              mail: response.data.data.getUserC.mail,
              birthDate: response.data.data.getUserC.birthDate,
              career: response.data.data.getUserC.career,
              role: response.data.data.getUserC.role
            }
            this.$store.dispatch("login", user);
            this.$store.dispatch("changeLogState");
            this.$store.dispatch("loginPrint");
            this.$router.push("/nani")
          })
          .catch(err =>{
            console.log(err);
            this.err = true;
            });
        }
      else{
        alert("Un nombre de usuario y contraseña deben ser proporcionados");
      }
    }
  }
};
</script>

<style scoped lang="scss">
body {
  background-color: #427fb9;
}

.divlogin {
  //background: url(../img/fondo.jpg) no-repeat;
  background-color: #427fb9;
  width: 100%;
  height: 100vh;
  margin: 0%;
  display: flex;
  align-content: center;
  align-items: center;
}
.container {
  width: 100%;
  text-align: center;
}
.divcont {
  width: 100%;
  max-width: 300px;
  background: rgba(255, 255, 255, 255);
  padding: 2%;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid #ccc;
}
form {
  text-align: left;
}
button {
  background-color: #4c87af;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 6px 16px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button1 {
  background-color: white;
  color: black;
  border: 1px solid #4c87af;
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
</style>
