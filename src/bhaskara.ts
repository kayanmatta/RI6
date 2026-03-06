import Calc from "./calc";

export default class Baskhara extends Calc {
    calcula(n1: number, n2: number, n3: number): string {
        const delta = (n2 ** 2) - 4 * n1 * n3;

        if (delta < 0) {
            return "As raízes não existem (delta negativo).";
        }

        const x1 = (-n2 + Math.sqrt(delta)) / (2 * n1);
        const x2 = (-n2 - Math.sqrt(delta)) / (2 * n1);

        return `${x1} e ${x2}`;
    }
}