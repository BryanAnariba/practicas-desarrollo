import { request, response } from 'express';
import { User } from '../models/User.js';

const logIn = async ( req = request, res = response ) => {
    const { email, password } = req.body;
    try {
        return res.status( 200 ).json({ status: 200, data: { email, password } });
    } catch ( err ) {
        return res.status( 400 ).json({
            status: 400,
            data: err.message
        });
    }
}

const register = async ( req = request, res = response ) => {
    const { email, password } = req.body; 
    try {

        // buscar usuario
        let existsUser = await User.findOne({ email: email });
        if ( existsUser ) {
            throw new Error( `The user with email: ${ email } already exists` );
        }

        // si llego hasta aca guardarlo
        const newUser = User({
            email: email,
            password: password
        });

        const saved = await newUser.save();
        return res.status( 201 ).json({ status: 200, data: `User ${ saved.email } registered succesfully` });
    } catch ( error ) {
        return res.status( 400 ).json({
                status: 400,
                data: error.message
        });
    }
}

export { 
    logIn,
    register,
};