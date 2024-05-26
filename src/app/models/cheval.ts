import { Animal } from "./animal";

// La classe Cheval étend la classe Animal
export class Cheval extends Animal {
    public id : number = 0; // Identifiant du cheval
    public vitesse_max: number = 8; // Vitesse maximale du cheval
    public robe: string = ""; // Couleur de la robe du cheval
    public performance:number = 0; // Performance du cheval
    public flipette:number = 0; // Peur du cheval
    private _statuspos: string = "run"; // Status du cheval
    private _runningpos: number = 0; // Position du cheval
    
    /**
     * Génère un pas aléatoire pour le cheval
     * @returns 
     */
    private getStepHorse(): number {
        return Math.floor(Math.random() * (7)) + 1;
    }

/**
 * Fait courir le cheval
 * @param proximity 
 * @param line 
 * @returns 
 */
    public runHorse(proximity: boolean, line: number): number {
        let flip = 0;
        let randomStep = this.getStepHorse();
        let perf= Math.round(randomStep * (this.performance/100));
        if (proximity){
            flip = Math.round(randomStep * (this.flipette/100));
        }
        let step= randomStep + perf - flip;
        this._runningpos += step;
        this._runningpos = Math.min(this._runningpos, line);
        return this._runningpos;
    }

/**
 * Réinitialise la position du cheval
 * @returns 
 */
    public initPos(): number {
        this._runningpos = 0;
        return this._runningpos;
    }

/**
 * Renvoie la position actuelle du cheval
 * @returns 
 */
    public getPos(): number {
        return this._runningpos;
    }

/**
 * Renvoie le status du cheval
 * @returns 
 */
    public get_statuspos(): string {
        return this._statuspos;
    }

/**
 * Définit le status du cheval
 * @param position 
 */
    public set_statuspos(position:string) {
        this._statuspos = position;
    }

/**
 * Vérifie si le cheval a franchi la ligne d'arrivée
 * @param line 
 * @returns 
 */
    public finishLine(line:number): boolean {
        if (this._runningpos >= line){
            return true;
        }
        else{
            return false
        }
    }
}