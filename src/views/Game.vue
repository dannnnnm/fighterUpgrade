<script setup lang="ts">
import { RECORDS_KEY, SELECTED_CHARS_KEY, getPlayer1Name } from '@/data/consts';




</script>

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
    <template v-for="anim in p1anims" :key="p1anims.length">
        <img :src="anim" alt="" hidden="true">
    </template>
    <template v-for="anim in p2anims" :key="p2anims.length">
        <img :src="anim" alt="" hidden="true" rel="preload">
    </template>
    

    <v-container fluid>


        <v-row class="d-flex justify-center align-center">
            <h1 class="font-weight-bold mb-5">this game 2.0</h1>
        </v-row>
        <v-row >
            <v-col cols="12" :sm="4" :key="gametick">
                <v-row class="d-flex justify-center align-center">
                    <h2 class="font-weight-bold">{{ p1Name }}</h2>
                </v-row>
                <v-row class="d-flex justify-center align-center">
                    <span >HP: {{p1Health.currentHealth}}/{{p1Health.maxHealth}} || Mana: {{p1Mana.currentMana}}/{{ p1Mana.maxMana }} || Combo: {{ p1Melee.combo }}</span>
                </v-row>
                <v-row class="pt-5">
                    <v-progress-linear color="yellow" :height="10" v-model="p1Mana.currentMana" :max="p1Mana.maxMana"></v-progress-linear>
                </v-row>

                <v-row class="pt-5" >
                    <v-progress-linear color="green" :height="10" :model-value="p1Health.currentHealth" :max="p1Health.maxHealth" ></v-progress-linear>
                </v-row>

                <v-row class="d-flex justify-center align-center pt-3">
                    <p><strong>Arrowkeys</strong> to move, <strong>}</strong> to melee attack, <strong>{</strong>
                        to
                        throw projectile</p>
                </v-row>

            </v-col>

            <v-col cols="12" :sm="4">
                <v-row class="d-flex justify-center align-center pb-2">
                    <v-btn color="red" @click="resetGame">
                        RESET
                    </v-btn>


                </v-row>
                <v-row class="d-flex justify-center align-center pb-2">
                    <v-btn color="orange" @click="goToCharSelection()">
                        Characters
                    </v-btn>
                </v-row>
                <v-row class="d-flex justify-center align-center pb-2">
                    <v-btn color="orange" @click="toggleMusic()">
                        Toggle music
                    </v-btn>
                </v-row>
                <v-row class="d-flex justify-center align-center pb-2">
                    
                    <v-btn color="blue" @click="playMusic('Batallapkmn.mp3')" class="mr-5">Rel</v-btn>
                    <v-btn color="blue" @click="playMusic(defaultMusic)" class="mr-5">Default</v-btn>
                    <v-btn color="blue" @click="playMusic('princess.m4a')" class="">EDM</v-btn>
                </v-row>
            </v-col>

            <v-col cols="12" :sm="4" :key="gametick+1">
                <v-row class="d-flex justify-center align-center">
                    <h2 class="font-weight-bold">Player 2 </h2>
                </v-row>
                <v-row class="d-flex justify-center align-center">
                    <span >HP: {{p2Health.currentHealth}}/{{p2Health.maxHealth}} || Mana: {{p2Mana.currentMana}}/{{ p2Mana.maxMana }} || Combo: {{ p2Melee.combo }}</span>
                </v-row>
                <v-row class="pt-5">
                    <v-progress-linear color="yellow" :height="10" v-model="p2Mana.currentMana" :max="p2Mana.maxMana"></v-progress-linear>
                </v-row>

                <v-row class="pt-5" >
                    <v-progress-linear color="green" :height="10" :model-value="p2Health.currentHealth" :max="p2Health.maxHealth" ></v-progress-linear>
                </v-row>

                <v-row class="d-flex justify-center align-center pt-3">
                    <p><strong>WASD</strong> to move, <strong>G</strong> to melee attack, <strong>H</strong>
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



    <component :is="'script'" src="/js/script.js " type="module" ref="gameScript">
        
    </component>
</template>

<script lang="ts">

const player1id="player1:1"
const player2id="player2:2"
const defaultMusic="boombox5.m4a"

    export default {
        data(){
            return{
                
                p1Health: 0 as any,
                p1Mana: 0 as any,
                p1Melee: 0 as any,
                p1Position:0 as any,
                p1Name: "",
                
                p1anims:[] as any[],

                p2Health: 0 as any,
                p2Mana: 0 as any,
                p2Melee: 0 as any,
                p2Position: 0 as any,
                p2anims:[] as any[],

                musicPlayer: new Audio(`/audio/${defaultMusic}`),
                gametick: 0,

                matchOver:false,
                timeoutId: 0 as any,
            }
        },
        mounted() {
            this.musicPlayer.loop=true
            let matchCharactersRaw=sessionStorage.getItem(SELECTED_CHARS_KEY)!;
            
            console.log("Got ",matchCharactersRaw)
            let matchCharacters=JSON.parse(matchCharactersRaw!);

            this.p1anims=matchCharacters.p1.anims;
            this.p2anims=matchCharacters.p2.anims;

            this.p1Name=getPlayer1Name();
            
            this.preloadImages();
            (this.$refs.gameScript as any).onload=()=>{
                console.log("script listo")
                window.startGame(matchCharacters.p1,matchCharacters.p2);
                this.setupGame()

                //this.renderPlayer(player1id,"/images/chars/cyclops/idle.png")
                
                this.timeoutId=setInterval(async ()=>{
                    this.gametick+=1;

                    if (!this.matchOver) {
                        console.log("not over yet")

                        if (this.p2Health.currentHealth < 1) {
                            this.matchOver = true;
                            this.createRecord(this.p1Name,this.p1Melee.combo,this.p1Health.currentHealth,this.p1Health.maxHealth)
                        }
                        if (this.p1Health.currentHealth < 1) {
                            this.matchOver = true;
                            this.createRecord("Invitado",this.p2Melee.combo,this.p2Health.currentHealth,this.p2Health.maxHealth)
                        }
                    }
                    else {
                        console.log("over")
                    }

                    
                    

                },19)
            }
            
            
        },
        methods:{
            getPlayer1Health():number{
                let p1Health=this.p1Health
                console.log("brecv ",p1Health)
                if (p1Health){
                    console.log("recv ",p1Health.currentHealth)
                }
                return p1Health?p1Health.currentHealth:0
            },
            preloadImages(){
                this.p1anims.forEach(anim=>{
                    var img=new Image();
                    img.src=anim
                })
                this.p2anims.forEach(anim=>{
                    var img=new Image();
                    img.src=anim
                })
            },
            setupGame(){

                let player1Components=window.getPlayer1()
                this.p1Health=player1Components.filter((component:any)=>component.type=="HealthComponent")[0]
                this.p1Mana=player1Components.filter((component:any)=>component.type=="ManaComponent")[0]
                this.p1Melee=player1Components.filter((component:any)=>component.type=="MeleeComponent")[0]
                this.p1Position=player1Components.filter((component:any)=>component.type=="PositionComponent")[0]
                //console.log("p1 ",this.p1data.filter((component:any)=>component.type=="HealthComponent"))

                let player2Components=window.getPlayer2()
                this.p2Health=player2Components.filter((component:any)=>component.type=="HealthComponent")[0]
                this.p2Mana=player2Components.filter((component:any)=>component.type=="ManaComponent")[0]
                this.p2Melee=player2Components.filter((component:any)=>component.type=="MeleeComponent")[0]
                this.p2Position=player2Components.filter((component:any)=>component.type=="PositionComponent")[0]
            },
            createRecord(player:string,combo:string,currentHealth:number,maxHealth:number){
                let recordsRaw=localStorage.getItem(RECORDS_KEY);
                if (recordsRaw==null){
                    let records=[{winner:player,combo,date:Date.now(),currentHealth,maxHealth}]
                    localStorage.setItem(RECORDS_KEY,JSON.stringify(records))
                }
                else{
                    let records=JSON.parse(recordsRaw);
                    records.push({winner:player,combo,date:Date.now(),currentHealth,maxHealth})
                    localStorage.setItem(RECORDS_KEY,JSON.stringify(records))
                }
                
            },
            resetGame(){
                let matchCharacters=this.getMatchCharacters()
                window.stopGame();
                window.startGame(matchCharacters.p1, matchCharacters.p2);
                this.setupGame()
                this.matchOver=false
            },
            getMatchCharacters(){
                let matchCharactersRaw = sessionStorage.getItem(SELECTED_CHARS_KEY)!;
                console.log("Got ", matchCharactersRaw)
                let matchCharacters=JSON.parse(matchCharactersRaw!);
                return matchCharacters
            },
            playMusic(name:string){
                this.musicPlayer.pause();
                this.musicPlayer=new Audio(`/audio/${name}`);
                this.musicPlayer.loop=true
                this.musicPlayer.play()
            },
            toggleMusic(){
                if (this.musicPlayer.paused){
                    this.musicPlayer.play()
                }
                else{
                    this.musicPlayer.pause()
                }
            },
            goToCharSelection(){
                window.stopGame()
                clearTimeout(this.timeoutId)
                this.musicPlayer.pause()
                
                this.$router.push('/characterSelection')
                
                
                
            }
            
                
        },
        
    }
</script>


<style scoped>
.arena{
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

.v-progress-linear__bar, .v-progress-linear__bar__determinate {
  transition: none;
}

.playerImg{
    z-index: 1;
}
</style>