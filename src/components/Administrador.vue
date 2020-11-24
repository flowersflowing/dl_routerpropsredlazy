<template>
    <header>
        <h1 v-text="titulo"></h1>
    </header>
</template>

<script>
export default {
    props: ["administrador"],
    computed: {
        titulo() {
            // return `Bienvenido a la página de Administración`;
            if(this.$route.params.admin == 'simple') {
                return 'Bienvenido a la página de Administrador'
            } 
            else if(this.$route.params.admin == 'avanzado') {
                return 'Esta página está en construcción. Intente como administrador simple'
            }
            else {
                return 'La página que busca no existe. Intente como administrador simple'
            }
        }
    }  
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-top: 200px;
}    
</style>