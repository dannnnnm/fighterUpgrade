

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
        

        <v-row>
            <h1>FIGHT!</h1>
        </v-row>
        <v-row>
            Player 1 (Reemplazar nombre) X/Y
            <v-progress-linear color="blue" :heigh="10" :model="p1Mana">
                
            </v-progress-linear>
            <p><strong>Arrowkeys</strong> to move, <strong>}</strong> to melee attack, <strong>{</strong>
                        to
                        throw projectile</p>
        </v-row>


    </v-container>

    <div class="container-fluid">
        <v-checkbox label="AAAAAAA"></v-checkbox>
        <div class="row text-center">
            <h2 class="text-center"><strong>Fight!</strong> <a href="mods.html">(mods)</a></h2>
            <div class="col-sm-5">

                <div class="row">
                    <h3><strong>Player 1</strong></h3>
                    <h4><span id="p1-health">0/x</span> || <span id="p1-combo">Combo: 0</span> || <span id="p1-mana">mana: 0</span>
                        <div class="progress col-sm-3 ">
                            
                            <div class="progress-bar bg-info" role="progressbar" id="heroMana" aria-valuenow="0"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </h4>
                    <p><strong>Arrowkeys</strong> to move, <strong>}</strong> to melee attack, <strong>{</strong>
                        to
                        throw projectile</p>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" id="heroHealth" aria-valuenow="0"
                        aria-valuemin="0" aria-valuemax="100" style="transition-duration:300ms;"></div>
                </div>
            </div>
            <div class="col-sm-2">
                <button class="btn btn-danger" type="button" id="resetButton">RESET</button>

                <div class="row pt-2">
                    <div class="col-sm-12" id="musicStatus">
                        <button class="btn btn-warning" type="button" id="stopMusic">Toggle music</button>
                        <p id="statusParagraph"></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <button class="btn btn-primary" type="button" id="defaultMusic">Default music</button>
                    </div>
                    <div class="col-sm-4">
                        <button class="btn btn-primary" type="button" id="reloadedMusic">Rel Music</button>
                    </div>
                    <div class="col-sm-4">
                        <button class="btn btn-primary" type="button" id="edmMusic">EDM music</button>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-5 h-50">

                <div class="row justify-content-end m-1">
                    <h4><strong>Player 2</strong></h4>
                    <h4><span id="p2-health">0/x</span> || <span id="p2-combo">Combo: 0</span> || <span id="p2-mana">mana: 0</span>
                    </h4>
                    <div class="progress col-sm-3 p-0">
                        
                        <div class="progress-bar bg-info" role="progressbar" id="enemyMana" aria-valuenow="0"
                            aria-valuemin="0" aria-valuemax="100" style="transition-duration:300ms;"></div>
                    </div>
                    <p><strong>WASD</strong> to move, <strong>G</strong> to melee attack, <strong>H</strong> to throw
                        projectile</p>
                </div>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" id="enemyHealth" aria-valuenow="0"
                        aria-valuemin="0" aria-valuemax="100"></div>>
                </div>
            </div>
        </div>
    </div>
    
    

    <div class="arena-container">
        <div class="arena" id="arenaZone">
            <img class="arena_img" src="../images/arena.png" alt="">
        </div>

    </div>
    <div class="text-center">
        <span>ECS structure inspired and based off of <a href="https://github.com/Kartones/ecs/tree/main">Kartones</a>
            example</span>
    </div>

    <!--<div class="arena" id="arenaZone">
        <img src="images/gat.png" alt="" height="80px" id="heroRepr" style="position: absolute; top: 1000px; left: 200px;">
        <img src="images/chopper.png" alt="" height="80px" id="enemyRepr" style="position: absolute; top: 1000px; left: 200px;">
    </div>-->


    <!--<script src="./js/script.js" type="module"></script>-->
    <component :is="'script'">
        console.log("AAAAAAAAAAAAAAAAAAA")
    </component>
</template>