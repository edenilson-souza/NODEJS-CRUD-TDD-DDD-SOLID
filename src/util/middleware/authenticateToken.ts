import * as dotenv from 'dotenv';
dotenv.config();
import * as jwt from 'jsonwebtoken';

export default class AuthToken {
	constructor (readonly role: any) {}

    async Validate(req: any, res: any, next: any): Promise<any>{
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ auth: false, message: 'Nenhum token fornecido.' });
        }

        /*  const tokenValid = await knex('tokens').where('token', authHeader);
        if (tokenValid.length > 0) {
            return this.res.status(403).json({ auth: false, message: 'Falha ao autenticar token.' });
        } */
        
        var result:any = false;
        jwt.verify(authHeader, `${process.env.ACCESS_TOKEN_SECRET}`, { algorithms: ['HS256'] }, async function (err: any, token: any) {
            if (err) {
                result = false;
            }    
            result = token;
        });

        if (!result || result.systemRole != process.env.SYSTEM_NAME_ID) {
            return res.status(401).json({ auth: false, message: 'Falha ao autenticar token.' });
        }

        
        /*  const userRoleValid = await knex('users')
            .join('user_roles', 'users.id', 'user_roles.idUser')
            .join('system_roles', 'user_roles.idSystemRole', 'system_roles.id')
            .where('users.active', 1).where('users.id', token.id).where('system_roles.id', token.systemRole).select(['users.id', 'users.nickname', 'system_roles.role']);
        */
        /*  if((userRoleValid.length > 0) && (userRoleValid[0].role != token.role)){
            return this.res.status(403).json({ auth: false, message: 'Token com acesso inválido.' });
        } */


        var verify:any = false;
        this.role.forEach((element: any) => {
            if(element == result.role){
                verify = true;
            }
        });
        if (!verify) {
            return res.status(403).json({ auth: false, message: 'Token com acesso inválido.' });
        }

        req.tokenData = result;
        next();
    }
}