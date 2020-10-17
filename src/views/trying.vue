<template>
<div>
    <div id="top">
        soy top uwu
    </div>
    <div id=cuerpo>
        <p>
            Mis Cursos 
        </p>
        <div id="lista">
            <Curso v-bind:cursr="{nombre: 'aa', profesor: 'sss'}" />
        </div>
        <div class = "boton">
            Cursos Anteriores
        </div>
    </div>
</div>
  
</template>

<script>
import Curso from "@/components/cours.vue";
export default {
    name: "cursos",
    components: {
        Curso
    }
}
</script>

<style>
div#lista{
    display: flex;
    flex-direction: row ;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 0 15vw;
}
div.boton{
    background-color: #4191E0;
    padding: 1%;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    margin: 0 auto;
    margin-top: 4vh;
    color: #FFFFFF;
    border-radius: 8px;
}
</style>