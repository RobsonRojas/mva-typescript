import Pessoa = require('./Pessoa');

class Funcionario extends Pessoa {
    public salario: number;
    public codigoFuncionario: number;
    public endereco: string;
}

Object.seal(Funcionario);
export = Funcionario;