import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class Booking {
    @Field(() => ID)
    _id!: string | number;

    @Field(() => [Passenger])
    passengers !: [Passenger];

    @Field(() => Number)
    ride_id!: number;

    @Field(() => Number)
    user_id!: number;

    @Field(() => String)
    date!: string;
}

@ObjectType()
export class Passenger {
    @Field(() => ID)
    _id!: string | number;

    @Field(() => String)
    name!: string;

    @Field(() => String)
    last_name!: string;

    @Field(() => String)
    document!: string

    @Field(() => String)
    birth!: string

    @Field(() => String)
    phone!: string;

    @Field(() => Number)
    seat!: number;
}

@ObjectType()
export class Seat {
    @Field(() => [Number])
    occupied_seats!: [number];
}

@InputType()
export class BookingInput {
    @Field(() => [PassengerInput])
    passengers !: [PassengerInput];

    @Field(() => Number)
    ride_id!: number;

    @Field(() => Number)
    user_id!: number;
}

@InputType()
export class PassengerInput {
    @Field(() => String)
    name!: string;

    @Field(() => String)
    last_name!: string;

    @Field(() => String)
    document!: string

    @Field(() => String)
    birth!: string

    @Field(() => String)
    phone!: string;

    @Field(() => Number)
    seat!: number;
}

@InputType()
export class BookingUpdateInput {
    @Field({ nullable: true })
    ride_id?: number;
}

@InputType()
export class PassengerUpdateInput {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    last_name?: string;

    @Field({ nullable: true })
    document?: string

    @Field({ nullable: true })
    birth?: string

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    seat?: number;
}