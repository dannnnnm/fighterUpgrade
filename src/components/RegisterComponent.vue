<template>
    <div>
      <h2>Registrar Usuario</h2>
      <form @submit.prevent="register">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password" required>
        </div>
        <div>
          <label for="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" v-model="confirmPassword" required>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      register() {
        // Lógica para el registro
        if (this.password !== this.confirmPassword) {
          alert('Las contraseñas no coinciden');
          return;
        }
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      }
    }
  };
  </script>
  