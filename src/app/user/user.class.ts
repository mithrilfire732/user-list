export class User{
    id: number = 0;
    username: string = "";
    firstname: string = "";
    lastname: string = "";

    constructor(id: number, username: string, firstname: string, lastname: string){
        this.id = id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.username=username;
    }
}