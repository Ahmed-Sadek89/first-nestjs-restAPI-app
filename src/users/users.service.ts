import { Injectable } from "@nestjs/common";
import { Users } from "./users.model";

@Injectable()
export class UsersServices{
    private users: Users[] = [
        {
            id: '1',
            username: 'ahmed sadek',
            email: 'a.sadek@yahoo.com',
            password: '12345'
        },
        {
            id: '2',
            username: 'amr sadek',
            email: 'amr.sadek@yahoo.com',
            password: '12345'
        },
        {
            id: '3',
            username: 'aya sadek',
            email: 'aya.sadek@yahoo.com',
            password: '12345'
        },
    ];

    public getUsers(): Users[]{
        return this.users
    }

    public getUserById(id: string): Users {
        const user = this.users.find(index => index.id === id);
        return user
    }

    public insertUser(
        username: string,
        email: string,
        password: string
    ): string{
        const id = Math.random().toString()
        this.users.push({ id, username, email, password });
        return id
    }

    public updateUser(
        id: string,
        username: string,
        email: string,
        password: string
    ): Users{
        // check if user is exist
        const user = this.getUserById(id);
        if ( user ) {
            // then update it
            const updateUser = Object.assign(user, { username, email, password });
            return updateUser
        } else {
            return null
        }
    }

    public deleteUser(id: string) {
        const findUser = this.getUserById(id);
        if ( findUser ) {
            const res = this.users.filter(index => index.id !== id)
            this.users = res
            return {message: `user ${findUser.id} deleted successfully`, users: res}
        } else {
            return `user is not found to delete`
        }
    }

}