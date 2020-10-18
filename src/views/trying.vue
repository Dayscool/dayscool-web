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
            <Curso v-for="curso in cursos" v-bind:cursr="curso" v-bind:key = "curso.id" />
        </div>
        <div class = "boton">
            Cursos Anteriores
        </div>
    </div>
</div>
</template>

<script>
import Curso from "@/components/cours.vue";
const axios = require('axios');
export default {
    name: "cursos",
    components: {
        Curso
    },
    data () {
        return {
            cursos: null
        }
    },
    mounted() {
        axios.post('https://be4dc335-d873-469a-b59a-3a5b4dc0d7d9.mock.pstmn.io', {
            query: `
                getCursoStudentById (12) {
                    id
                    nombre
                    profesor
                }
            `
        }).then(response => (this.cursos = response.data))
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