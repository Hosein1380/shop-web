import { ClientRole } from "./enums"

export default abstract class Client {
    id: string
    role: ClientRole
    constructor(
        public name: string,
        public pass: string,
        public email: string,
        role: ClientRole
    ) {
        this.role = role
        this.id = "0"
    }
}