

<template>
    <v-container fluid>
        <v-row justify="center" align="center">
            <h1>Historial de partidas</h1>
        </v-row>

        <v-row v-if="records.length<1" align="center" justify="center">
            <h1 class="font-weight-bold">No hay partidas registradas</h1>
        </v-row>
        <v-row v-else v-for="(record,index) in records">
            <v-card>
                <v-card-title>
                    Combate el {{ getDateAsText(record.date) }}
                </v-card-title>
                <v-card-subtitle>
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
export default{
    data(){
        return{
            records: [] as any[]
        }
    },
    mounted(){
        let retrievedRecords=localStorage.getItem(RECORDS_KEY);
        if (retrievedRecords!=null){
            records=JSON.parse(retrievedRecords)
        }
    },
    methods:{
        getDateAsText(date:any){
            return new Date(date)
        }
    }
}
</script>