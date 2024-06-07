<script setup lang="ts">
    import Navbar from '@/components/wiki/navbar.vue';
</script>

<template>
    <div>
        <Navbar />
    </div>
    <v-container class="text-white page" fluid :class="{fillIfEmpty:records.length<1}">
        <v-row justify="center" align="center">
            <h1 class="text-h3 font-weight-bold mb-5 mt-5">Historial de partidas</h1>
        </v-row>

        <v-row v-if="records.length<1" align="center" justify="center" >
            <h1 class="font-weight-bold">No hay partidas registradas</h1>
        </v-row>
        <v-row v-else v-for="(record,index) in records" justify="center" align="center" class="mb-5 mx-10">
            <v-card color="rgba(0,200,255,1)">
                <v-card-title>
                    Combate el {{ getDateAsText(record.date) }}
                </v-card-title>
                <v-card-subtitle class="text-black" align="center" justify="center">
                    Ganador: {{ record.winner }}
                </v-card-subtitle>
                <v-card-text>
                    <span>
                        Tras un arduo combate, {{ record.winner }} logró derrotar a su oponente con {{ record.combo }} puntos de combo y {{ record.currentHealth }} de {{ record.maxHealth }} puntos de vida
                    </span>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>


<script lang="ts">
import { RECORDS_KEY } from '@/data/consts';

export default{
    data(){
        return{
            records: [] as any[]
        }
    },
    mounted(){
        let retrievedRecords=localStorage.getItem(RECORDS_KEY);
        if (retrievedRecords!=null){
            this.records=JSON.parse(retrievedRecords)
            console.log("received ",this.records)
        }
    },
    methods:{
        getDateAsText(date:any){
            return new Date(date)
        },
        getAmountOfRows():number{
            
        }
    }
}
</script>

<style scoped>
.page{
    background-color: blue;

}
.fill-if-empty{
    height: 100vh;
}
</style>