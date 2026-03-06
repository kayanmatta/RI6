import Calc from "./calc";

export default class Subtracao extends Calc {
    calcula(n1: number, n2: number): string {
        return `${n1 - n2}`;
    }
}