import { Animal } from "./animal";

export class Cheval extends Animal {
    public id : number = 0;
    public vitesse_max: number = 8;
    public robe: string = "";
    public performance:number = 0;
    public flipette:number = 0;
    private _statuspos: string = "run";
    private _runningpos: number = 0;
    
    private getStepHorse(): number {
        return Math.floor(Math.random() * (7)) + 1;
    }

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

    public initPos(): number {
        this._runningpos = 0;
        return this._runningpos;
    }

    public getPos(): number {
        return this._runningpos;
    }

    public get_statuspos(): string {
        return this._statuspos;
    }

    public set_statuspos(position:string) {
        this._statuspos = position;
    }
    public finishLine(line:number): boolean {
        if (this._runningpos >= line){
            return true;
        }
        else{
            return false
        }
    }
}