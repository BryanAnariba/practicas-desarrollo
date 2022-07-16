import { Schema, model } from 'mongoose';

const userSchema = new Schema({
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

export const User =  model( 'User', userSchema );