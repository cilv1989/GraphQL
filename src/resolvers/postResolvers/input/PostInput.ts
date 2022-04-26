import { Field,ID,InputType,Int} from "type-graphql";

@InputType()
export class PostInput {
    @Field()
    title: string;

    @Field()
    content: string;

    @Field(()=>Int)
    user_id: number
}

