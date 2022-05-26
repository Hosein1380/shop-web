import { randomUUID } from "crypto";
import Client from "./Client";
import { ClientRole } from "./enums";

export default class User extends Client {

    constructor(
        name: string,
        pass: string,
        email: string,
    ) {
        super(
            name,
            pass,
            email,
            ClientRole.USER,
        );
    }

}