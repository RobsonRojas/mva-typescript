import Pessoa = require('./Pessoa');

/**
 *  Cliente 
 */
class  Cliente extends Pessoa {
    public codigoCliente: number;

}

Object.seal(Cliente);
export = Cliente;