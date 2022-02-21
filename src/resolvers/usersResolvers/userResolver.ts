import { Resolver, Query } from "type-graphql";
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

}