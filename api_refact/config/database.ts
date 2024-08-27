/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import Application from '@ioc:Adonis/Core/Application'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | MongoDB
    |--------------------------------------------------------------------------
    |
    | Configuration for the MongoDB database.  Make sure to install the driver
    | from npm when using this connection
    |
    | npm i @adonisjs/lucid-mongo
    |
    */
    mongodb: {
      client: 'mongodb',
      connection: Env.get('MONGO_URI'),
      migrations: {
        naturalSort: true,
      },
      useNullAsDefault: false, // MongoDB doesn't use null as default
      healthCheck: false,
      debug: false,
    },
  }
}

export default databaseConfig
