import Calc from "./calc";

export default class Divisao extends Calc {
    calcula(n1: number, n2: number): string {
        if (n2 === 0) return "Erro: divisão por zero!";
        return `${n1 / n2}`;
    }
}