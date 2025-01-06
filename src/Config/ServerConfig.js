import dotenv from 'dotenv'

dotenv.config();

export const db_url = process.env.DB_URL;
export const jwt_secret_key = process.env.SECRET_KEY_JWT;