<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="p-6">
        <div class="flex justify-between align-center px-2">
            <nav>
                <ul class="links">
                    <li class="nav-item">
                        <RouterLink class="router-link" to="/wiki">Wiki</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="router-link" to="/wiki/about">Jugar</RouterLink>
                    </li>
                </ul>
            </nav>
            <p>Login</p>
            
        </div>
    </div>
</template>

<style scoped>
* {
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
    gap: 1rem;
}
</style>