import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class City {
    @Field(() => ID)
    id!: string | number;

    @Field(() => String)
    code!: string;

    @Field(() => String)
    name!: string;
}

@InputType()
export class CityInput {
    @Field(() => String)
    code!: string;

    @Field(() => String)
    name!: string;
}

@InputType()
export class CityUpdateInput {
    @Field({ nullable: true })
    code?: string;

    @Field({ nullable: true })
    name?: string;
}