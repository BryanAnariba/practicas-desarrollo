import { Router } from 'express';
import { body } from 'express-validator';

import { logIn, register } from '../controllers/index.js';
import { errorValidationHandler } from '../middlewares/errorValidationHandler.js';

const router = Router();

router.post( 
    '/login', 
    [
        body( 'email', 'Incorrect Email' ).trim().isEmail().normalizeEmail(),
        body( 'email', 'Password Is Required' ).trim().not().isEmpty(),
        errorValidationHandler,
    ],
    logIn 
);

router.post( 
    '/register', 
    [
        body( 'email', 'Incorrect Email' ).trim().isEmail().normalizeEmail(),
        body( 'password', 'Incorrect Password: the password needs 6 characters min' )
        .trim()
        .isLength({ min: 6 }),
        body( 'password', 'Incorrect Password Format' )
        .trim()
        .isLength({ min: 6 })
        .custom(( value, { req } ) => {
            if ( value !== req.body.repeatPassword ) {
                throw new Error( 'The password are not the same, please check your password and repeat password' )
            }

            return value
        }),
        errorValidationHandler,
    ],
    register 
);

export { router as authRoutes };