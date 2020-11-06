<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/nani">Curso</router-link> |
      <router-link to="/actividades">Actividades </router-link> |
      <router-link to="/mensajes">Mensajes </router-link>|
      <router-link to="/prueba">Prueba </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped></style>
