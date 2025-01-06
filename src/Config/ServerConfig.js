import dotenv from 'dotenv'

dotenv.config();

export const db_url = process.env.DB_URL;
export const jwt_secret_key = process.env.SECRET_KEY_JWT;
export const cdn_api_key = process.env.CDN_API_KEY;
export const cdn_api_secret_key = process.env.CDN_API_SECRET_KEY;
export const cloud_name = process.env.CLOUD_NAME;