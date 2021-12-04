import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Token {
    @Field(() => String)
    access!: string;

    @Field(() => String)
    refresh!: string;
}