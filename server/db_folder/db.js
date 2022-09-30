// server/db/db-connection.js;
import pgPromise from 'pg-promise';
import { config } from "dotenv";
config();

// Create Database Connection
const pgp = pgPromise({});

const db = pgp('postgres://localhost:5432/postgres');

export default db;
