<template>
    <div class="contenedor-wiki ">
        <div class=" p-1 bg-blue-900 mr-48 rounded-md pl-2 ">
            <p class="text-2xl">- Combos</p>
            <span>El juego presenta un sistema de combos, al acertar un golpe, se genera un acumulador,
                a mayor el combo, mayor será el daño, si se falla un ataque, se pierde el combo volviendo a cero.
            </span>
            <p class="text-2xl"> -mana</p>
            <span>Los ataques consumen mana, el mana se regenera en 5 puntos por segundo, si se agota el mana, 
                el jugador no podrá atacar. el gasto por ataque es el siguiente:</span>
                <ul>
                    <li>
                        <br>
                        <p>- Ataque cuerpo a cuerpo: 10</p>
                    </li>
                    <li>
                        <p>- Lanzar proyectil: 15</p>
                    </li>
                </ul>
        </div>
        <div class="mods rounded-md mt-8 mb-8 pl-2 bg-blue-900 mr-48 pb-2">
            <p class="text-2xl pb-2">Mods:</p>
            <ul class="space-y-3">
                <li>bouncingBetty : Projectiles bounce off walls</li>
                <li>risingTension[=value] : Projectiles deal more damage with each bounce</li>
                <li>repelPhys : As a player nears death, there's a chance a projectile will bounce off of him</li>
                <li>meleeOnly : Exactly what it says on the tin</li>
                <li>staticBetty : Projectiles that move in only one direction will always remain that way</li>
                <li>doomMove : Diagonal movement is faster than single-direction movement</li>
                <li>fairGame : Players will always have the same amount of health</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .contenedor-wiki{
        width: 60rem;
    }

</style>