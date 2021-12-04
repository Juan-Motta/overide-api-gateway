import { Arg, Query, Resolver, Ctx, Mutation } from 'type-graphql';

import { allUsers, getUserById, createUser, updateUser, updatePassword, deleteUserById } from '../helpers/UserHelper';
import { User, UserInput, UserUpdateInput, UserPasswordUpdateInput } from '../schemas/User';
import { Context } from '../interfaces/Context'

@Resolver()
export class UserResolver {
    @Query(() => [User])
    allUsers(
        @Ctx() ctx: Context
    ) {
        return allUsers(ctx.req.headers['auth'] as string);
    }

    @Query(() => User)
    getUserById(
        @Arg('id') id: number,
        @Ctx() ctx: Context
    ) {
        return getUserById(id, ctx.req.headers['auth'] as string);
    }

    @Mutation(() => String)
    createUser(
        @Arg('input') input: UserInput
    ) {
        return createUser(input);
    }

    @Mutation(() => String)
    updateUser(
        @Arg('id') id: number,
        @Arg('input') input: UserUpdateInput,
        @Ctx() ctx: Context
    ) {
        return updateUser(id, ctx.req.headers['auth'] as string, input);
    }

    @Mutation(() => String)
    updatePassword(
        @Arg('id') id: number,
        @Arg('input') input: UserPasswordUpdateInput,
        @Ctx() ctx: Context
    ) {
        return updatePassword(id, ctx.req.headers['auth'] as string, input.password);
    }

    @Mutation(() => String)
    deleteUser(
        @Arg('id') id: number,
        @Ctx() ctx: Context
    ) {
        return deleteUserById(id, ctx.req.headers['auth'] as string);
    }

}

