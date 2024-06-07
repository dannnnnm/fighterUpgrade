<template>
  <div class="flex items-center justify-center min-h-screen">
    <form @submit.prevent="register" class="p-6 bg-white rounded shadow-md w-full max-w-sm">
      <div>
        <label for="username">Nombre de Usuario:</label>
        <input type="text" v-model="username" required class="w-full mt-2 mb-4 px-3 py-2 border rounded">
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" required class="w-full mt-2 mb-4 px-3 py-2 border rounded">
      </div>
      <div>
        <label for="confirmPassword">Confirmar Contraseña:</label>
        <input type="password" v-model="confirmPassword" required class="w-full mt-2 mb-4 px-3 py-2 border rounded">
      </div>
      <button class="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../stores/user';

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      const userStore = useUserStore();
      userStore.register(this.username, this.password);

      if (userStore.currentUser) {
        console.log('Usuario registrado con éxito:', userStore.currentUser);
      }
    }
  }
};
</script>
  