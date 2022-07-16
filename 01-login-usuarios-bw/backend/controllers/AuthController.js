import { request, response } from 'express';

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
    const { email, password, repeatPassword } = req.body; 
    try {
        return res.status( 200 ).json({ status: 200, data: { email, password, repeatPassword } });
    } catch ( err ) {
        return res.status( 400 ).json({
            status: 400,
            data: err.message
        });
    }
}

export { 
    logIn,
    register,
};