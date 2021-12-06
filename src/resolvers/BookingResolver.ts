import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

import { Context } from '../interfaces/Context';
import { Booking, Seat, BookingInput, BookingUpdateInput, PassengerUpdateInput } from '../schemas/Booking';
import { getAllBookings, getBookingById, getBookingByRideId, getBookingByUserId, getOccupiedSeatsByRideId, createBooking, updateBookingById, updateBookingPassenger, deleteBooking } from '../helpers/BookingHelper';

@Resolver()
export class BookingResolver {
    @Query(() => [Booking])
    allBookings(
        @Ctx() ctx: Context
    ) {
        return getAllBookings(ctx.req.headers['auth'] as string);
    }

    @Query(() => Booking)
    getBookingById(
        @Arg('id') id: string,
        @Ctx() ctx: Context
    ) {
        return getBookingById(id, ctx.req.headers['auth'] as string);
    }

    @Query(() => [Booking])
    getBookingByRideId(
        @Arg('id') id: number,
        @Ctx() ctx: Context
    ) {
        return getBookingByRideId(id, ctx.req.headers['auth'] as string);
    }

    @Query(() => [Booking])
    getBookingByUserId(
        @Arg('id') id: number,
        @Ctx() ctx: Context
    ) {
        return getBookingByUserId(id, ctx.req.headers['auth'] as string);
    }

    @Query(() => Seat)
    getOccupiedSeatsByRideId(
        @Arg('id') id: number
    ) {
        return getOccupiedSeatsByRideId(id);
    }

    @Mutation(() => String)
    createBooking(
        @Arg('input') input: BookingInput
    ) {
        return createBooking(input);
    }

    @Mutation(() => String)
    updateBookingById(
        @Arg('id') id: string,
        @Arg('input') input: BookingUpdateInput,
        @Ctx() ctx: Context
    ) {
        return updateBookingById(id, input, ctx.req.headers['auth'] as string);
    }

    @Mutation(() => String)
    updateBookingPassenger(
        @Arg('booking_id') booking_id: string,
        @Arg('passenger_id') passenger_id: string,
        @Arg('input') input: PassengerUpdateInput,
        @Ctx() ctx: Context
    ) {
        return updateBookingPassenger(booking_id, passenger_id, input, ctx.req.headers['auth'] as string);
    }

    @Mutation(() => String)
    deleteBooking(
        @Arg('id') id: string,
        @Ctx() ctx: Context
    ) {
        return deleteBooking(id, ctx.req.headers['auth'] as string);
    }
}