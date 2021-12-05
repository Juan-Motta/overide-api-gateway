import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { City, CityInput, CityUpdateInput } from "../schemas/Rides";
import { Context } from '../interfaces/Context';
import { getAllCities, getCity, createCity, updateCity, deleteCity } from '../helpers/CityHelpers'

@Resolver()
export class CityResolver {
    @Query(() => [City])
    allCities() {
        return getAllCities();
    }

    @Query(() => City)
    getCity(
        @Arg('id', { nullable: true }) id: number,
        @Arg('code', { nullable: true }) code: string
    ) {
        return getCity(id, code);
    }

    @Mutation(() => String)
    createCity(
        @Arg('input') input: CityInput,
        @Ctx() ctx: Context
    ) {
        return createCity(input, ctx.req.headers['auth'] as string);
    }

    @Mutation(() => String)
    updateCity(
        @Arg('id') id: number,
        @Arg('input') input: CityUpdateInput,
        @Ctx() ctx: Context
    ) {
        return updateCity(input, id, ctx.req.headers['auth'] as string);
    }

    @Mutation(() => String)
    deleteCity(
        @Arg('id') id: number,
        @Ctx() ctx: Context
    ) {
        return deleteCity(id, ctx.req.headers['auth'] as string);
    }
}