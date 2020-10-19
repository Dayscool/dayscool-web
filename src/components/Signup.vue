<template>
  <div class="divlogin">
    <div class="container">
      <div class="divcont">
        <img alt="Dayscool logo" src="../assets/logod.png" />
        <h3>Crear una cuenta de Dayscool</h3>
        <br/>
        <form>
          <label >Nombre completo</label>
          <input v-model="form.nombreC" class="form-input" id="nombreUsuario" required>
          <label >Nombre de usuario</label>
          <input v-model="form.nombreU" class="form-input" id="nombreU" required>
          <label >Correo electronico</label>
          <input v-model="form.email" class="form-input" id="email" required>
          <label >Fecha de nacimiento</label>
          <input v-model="form.fecha" class="form-input" id="fechaN" required>
          <label >Carrera</label>
          <input v-model="form.carrera" class="form-input" id="carrera" required>
          <label></label>
          <label >Contraseña</label>
          <input v-model="form.password" class="form-input" type="password" id="password" placeholder="Contraseña">
          <label >Confirmar Contraseña</label>
          <input v-model="form.cpassword" class="form-input" type="cpassword" id="cpassword" placeholder="Confirmar Contraseña">
          </form>
        <router-link :to="{name: 'login'}"><button class="button button1">Registrarme</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form:{
        nombreC:"",
        nombreU:"",
        email:"",
        fecha:"",
        carrera:"",
        password:"",
        cpassword:""
      }
    }
  }
};
</script>

<style scoped lang="scss">
body{
  background: #4191E0;
  display: flex;
}

.divlogin{ 
    //background: url(../img/fondo.jpg) no-repeat; 
    background-color:  #4191E0 ;
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;

}
.container{ 
    width: 100%;
    text-align: center;
}
.divcont{
    max-width: 50%;
    max-height: 70%;
    background: white;
    margin: 30px;
    padding: 2%;
    border-radius: 10px;
    display: inline-block;
}
input{
  width: 100%;
  padding: 10px 10px;
  margin: 1px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid #ccc;
}
.input1{
  width: 50%
}
label{
  font-size: 70%;
}
form{
  text-align: left;
}
button {
  background-color:#4191E0; 
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
  border: 1px solid #4191E0;
}
.button1:hover {
  background-color: #4191E0;
  color: white;
}
</style>
