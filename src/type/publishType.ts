import { Publish } from "@prisma/client"

export type CreatePublishType= Omit <Publish , "id">

export type CreatePublishTypeInput= Omit <Publish , "id"| "userId" | "optionId">