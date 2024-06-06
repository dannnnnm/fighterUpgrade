import { BaseComponent } from "./baseComponent.js"
import { arenaElement } from "./constants.js"

const animStatus={
    AN_ATTACK:"attack",
    AN_DIE:"die",
    AN_IDLE:"idle",
    AN_SPECIAL:"special",
    AN_MOVE:"move",
}

export class RenderComponent extends BaseComponent {
    spritePath = []
    status
    prevStatus
    initialPosition
    scale
    #htmlComponent

    playedDeathAnim

    constructor(entityId, spriteList, initialPosition, scale = 1.0) {
        super(entityId)

        this.playedDeathAnim=false

        this.status=animStatus.AN_IDLE
        this.prevStatus=animStatus.AN_IDLE
        this.spritePath=spriteList
        this.scale = scale
        this.initialPosition = initialPosition
        this.#htmlComponent = document.createElement("img")
        this.#htmlComponent.onload=()=>{
            
        }
        this.#htmlComponent.id = entityId;
        this.#htmlComponent.src = this.spritePath[0]
        this.#htmlComponent.className="playerImg"
        console.log("Sprites ",spriteList, "using ", this.spritePath[0])
        this.#htmlComponent.height = this.#htmlComponent.height * scale
        this.#htmlComponent.width = this.#htmlComponent.width * scale
        

        let preexistingElement = document.getElementById(entityId)
        if (preexistingElement != null) {
            this.#htmlComponent = preexistingElement
            this.#htmlComponent.style.filter = null
        }
        else {
            arenaElement.appendChild(this.#htmlComponent)
        }


        this.#htmlComponent.style.position = "absolute";
        this.#htmlComponent.style.top = initialPosition.y + "px"
        this.#htmlComponent.style.left = initialPosition.x + "px"
        this.#htmlComponent.style.visibility = "visible";
    }

    htmlElement() {
        return this.#htmlComponent
    }

    invisible() {
        this.#htmlComponent.style.visibility = "hidden";
    }

    blur() {
        this.#htmlComponent.style.filter = "sepia(100%)"
    }

    death(){
        this.playedDeathAnim=true
        if (this.spritePath.length<2){
            this.#htmlComponent.src="/images/deathdefault.gif"
        }
        else{
            this.#htmlComponent.src=this.spritePath[1]
        }
    }

    
}

export const SPRITES_STATES = {
        
}