import * as dotenv from 'dotenv';
dotenv.config();
import { v5 as uuidv5, v4 as uuidv4 } from 'uuid';

export default class Util {

    static createUUIDv4(){
        const id = uuidv4();
        return id;
    }

    static createUUIDv5(data: string){
        const secret = process.env.SECRET_TOKEN_FOR_ID ?? '';
        const id = uuidv5(data, secret);
        return id;
    }
    
    static removeCaracteres(texto: string) {
        return texto.replace(/[&\/\\#,+()$~%!„'":*¨‚^¤?<>|@ª{«»§}©®™]/g, '');
	}

    static removeEspacos(texto: string){
        return texto.replace(/\s/g, '');
    }

    static removeNumeros(texto: string){
        return texto.replace(/[0-9]/g, '');
    }

    static apenasNumeros(texto: string){
        /*  
            You could also strip all the non-digit characters (\D or [^0-9]):
        */
        return texto.replace(/\D/g, '');
    }

    static apenasLetras(texto: string){
        return texto.replace(/[^a-zA-Z]/g, ' ').toUpperCase();
    }

    static replace(texto: string, condicao: string){
        return texto.replace(condicao, '');
    }
    
    static validaEmail(texto: string){
        return texto.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }
    
}