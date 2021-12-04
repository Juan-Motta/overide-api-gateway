import { JwtPayload } from "jwt-decode";

export interface TokenJwtPayload extends JwtPayload {
    user_id: number
}