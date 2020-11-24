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
            return `Bienvenido a la página de Administración`;
        }
    }  
}
</script>

<style scoped>
    
</style>