import { Length } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(()=>ID)
    id: number;

    @Field(()=> String,{nullable:false})
    @Length(1,50)
    firstName: string;

    @Field(()=> String, {nullable:false})
    @Length(1, 50)
    lastName: string;

    @Field(()=> Boolean, {nullable: false})
    isActive: boolean;
}