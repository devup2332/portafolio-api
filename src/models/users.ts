export interface User {
    id: string;
    password: string;
    username: string;
    phone: number | string;
    fullname: string;
    created_at: Date;
    role: "admin" | "user" | "superadmin";
}
