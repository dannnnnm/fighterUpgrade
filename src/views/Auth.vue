<template>
    <div>
      <div>
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
  
  export default {
    components: {
      LoginComponent,
      RegisterComponent
    },
    data() {
      return {
        showLogin: true
      };
    }
  };
  </script>
  