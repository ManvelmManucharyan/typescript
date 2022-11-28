import { cleanEnv, str, port } from "envalid";

function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),
        PORT: port({ default: 3000 }),
        MONGO_HOST: str(),
        MONGO_DB_NAME: str(),
        MONGO_PORT: port({ default: 27107 }),
        JWT_SECRET: str(),
    })
}

export default validateEnv;