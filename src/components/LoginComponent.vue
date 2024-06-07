<template>
    <div class="flex items-center justify-center min-h-screen">
        <form @submit.prevent="login" class="p-6 bg-white rounded shadow-md w-full max-w-sm">
            <div>
                <label for="username">Nombre de Usuario:</label>
                <input type="text" v-model="username" required class="w-full mt-2 mb-4 px-3 py-2 border rounded">
            </div>
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" v-model="password" required class="w-full mt-2 mb-4 px-3 py-2 border rounded">
            </div>
            <button class="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                type="submit">Entrar</button>
        </form>
    </div>
</template>

<script>
import { useUserStore } from '../stores/user'; // Importa el store

export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            const userStore = useUserStore();
            userStore.login(this.username, this.password);

            if (userStore.currentUser) {
                console.log('Inicio de sesión exitoso:', userStore.currentUser);
                this.$router.push('/wiki');
            } else {
                alert('Nombre de usuario o contraseña incorrectos');
            }
        }
    }
};
</script>

<style scoped>
/* Agrega cualquier estilo adicional aquí */
</style>