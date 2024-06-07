<template>
    <v-container fluid class="page text-white">

        <v-row justify="center" align="center" class="mb-10">
            <h1 class="font-weight-bold">Selección de personaje</h1>
        </v-row>
        <v-row>
            <v-col cols="12" :sm="6">
                <v-row justify="center" align="center">
                    <h2>Jugador 1</h2>
                </v-row>

                <v-row class="pa-5 mx-20">
                    <v-carousel v-model="player1Index" height="250" widt="auto" show-arrows="hover">
                        <v-carousel-item v-for="(char, i) in player1Chars" :key="i" :value="i"
                            color="rgba(0,200,255,1)">
                            <v-img :src="getCharacterMainAnim(char)">

                            </v-img>

                        </v-carousel-item>
                    </v-carousel>
                </v-row>

                <v-row align="center" justify="center">
                    <h2 class="text-capitalize font-weight-bold">{{ player1Chars[player1Index].name }}</h2>
                </v-row>


            </v-col>
            
            <v-col cols="12" :sm="6">
                <v-row justify="center" align="center">
                    <h2>Jugador 2</h2>
                </v-row>
                <v-row class="pa-5 mx-20">
                    <v-carousel v-model="player2Index" height="250" show-arrows="hover">
                        <v-carousel-item v-for="(char, i) in player2Chars" :key="i" :value="i"
                            color="rgba(0,200,255,1)">
                            <v-img :src="getCharacterMainAnim(char)" class="playerImg">

                            </v-img>

                        </v-carousel-item>
                    </v-carousel>
                </v-row>
                <v-row align="center" justify="center">
                    <h2 class="text-capitalize font-weight-bold">{{ player2Chars[player2Index].name }}</h2>
                </v-row>
            </v-col>
        </v-row>

        <v-row justify="center" align="center">
            <h1 class="font-weight-bold">MODS</h1>
        </v-row>
        <v-row>
            <v-select multiple label="Mods" v-model="picks" :items="mods" class="mx-20" bg-color="rgba(0,100,255,1)"></v-select>
        </v-row>


        <v-row justify="center" align="center" >
            <v-btn color="success" @click="startGame()" class="mt-5">
                Jugar
            </v-btn>

        </v-row>
    </v-container>
</template>


<script lang="ts">
import { CHARACTERS, IMAGESLOCATION, SELECTED_CHARS_KEY } from '@/data/consts';

export default {
    data(){
        return{
            player1Chars:CHARACTERS.p1,
            player2Chars:CHARACTERS.p2,
            player1Index:0,
            player2Index:0,
            mods:[
                "bouncingBetty",
                "risingTension",
                "fairGame"
            ],
            picks:[] as string[],
        }
    },
    methods:{
        getCharacterMainAnim(character:any):string{
            return `${IMAGESLOCATION}/${character.player}/${character.name}/${character.anims[0]}`
        },
        startGame(){
            let p1=this.setupPlayer(this.player1Chars[this.player1Index])
            let p2=this.setupPlayer(this.player2Chars[this.player2Index])
            let selectedChars={
                p1,
                p2
            }
            sessionStorage.setItem(SELECTED_CHARS_KEY,JSON.stringify(selectedChars))
            let query:any={
            }
            if (this.picks.includes("bouncingBetty")){
                query.bouncingBetty=true
            }
            if (this.picks.includes("bouncingBetty") && this.picks.includes("risingTension")){
                query.risingTension=true
            }
            if(this.picks.includes("fairGame")){
                query.fairGame=100
            }

            this.$router.push({path: "/game", query:query as any})
        },
        setupPlayer(character:any):any{
            let result=character;
            for (let index = 0; index < result.anims.length; index++) {
                let element = result.anims[index];
                result.anims[index]=`${IMAGESLOCATION}/${character.player}/${character.name}/${character.anims[index]}`
                
            }
            return result;
        }
    }
}
</script>

<style scoped>
.playerImg{
    z-index: 1;
}
.page{
    background-color: blue;
    height: 100vh;
}
</style>