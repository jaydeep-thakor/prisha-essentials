import dotenv from "dotenv"
dotenv.config();

const requiredEnvs = ["DATABASE_URI", "JWT_SECRET", "PORT", "IMAGEKIT_PUBLIC_KEY", "IMAGEKIT_PRIVATE_KEY", "IMAGEKIT_URL_END_POINT"];

for (const env of requiredEnvs) {
    if (!process.env[env]) {
        throw new Error(`missing required environment variable ${env}`);
    }
}

const config = {
    "DATABASE_URI": process.env.DATABASE_URI,
    "JWT_SECRET": process.env.JWT_SECRET,
    "PORT": process.env.PORT,
    "IMAGEKIT_PUBLIC_KEY": process.env.IMAGEKIT_PUBLIC_KEY,
    "IMAGEKIT_PRIVATE_KEY": process.env.IMAGEKIT_PRIVATE_KEY,
    "IMAGEKIT_URL_END_POINT": process.env.IMAGEKIT_URL_END_POINT
}

export default config;
