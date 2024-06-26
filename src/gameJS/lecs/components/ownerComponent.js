import { getRndInteger } from "../utils/utils.js";
import { BaseComponent } from "./baseComponent.js";

export class OwnerComponent extends BaseComponent{
    
    ownerId
    damage
    #enabled
    divertedBy
    bounces
    constructor(entityId,ownerId,damage=0){
        super(entityId)
        this.ownerId=ownerId
        this.damage=damage
        this.#enabled=true
        this.divertedBy=null
        this.bounces=0
    }


    get enabled(){
        return this.#enabled
    }

    disable(){
        this.#enabled=false
    }
    
}