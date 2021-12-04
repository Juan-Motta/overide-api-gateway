import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
    @Field(() => ID)
    id?: string | number;

    @Field(() => String)
    username!: string;

    @Field(() => String)
    email!: string;

    @Field(() => String)
    name!: string;

    @Field(() => String)
    last_name!: string;

    @Field(() => String)
    document!: string;

    @Field(() => String)
    birth!: string;

    @Field(() => String)
    phone!: string;

    @Field(() => Boolean)
    is_active!: boolean;

    @Field(() => Boolean)
    is_staff!: boolean;
}

@InputType()
export class UserInput {
    @Field(() => String)
    username!: string;

    @Field(() => String)
    email!: string;

    @Field(() => String)
    name!: string;

    @Field(() => String)
    last_name!: string;

    @Field(() => String)
    document!: string;

    @Field(() => String)
    birth!: string;

    @Field(() => String)
    phone!: string;

    @Field(() => String)
    password!: string;
}

@InputType()
export class UserUpdateInput {
    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    last_name?: string;

    @Field({ nullable: true })
    document?: string;

    @Field({ nullable: true })
    birth?: string;

    @Field({ nullable: true })
    phone?: string;
}

@InputType()
export class UserPasswordUpdateInput {
    @Field(() => String)
    password!: string;
}