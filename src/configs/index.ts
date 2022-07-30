
const env = process.env

const configs = {
  mode: env.NODE_ENV || "development",
  debug: !!env.DEBUG || false,
  nextAuth: {
    url: env.NEXTAUTH_URL,
    secret: env.NEXTAUTH_SECRET
  },
  google: {
    clientId: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET
  },
  database: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    name: env.DB_NAME,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    dialect: env.DB_DIALECT,
    logging: env.MODE === "development",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  }
}

export default configs