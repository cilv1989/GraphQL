import { Resolver, Query, Arg, Mutation, Args } from "type-graphql";
import UserService from "../../services/userServices";
import { User } from "./output/UsersOutput";
import { InputUser } from "./input/UserInputs";

@Resolver()
export class UserResolver {
    constructor(private userServices= UserService ){}
    
    @Query(()=> String)
    async Hello():Promise<string> {
        try {
            return this.userServices.helloWorld();
        } catch (error) {
            throw new Error("Any error message");            
        }
        
    }

    @Query(()=> String)
    async HelloWithName(
        @Arg('name') name:string
    ):Promise<string> {
        try {
            return this.userServices.helloWithName(name);
        } catch (error) {
            throw new Error("Any error message");            
        }
        
    }

    @Query(()=> [User])
    async findAllUsers(): Promise<User[]> {
        try {
            return this.userServices.findAllUser()
        } catch (error) {
            throw new Error("Any error message");            
        }
    }

    @Query(()=> User, {nullable:true}  )
    async findUserById(
        @Arg("id") id:number
    ): Promise<User | undefined> {
        try {
            return this.userServices.findUserById(id)
        } catch (error) {
            throw new Error("Any error message");            
        }
    }

    @Mutation(()=> User)
    async newUser(
        @Arg("newUser") newUser: InputUser
    ): Promise<User | undefined> {
        try {
            const totalElements= this.userServices.findAllUser().length
            return this.userServices.addUser({
                id: totalElements + 1,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                isActive: newUser.isActive
            })
        } catch (error) {
            throw new Error("Any error message");            
        }
    }

    @Mutation(()=> Boolean)
    async deleteUser(
        @Arg('idUser') idUser:number
    ): Promise<boolean | undefined> {
        try {
            return this.userServices.deleteUser(idUser)
        } catch (error) {
            throw new Error("Any error message");            
        }
    }
    
}