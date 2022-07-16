import mongoose from 'mongoose';
import 'colors';

const connect = () => {
    mongoose.connect( process.env.MONGO_DB )
    .then( (res) => {
        console.log( `MongoDB is connected at port: ${ res.connection.host }`.magenta );
        console.log( '====================================================================='.green );
    })
    .catch(( err ) => {
        throw new Error( `Mongo Connection Was Failed ${ err }` );
    });
}

export {
    connect,
}


// 47
