

<template>
    <audio src="audio/freedoom.m4a"></audio>
    <audio src="audio/princess.m4a"></audio>
    <audio src="audio/whoosh.m4a"></audio>
    <audio src="audio/bonk.m4a"></audio>
    <audio src="audio/bounce.wav"></audio>
    <audio src="audio/projhit.wav"></audio>
    <audio src="audio/projthrow.wav"></audio>
    <img src="/images/chopper.png" alt="" hidden="true">
    <img src="/images/gat.png" alt="" hidden="true">
    <img src="/images/kinball.png" alt="" hidden="true">

    <v-container fluid>


        <v-row class="d-flex justify-center align-center">
            <h1>FIGHT!</h1>
        </v-row>
        <v-row>
            <v-col cols="12" :sm="4">
                <v-row class="d-flex justify-center align-center">
                    <h2>Player 1 (Nombre)</h2>
                </v-row>
                <v-row class="d-flex justify-center align-center">
                    X/Y || Mana: MAna/100 || Combo: 0
                </v-row>
                <v-row class="pt-5">
                    <v-progress-linear color="yellow" :height="10" :model="p1Mana"></v-progress-linear>
                </v-row>

                <v-row class="pt-5">
                    <v-progress-linear color="green" :height="10" :model="p1Health"></v-progress-linear>
                </v-row>

                <v-row class="d-flex justify-center align-center pt-3">
                    <p><strong>Arrowkeys</strong> to move, <strong>}</strong> to melee attack, <strong>{</strong>
                        to
                        throw projectile</p>
                </v-row>

            </v-col>

            <v-col cols="12" :sm="4">
                <v-row class="d-flex justify-center align-center pb-2">
                    <v-btn color="red">
                        RESET
                    </v-btn>


                </v-row>
                <v-row class="d-flex justify-center align-center pb-2">
                    <v-btn color="orange">
                        Toggle music
                    </v-btn>
                </v-row>
                <v-row class="d-flex justify-center align-center pb-2">
                    <v-btn color="blue">Default</v-btn>
                    <v-btn color="blue">Rel</v-btn>
                    <v-btn color="blue">EDM</v-btn>
                </v-row>
            </v-col>

            <v-col cols="12" :sm="4">
                <v-row class="d-flex justify-center align-center">
                    <h2>Player 2</h2>
                </v-row>
                <v-row class="d-flex justify-center align-center">
                    X/Y || Mana: MAna/100 || Combo: 0
                </v-row>
                <v-row class="pt-5">
                    <v-progress-linear color="yellow" :height="10" :model="p2Mana"></v-progress-linear>
                </v-row>

                <v-row class="pt-5">
                    <v-progress-linear color="green" :height="10" :model="p2Health"></v-progress-linear>
                </v-row>

                <v-row class="d-flex justify-center align-center pt-3">
                    <p><strong>Arrowkeys</strong> to move, <strong>}</strong> to melee attack, <strong>{</strong>
                        to
                        throw projectile</p>
                </v-row>

            </v-col>






        </v-row>

        <v-row class="d-flex justify-center align-center">
            <div class="arena-container">
                <div class="arena" id="arenaZone">
                    <img class="arena_img" src="/images/arena.png" alt="">
                </div>

            </div>
        </v-row>


    </v-container>



    <component :is="'script'">
        //agregar src a este tag
        console.log("AAAAAAAAAAAAAAAAAAA")
    </component>
</template>


<style scoped>
..arena{
    width: 50vw; 
    min-width: 50vw;
    max-width: 50vw;
    border:3px solid red;
    margin: 2px;
    height:62vh;
    min-height: 62vh;
    max-height: 62vh;
    
}

.arena_img{
    padding-left: 5px;
    width: 49vw; 
    min-width: 49vw;
    max-width: 50vw;
    margin: 2px;
    height:61vh;
    min-height: 61vh;
    max-height: 62vh;
}

.arena-container{
    display: flex;
  justify-content: center;
  align-items: center;
}
</style>