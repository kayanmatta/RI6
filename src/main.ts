import * as readline from "readline";
import Soma from "./soma.js";
import Subtracao from "./subtracao.js";
import Multiplicacao from "./multiplicacao.js";
import Divisao from "./divisao.js";
import Potencia from "./potencia.js";
import Raiz from "./raiz.js";
import Baskhara from "./bhaskara.js";

function iniciar() {
    const leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    leitor.question(
        `Digite sua operação no formato:\n` +
        `numero1 numero2 operacao\n` +
        `para Bhaskara: numero1 numero2 numero3 baskhara\n\n`,
        (valor) => {

            const instrucoes = valor.split(" ");
            console.log(`Entrada recebida: ${instrucoes}\n`);

            const operacao = instrucoes[instrucoes.length - 1].toLowerCase();
            let resultado = "";

            switch (operacao) {
                case "soma":
                    resultado = new Soma().calcula(Number(instrucoes[0]), Number(instrucoes[1]));
                    break;

                case "subtracao":
                    resultado = new Subtracao().calcula(Number(instrucoes[0]), Number(instrucoes[1]));
                    break;

                case "multiplicacao":
                    resultado = new Multiplicacao().calcula(Number(instrucoes[0]), Number(instrucoes[1]));
                    break;

                case "divisao":
                    resultado = new Divisao().calcula(Number(instrucoes[0]), Number(instrucoes[1]));
                    break;

                case "potencia":
                    resultado = new Potencia().calcula(Number(instrucoes[0]), Number(instrucoes[1]));
                    break;

                case "raiz":
                    resultado = new Raiz().calcula(Number(instrucoes[0]), Number(instrucoes[1]));
                    break;

                case "baskhara":
                    resultado = new Baskhara().calcula(
                        Number(instrucoes[0]),
                        Number(instrucoes[1]),
                        Number(instrucoes[2])
                    );
                    break;

                default:
                    resultado = "Operação inválida!";
            }

            console.log(`Resultado: ${resultado}\n`);
            leitor.close();
        }
    );
}

iniciar();