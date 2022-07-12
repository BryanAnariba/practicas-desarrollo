import 'colors';
import express from 'express';

import { endPoints } from '../config/endPoint.js';
import { authRoutes } from '../routes/auth.routes.js';
import { userRoutes } from '../routes/user.routes.js';

class Server {

    constructor () {
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }
    
    settings () {
        this.app = express();
        this.app.set( 'PORT', process.env.PORT || 5000 );
    }

    middlewares () {
        this.app.use( express.json() );
        this.app.use( express.urlencoded( { extended: true } ) );
    }

    routes () {
        this.app.use( endPoints.auth, authRoutes  );
        this.app.use( endPoints.users, userRoutes );
    }

    staticFiles () {

    }

    start () {
        this.app.listen( this.app.get( 'PORT' ), () => {
            console.clear();
            console.log( '============================'.green );
            console.log( `Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
            console.log( '============================'.green );
        });
    }
}

export { Server };