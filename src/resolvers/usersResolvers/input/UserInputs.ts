import { Field, ArgsType, InputType } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class InputUser {
    @Field(()=> String,{nullable:false})
    @Length(1,50)
    firstName: string;

    @Field(()=> String, {nullable:false})
    @Length(1, 50)
    lastName: string;

    @Field(()=> Boolean, {nullable: false})
    isActive: boolean;
}