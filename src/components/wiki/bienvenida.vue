<script setup lang="ts">
import WikiContent from '../../components/wiki/WikiContent.vue';
</script>

<template>
    <div class="p-6 pl-32 pt-32 font-mono principal">
        <div>
            <p class="text-5xl mb-4"> Bienvenido a this.game 2.0 </p>
            <p class="text-xl"> (ahora con vue) </p>
        </div>

        <div class="about pt-32">
            <p class="text-2xl pb-2">About</p>
            <p>El juego consta de dos personajes que se mueven en una arena,
                gana el jugador que logre eliminar al otro personaje.
            </p>


        </div>
    </div>
    <div class="justify-between principal pt-64 flex pb-8">
        <div class="ml-32 w-64 rounded-md bg-blue-900 p-1 p">
            <ul>
                <li>
                    <p class="text-2xl">- Jugador 1</p>
                    <p class="pl-4 pt-2 pb-2">
                        <kbd class="text-lg">↑</kbd> - Mover arriba <br>
                        <kbd class="text-lg">↓</kbd> - Mover abajo <br>
                        <kbd class="text-lg">←</kbd> - Mover izquierda<br>
                        <kbd class="text-lg">→</kbd> - Mover derecha<br>
                        <kbd class="text-lg">}</kbd> - Ataque cuerpo a cuerpo <br>
                        <kbd class="text-lg">{</kbd> - Lanzar proyectil
                    </p>

                </li>
                <li>
                    <p class="text-2xl">- Jugador 2</p>
                    <p class="pl-4 pt-2 pb-2">
                        <kbd class="text-lg">w</kbd> - Mover arriba <br>
                        <kbd class="text-lg">a</kbd> - Mover abajo <br>
                        <kbd class="text-lg">s</kbd> - Mover izquierda<br>
                        <kbd class="text-lg">d</kbd> - Mover derecha<br>
                        <kbd class="text-lg">G</kbd> - Ataque cuerpo a cuerpo <br>
                        <kbd class="text-lg">H</kbd> - Lanzar proyectil
                    </p>
                </li>
            </ul>
        </div>
        <div>
            <WikiContent/>
        </div>
    </div>

</template>

<style scoped>
.principal {
    background-color: var(--background);
    color: white
}

.cont-htp {
    background-color: aqua;
}
</style>