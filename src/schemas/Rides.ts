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

@ObjectType()
export class Ride {
    @Field(() => ID)
    id!: string | number;

    @Field(() => City)
    from!: City;

    @Field(() => City)
    to!: City;

    @Field(() => String)
    departure_date!: string;

    @Field(() => String)
    departure_time!: string;

    @Field(() => Number)
    passengers!: number;

    @Field(() => Number)
    price!: number;
}

@InputType()
export class RideInput {
    @Field(() => String)
    from!: string;

    @Field(() => String)
    to!: string;

    @Field(() => String)
    departure_date!: string;

    @Field(() => String)
    departure_time!: string;

    @Field(() => Number)
    passengers!: number;

    @Field(() => Number)
    price!: number;
}

@InputType()
export class RideUpdateInput {
    @Field({ nullable: true })
    from?: string;

    @Field({ nullable: true })
    to?: string;

    @Field({ nullable: true })
    departure_date?: string;

    @Field({ nullable: true })
    departure_time?: string;

    @Field({ nullable: true })
    passengers?: number;

    @Field({ nullable: true })
    price?: number;
}