import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: { unique: true } // para agilizar en caso de haber millones de usuario
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
},{
    timestamps: true,
    versionKey: false,
});

userSchema.pre( 'save', async function ( next ) {
    const user = this;

    if ( !user.isModified( 'password' ) ) return next();

    try {
        const salt = await bcryptjs.genSalt( 10 );
        user.password = await bcryptjs.hash( user.password, salt );
        next();
    } catch ( err ) {
        throw new Error( `Hashed password failed ${ err }` );
    }
});

export const User =  mongoose.model( 'User', userSchema );