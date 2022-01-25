import { Links } from "../../models/links";
import { User } from "../../models/users";

export class SuperadminProfile {
    email?: string;
    password?: string;
    role?: string;
    phone?: string | number;
    id?: string;
    fullname?: string;
    about_me?: string;
    created_at?: Date;
    username?: string;
    links?: Links;

    constructor(user: User, links: Links) {
        this.email = user.email;
        this.username = user.username;
        this.role = user.role;
        this.phone = user.phone;
        this.about_me = user.about_me;
        this.id = user.id;
        this.fullname = user.fullname;
        this.created_at = user.created_at;
        this.links = {
            ...links,
        };
    }
}
