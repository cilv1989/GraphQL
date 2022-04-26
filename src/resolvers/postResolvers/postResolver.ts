import { Resolver,Query,Arg,Mutation } from "type-graphql";
import PostServices from '../../services/postServices'
import { PostOutput } from "./output/PostOutput";
import { PostInput } from "./input/PostInput";

@Resolver()
export class PostResolver{
    constructor(private postServices=PostServices ){}

    @Query(()=> [PostOutput], {nullable:true})
    async findAllPost(): Promise<PostOutput[]> {
        try {
            return this.postServices.findAllPost()

        } catch (error) {
            throw new Error("Any error message");            
        }
    }

    @Query(()=> PostOutput, {nullable:true}  )
    async findPostById(
        @Arg("id") id:number
    ): Promise<PostOutput | undefined> {
        try {
            return this.postServices.findPostById(id)
        } catch (error) {
            throw new Error("Any error message");            
        }
    }

    @Mutation(()=> PostOutput)
    async newPost(
        @Arg("newPost") newPost: PostInput
    ): Promise<PostOutput | undefined> {
        try {
            return this.postServices.addNewPost(
                {
                    title: newPost.title,
                    content: newPost.content, 
                    user_id: newPost.user_id,
                }
            )
        } catch (error) {
            throw new Error("Any error message");            
        }
    }

    @Mutation(()=> Boolean)
    async deletePost(
        @Arg('idPost') idPost:number
    ): Promise<boolean | undefined> {
        try {
            return this.postServices.deletePost(idPost)
        } catch (error) {
            throw new Error("Any error message");            
        }
    }
    

}