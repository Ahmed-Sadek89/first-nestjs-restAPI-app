import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { UsersServices } from "./users.service";

@Controller('users')
export class UsersController{

    constructor(
        private readonly usersService: UsersServices
    ){}

    @Get('fetchAll')
    public getAllUsers(){
        return this.usersService.getUsers()
    }

    @Get(':id')
    public getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(id)
    }

    @Post("addNew")
    public addNewUser(
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string
    ): {
        status: number,
        result: string,
        u_id: string
    }{
        const res = this.usersService.insertUser(username, email, password);
        return {
            status: 200,
            result: "new user is added successfully",
            u_id :res
        }
    }


    @Patch(':id')
    public updateUserById(
        @Param('id') id :string,
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string
    ){
        const updateUser = this.usersService.updateUser(id, username, email, password);
        if ( updateUser === null ) {
            return {
                status: 400,
                message: "user is not found to update"
            }
        }
        return {
            status: 200,
            message: 'user is updated successfully'
        }
    }

    @Delete(":id")
    public deleteUserById(@Param('id') id: string) {
        const result = this.usersService.deleteUser(id);
        return result
    }
}