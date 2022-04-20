import { Resolver,Query,Arg } from "type-graphql";
import PostServices from '../../services/postServices'
import { Post } from "./output/PostOutput";

@Resolver()
export class PostResolver{
    constructor(private postServices=PostServices ){}

    @Query(()=> [Post], {nullable:true})
    async findAllPost(): Promise<Post[]> {
        try {
            return this.postServices.findAllPost()

        } catch (error) {
            throw new Error("Any error message");            
        }
    }

    @Query(()=> Post, {nullable:true}  )
    async findPostById(
        @Arg("id") id:number
    ): Promise<Post | undefined> {
        try {
            return this.postServices.findPostById(id)
        } catch (error) {
            throw new Error("Any error message");            
        }
    }

    // @Mutation(()=> User)
    // async newUser(
    //     @Args() {
    //         firstName,
    //         lastName,
    //         isActive,
    //     }: InputUser
    // ): Promise<User | undefined> {
    //     try {
    //         const totalElements= this.userServices.findAllUser().length
    //         return this.userServices.addUser({
    //             id: totalElements + 1,
    //             firstName,
    //             lastName,
    //             isActive
    //         })
    //     } catch (error) {
    //         throw new Error("Any error message");            
    //     }
    // }

    // @Mutation(()=> Boolean)
    // async deleteUser(
    //     @Arg('idUser') idUser:number
    // ): Promise<boolean | undefined> {
    //     try {
    //         return this.userServices.deleteUser(idUser)
    //     } catch (error) {
    //         throw new Error("Any error message");            
    //     }
    // }
    

}