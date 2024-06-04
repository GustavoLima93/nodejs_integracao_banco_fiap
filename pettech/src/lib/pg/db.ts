import { Pool, PoolClient } from 'pg'
import { env } from '@/env'

const CONFIG = {
  user: env.DATABASE_USER,
  host: env.DATABASE_HOST,
  database: env.DATABASE_NAME,
  password: env.DATABASE_PASSWORD,
  port: env.DATABASE_PORT,
}

class Database {
  private pool: Pool
  private client: PoolClient | undefined

  constructor() {
    this.pool = new Pool(CONFIG)
    this.connection()
  }

  private async connection() {
    try {
      this.client = await this.pool.connect()
    } catch (error) {
      console.error(`Error connecting to database: ${error}`)

      throw new Error(`Error connecting to database:${error}`)
    }
  }

  get clientInstance() {
    return this.client
  }
}

export const database = new Database()
