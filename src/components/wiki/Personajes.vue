<template>
    <div class="px-32 p-5 tablo">
        <table class="bg-blue-900 ">
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripción</th>
            </tr>
            <tr v-for="personaje in personajes" :key="personaje.nombre">
                <td><img :src="personaje.imagen" alt="Imagen de personaje" width="100" height="100"></td>
                <td>{{ personaje.nombre }}</td>
                <td>{{ personaje.descripcion }}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            personajes: [
                {
                    imagen: "../../../public/images/chars/p2/kyubey/idle.gif",
                    nombre: "Kyubey",
                    descripcion: "Una amigable criatura aparecida desde un programa apto para toda la familia: Es realmente el alma de la fiesta cuando toca repartir felicidad. Para algunas personas tiene la mala fama de ser una serie de descalificativos que son mejor dejados a la imaginación, pero tales inventos solo se le pueden ocurrir a las mentes más malintencionadas. (Viene de Madoka Magica, su sola presencia es una desgracia para muchos. Está forzado a pelear por el acuerdo de ORO, de lo contrario habría desaparecido hace mucho)"
                },
                {
                    imagen: "../../../public/images/chars/p2/kalisa/idle.gif",
                    nombre: "Kalisa",
                    descripcion: "\"Monita anime que lleva arma excesivamente grande\" no es un concepto nuevo. Hasta hace pocas semanas estaba en escala de grises, ahora a color. Por alguna razón sigue colaborando con los Gatos. No hay mucho más que contar. Solo puedo dejar la estrategia de la wiki: Kalisa is an excellent anti-Angel attacker who acts as a very aggressive frontline heavy hitter and suicide bomber. Alone, Kalisa can take down weaker Angel enemies like Angelic Gory and Heavenly Hippoe in merely one or two hits. If timed perfectly with the Thunderbolt Cannon, Kalisa can rush in and deal a single attack's worth of damage to any Angel within her range."
                },
                {
                    imagen: "../../../public/images/chars/p2/m16a1/idle.png",
                    nombre: "M16a1",
                    descripcion: "Monita anime que lleva arma, pero no es excesivamente grande y es un rifle de asalto. Hasta hace unas semanas estaba peleando contra las oleadas de autómatas de Sangvis, hasta que luego de una experiencia cercana a la muerte se despertó en el calabozo del coliseo. Lleva un parche en el ojo como cierto personaje de un famoso juego-película-conspiranoia."
                },
                {
                    imagen: "../../../public/images/chars/p1/cyclops/idle.png",
                    nombre: "Cyclops",
                    descripcion: "\"Es\", y eso es suficiente comparado al promedio de participantes en la arena: fue de los primeros invocados y a día de hoy sigue en pie. No es como que le sea un gran desafío, pues está programado para destruir a lo que sea que se le opone, su armadura es de alta calidad, y sus ataques son precisos y certeros. Aparentemente su inteligencia artificial se ejecuta de forma totalmente local, y su único ojo le permite visión en tres dimensiones."
                },
                {
                    imagen: "../../../public/images/chars/p1/m4a1/idle.png",
                    nombre: "M4a1",
                    descripcion: "Monita anime con un rifle de asalto: en algún punto amiga de M16a1, el destino las convocó para participar en equipos diferentes. Quién de las dos ha sufrido más (en su universo) es una pregunta compleja, pero lograron sobrevivir. Fue enviada para rescatar a M16a1, y debió quedarse a participar."
                },
                {
                    imagen: "../../../public/images/chars/p1/mina/idle.gif",
                    nombre: "Mina",
                    descripcion: "También conocida como \"Red Riding Mina\". \"Monita anime inspirada en personaje de cuentos de hadas, pero es una interpretación maligna\" es lo que se llama innovar, romper esquemas y subvertir expectativas. En su universo se enfrentó y luego ayudó a los Gatos utilizando un lanzacohetes, que aún está en reparación. Si su apariencia amigable logra engañarte, ten en cuenta que hasta los guardias del coliseo le tienen miedo. ¡Y ellos son robots de guerra interdimensional!"
                }
            ],   
        }
        
    },
};
</script>

<style scoped>
.tablo{
    background-color: var(--background);
}
table {
    color: white;
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    text-align: left;
}
</style>