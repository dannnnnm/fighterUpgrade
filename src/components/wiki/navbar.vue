<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { getPlayer1Name } from '../../data/consts.ts';

let isLoggedIn = ref(false);

onMounted(() => {
    isLoggedIn.value = getPlayer1Name() !== false;
});

</script>

<template>
    <div class="p-5">
        <div class="flex justify-between align-center px-2">
            <nav>
                <ul class="links gap-6">
                    <li class="nav-item hover:opacity-75">
                        <RouterLink class="router-link" to="/wiki">Wiki</RouterLink>
                    </li>
                    <li>
                        <div class="linea"></div>
                    </li>
                    <li class="nav-item hover:opacity-75">
                        <RouterLink class="router-link" to="/characterSelection">Jugar</RouterLink>
                    </li>
                    <li>
                        <div class="linea"></div>
                    </li>
                    <li class="nav-item hover:opacity-75"> <!-- cambiar el router a ranking-->
                        <RouterLink class="router-link" to="/records">Ranking</RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="flex gap-3 items-center">
                <p>
                    {{ getPlayer1Name() }}
                </p>
                <v-btn class="nav-item" v-if="isLoggedIn" @click="logout">
                    Logout
                </v-btn>
                <v-btn class="nav-item">
                    <RouterLink class="router-link" to="/auth">Login</RouterLink>
                </v-btn>
            </div>

        </div>
    </div>
</template>

<style scoped>
.linea {
    border-left: 1px solid white;
    height: 30px;
    width: 0;
    opacity: 0.7;
}

* {
    background-color: var(--background-light);
    color: white
}

.router-link {
    text-decoration: none;
}

li {
    list-style: none;
}

.links {
    display: flex;
}
</style>