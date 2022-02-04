import { ExtractJwt, Strategy } from "passport-jwt";
import { environments } from "../environments";
import pool from "../database";

const strategy = new Strategy(
    {
        secretOrKey: environments.JWT.SECRET_KEY,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
        const userId = payload.id;
        const response = (await pool.query("SELECT * FROM users WHERE id = ?", [userId])) as any;
        if (!response[0]) {
            return done(true, false);
        }

        return done(null, response[0][0]);
    }
);

export default strategy;
