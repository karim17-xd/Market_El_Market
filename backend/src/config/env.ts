import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const ENV = {
  FRONTEND_URL: process.env.FRONTEND_URL,
  PORT: process.env.PORT || 8000,
  DB_URL:
  process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
};
