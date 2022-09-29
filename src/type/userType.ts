import { Users } from "@prisma/client";



export type CreateUserType= Omit <Users , "id">

export type CreateUserTypeLogin= Omit <Users , "id" | "name" |"name" |"city"|"country"|"urlImage">