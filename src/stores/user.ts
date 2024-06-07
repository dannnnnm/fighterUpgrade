import {ref, computed} from 'vue';
import {defineStore} from 'pinia';

interface User {
    id: number;
    username: string;
    password: string;
}

const useUserStore = defineStore('user', {
    state: () => ({
        currentUser: null as User | null,
    }),
    getters: {
        isLoggedIn: (state) => computed(() => state.currentUser !== null),
    },
    actions: {
        login(username: string, password: string) {
            // Perform login logic here
            // Example: make an API call to authenticate the user
            // and set the currentUser state if successful
        },
        register(username: string, password: string) {
            // Perform register logic here
            // Example: make an API call to create a new user
            // and set the currentUser state if successful
        },
        logout() {
            // Perform logout logic here
            // Example: clear the currentUser state
        },
    },
});

export default useUserStore;