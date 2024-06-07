<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
                        <RouterLink class="router-link" to="/about">Jugar</RouterLink>
                    </li>
                    <li>
                        <div class="linea"></div>
                    </li>
                    <li class="nav-item hover:opacity-75">  <!-- cambiar el router a ranking-->
                        <RouterLink class="router-link" to="/about">Ranking</RouterLink>
                    </li>
                </ul>
            </nav>
            <v-btn class="nav-item" >
                <RouterLink class="router-link" to="/about">Login</RouterLink>
            </v-btn>

        </div>
    </div>
</template>

<style scoped>

.linea{
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