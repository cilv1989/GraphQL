import { Field,ID,Int, ObjectType } from "type-graphql";
import {User} from '../../usersResolvers/output/UsersOutput'

@ObjectType()
export class PostOutput {
    @Field(()=>ID)
    id: number;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field(()=>Int)
    views: number;

    @Field(()=>User, {nullable: true})
    user: User | undefined;
}

