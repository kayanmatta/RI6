import Calc from "./calc";

export default class Raiz extends Calc {
    calcula(n1: number, n2: number): string {
        return `${Math.pow(n1, 1 / n2)}`;
    }
}