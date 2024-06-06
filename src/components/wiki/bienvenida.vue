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
    <div class="justify-center principal pt-6">
        <div class="mx-24 rounded-md bg-blue-900 p-1 p">
            <ul >
                <li>
                    <p class="text-2xl">- Jugador 1</p>
                    
                </li>
                <li>
                    <p class="text-2xl">- Jugador 2</p>
                </li>
            </ul>
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