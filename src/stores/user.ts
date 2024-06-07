import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { SetPlayer1Name } from '@/data/consts';

interface User {
  username: string;
  password: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null,
  }),
  getters: {
    isLoggedIn: (state) => computed(() => state.currentUser !== null),
  },
  actions: {
    login(username: string, password: string) {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      const storedUser = users[username];
      if (storedUser && storedUser.password === password) {
        this.currentUser = { username, password };
        SetPlayer1Name(username);
      } else {
        console.error('Invalid username or password');
      }
    },
    register(username: string, password: string) {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      if (users[username]) {
        console.error('Username already exists');
        return;
      }

      const user: User = { username, password };
      users[username] = user;
      localStorage.setItem('users', JSON.stringify(users));
      this.currentUser = user;
    },
    logout() {
      this.currentUser = null;
      SetPlayer1Name("No name");
      // Optionally, remove currentUser from localStorage
      // localStorage.removeItem('currentUser');
    },
  },
});
