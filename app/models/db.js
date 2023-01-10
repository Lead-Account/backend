import mongoose from 'mongoose';
import { createRequire } from 'module';
import USERS from "./user.model";
import ROLES from "./role.model";

const require = createRequire(import.meta.url);

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;


db.USERS
db.ROLES

db.ROLES = ["user", "admin", "moderator"];

export default db;