import { Arg, Query, Resolver } from 'type-graphql';

import { getTokens } from '../helpers/UserHelper';
import { Token } from '../schemas/Login'

@Resolver()
export class LoginResolver {
    @Query(() => Token)
    login(
        @Arg('username') username: string,
        @Arg('password') password: string
    ) {
        return getTokens(username, password);
    }
}