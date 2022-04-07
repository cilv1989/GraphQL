import { Resolver, Query, Arg } from "type-graphql";
import UserService from "../../services/userServices";


@Resolver()
export class UserResolver {
    
    @Query(()=> String)
    async Hello():Promise<string> {
        try {
            return UserService.helloWorld();
        } catch (error) {
            throw new Error("Any error message");            
        }
        
    }

    @Query(()=> String)
    async HelloWithName(
        @Arg('name') name:string
    ):Promise<string> {
        try {
            return UserService.helloWithName(name);
        } catch (error) {
            throw new Error("Any error message");            
        }
        
    }
}