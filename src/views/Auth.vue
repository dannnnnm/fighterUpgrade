<template>
    <navbar />
    <div class="auth">
        <div class="flex gap-7">
            <button @click="showLogin = true">Iniciar Sesión</button>
            <button @click="showLogin = false">Registrar</button>
        </div>
        <div v-if="showLogin">
            <LoginComponent />
        </div>
        <div v-else>
            <RegisterComponent />
        </div>
    </div>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import navbar from '../components/wiki/navbar.vue';

export default {
    components: {
        LoginComponent,
        RegisterComponent,
        navbar
    },
    data() {
        return {
            showLogin: true
        };
    }
};
</script>

<style scoped>
.auth {
    color: white;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
</style>