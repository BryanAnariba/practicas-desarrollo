import { request, response } from 'express';
import { validationResult } from 'express-validator';

const errorValidationHandler = ( req = request, res = response, next ) => {
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status( 400 ).json({ errors: errors.array() });
    }

    next();
}

export {
    errorValidationHandler,
}