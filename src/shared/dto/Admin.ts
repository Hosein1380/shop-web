import Client from "./Client";
import { ClientRole } from "./enums";

export default class Admin extends Client {

    constructor(
        name: string,
        pass: string,
        email: string,
    ) {
        super(
            name,
            pass,
            email,
            ClientRole.ADMIN,
        );
    }

}