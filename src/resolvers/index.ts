import { UserResolver } from "./usersResolvers/userResolver";
import { PostResolver } from "./postResolvers/postResolver";

export const resolvers= [
    UserResolver,
    PostResolver
] as const