import { Arg, Query, Resolver } from 'type-graphql';

import { getTokens, getRefreshToken } from '../helpers/UserHelper';
import { Token, AccessToken } from '../schemas/Login'

@Resolver()
export class LoginResolver {
    @Query(() => Token)
    login(
        @Arg('username') username: string,
        @Arg('password') password: string
    ) {
        return getTokens(username, password);
    }

    @Query(() => AccessToken)
    refresh(
        @Arg('refresh') refresh: string
    ) {
        return getRefreshToken(refresh);
    }
}