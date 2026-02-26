import dotenv from 'dotenv';

dotenv.config();

// use port 1234 by default to match frontend dev server requirement
export const PORT = process.env.PORT || 1234;
export const NODE_ENV = process.env.NODE_ENV || 'development';

