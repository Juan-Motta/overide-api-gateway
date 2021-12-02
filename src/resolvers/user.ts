import { Query, Resolver } from 'type-graphql';

@Resolver()
export class UserResolver {
    @Query(() => String)
    test() {
        return 'Prueba';
    }
}