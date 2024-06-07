export const IMAGESLOCATION="/images/chars"
export const SELECTED_CHARS_KEY="matchCharacters"
export const RECORDS_KEY="records"
export const PLAYER_1_NAME="player1Name"

export const CHARACTERS={
    p1:[
        {
            name:"m4a1",
            anims:["idle.png","die.png"],
            player:"p1",
            scale: 0.4,
        },
        {
            name:"cyclops",
            anims:["idle.png","die.png"],
            player:"p1",
            scale:0.4
        },
        {
            name:"mina",
            anims:["idle.gif"],
            player:"p1",
            scale:0.3
        },

    ],
    p2:[
        {
            name:"kalisa",
            anims:["idle.gif"],
            player:"p2",
            scale:0.2
        },
        {
            name:"kyubey",
            anims:["idle.gif"],
            player:"p2",
            scale:0.1,
        },
        {
            name:"m16a1",
            anims:["idle.png","die.png"],
            player:"p2",
            scale: 0.4,
        }
        
    ]
}

export function getPlayer1Name():string{
    let recoveredName=sessionStorage.getItem(PLAYER_1_NAME)
    if (recoveredName==null){
        console.log("player 1 name was null")
        return "No name";
    }
    else{
        return recoveredName
    }
}

export function SetPlayer1Name(name:string){
    sessionStorage.setItem(PLAYER_1_NAME,name);
}