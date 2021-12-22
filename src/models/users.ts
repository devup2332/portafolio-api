export interface User {
    id: string;
    password: string;
    username: string;
    phone: number | string;
    fullname: string;
    created_at: Date;
    links: [];
    role: "admin" | "user" | "superadmin";
}
