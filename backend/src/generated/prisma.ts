import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type Answer implements Node {
  answerId: Int!
  answer: String
  correct: Boolean
  count: Int
  question(where: QuestionWhereInput): Question
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Game implements Node {
  startTime: DateTime
  endTime: DateTime
  numWinners: Int
  averagePrize: Float
  streamUrl: String
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question!]
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Question implements Node {
  questionId: Int!
  question: String
  category: String
  questionNumber: Int
  questionCount: Int
  askTime: DateTime
  endTime: DateTime
  advancingPlayersCount: Int
  eliminatedPlayersCount: Int
  game(where: GameWhereInput): Game
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer!]
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type User implements Node {
  email: String!
  password: String!
  name: String!
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AggregateAnswer {
  count: Int!
}

type AggregateGame {
  count: Int!
}

type AggregateQuestion {
  count: Int!
}

type AggregateUser {
  count: Int!
}

"""
A connection to a list of items.
"""
type AnswerConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [AnswerEdge]!
  aggregate: AggregateAnswer!
}

input AnswerCreateInput {
  answerId: Int!
  answer: String
  correct: Boolean
  count: Int
  question: QuestionCreateOneWithoutAnswersInput
}

input AnswerCreateManyWithoutQuestionInput {
  create: [AnswerCreateWithoutQuestionInput!]
  connect: [AnswerWhereUniqueInput!]
}

input AnswerCreateWithoutQuestionInput {
  answerId: Int!
  answer: String
  correct: Boolean
  count: Int
}

"""
An edge in a connection.
"""
type AnswerEdge {
  """
  The item at the end of the edge.
  """
  node: Answer!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum AnswerOrderByInput {
  answerId_ASC
  answerId_DESC
  answer_ASC
  answer_DESC
  correct_ASC
  correct_DESC
  count_ASC
  count_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AnswerPreviousValues {
  answerId: Int!
  answer: String
  correct: Boolean
  count: Int
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AnswerSubscriptionPayload {
  mutation: MutationType!
  node: Answer
  updatedFields: [String!]
  previousValues: AnswerPreviousValues
}

input AnswerSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AnswerSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AnswerSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AnswerWhereInput
}

input AnswerUpdateInput {
  answerId: Int
  answer: String
  correct: Boolean
  count: Int
  question: QuestionUpdateOneWithoutAnswersInput
}

input AnswerUpdateManyWithoutQuestionInput {
  create: [AnswerCreateWithoutQuestionInput!]
  connect: [AnswerWhereUniqueInput!]
  disconnect: [AnswerWhereUniqueInput!]
  delete: [AnswerWhereUniqueInput!]
  update: [AnswerUpdateWithWhereUniqueWithoutQuestionInput!]
  upsert: [AnswerUpsertWithWhereUniqueWithoutQuestionInput!]
}

input AnswerUpdateWithoutQuestionDataInput {
  answerId: Int
  answer: String
  correct: Boolean
  count: Int
}

input AnswerUpdateWithWhereUniqueWithoutQuestionInput {
  where: AnswerWhereUniqueInput!
  data: AnswerUpdateWithoutQuestionDataInput!
}

input AnswerUpsertWithWhereUniqueWithoutQuestionInput {
  where: AnswerWhereUniqueInput!
  update: AnswerUpdateWithoutQuestionDataInput!
  create: AnswerCreateWithoutQuestionInput!
}

input AnswerWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AnswerWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AnswerWhereInput!]
  answerId: Int
  """
  All values that are not equal to given value.
  """
  answerId_not: Int
  """
  All values that are contained in given list.
  """
  answerId_in: [Int!]
  """
  All values that are not contained in given list.
  """
  answerId_not_in: [Int!]
  """
  All values less than the given value.
  """
  answerId_lt: Int
  """
  All values less than or equal the given value.
  """
  answerId_lte: Int
  """
  All values greater than the given value.
  """
  answerId_gt: Int
  """
  All values greater than or equal the given value.
  """
  answerId_gte: Int
  answer: String
  """
  All values that are not equal to given value.
  """
  answer_not: String
  """
  All values that are contained in given list.
  """
  answer_in: [String!]
  """
  All values that are not contained in given list.
  """
  answer_not_in: [String!]
  """
  All values less than the given value.
  """
  answer_lt: String
  """
  All values less than or equal the given value.
  """
  answer_lte: String
  """
  All values greater than the given value.
  """
  answer_gt: String
  """
  All values greater than or equal the given value.
  """
  answer_gte: String
  """
  All values containing the given string.
  """
  answer_contains: String
  """
  All values not containing the given string.
  """
  answer_not_contains: String
  """
  All values starting with the given string.
  """
  answer_starts_with: String
  """
  All values not starting with the given string.
  """
  answer_not_starts_with: String
  """
  All values ending with the given string.
  """
  answer_ends_with: String
  """
  All values not ending with the given string.
  """
  answer_not_ends_with: String
  correct: Boolean
  """
  All values that are not equal to given value.
  """
  correct_not: Boolean
  count: Int
  """
  All values that are not equal to given value.
  """
  count_not: Int
  """
  All values that are contained in given list.
  """
  count_in: [Int!]
  """
  All values that are not contained in given list.
  """
  count_not_in: [Int!]
  """
  All values less than the given value.
  """
  count_lt: Int
  """
  All values less than or equal the given value.
  """
  count_lte: Int
  """
  All values greater than the given value.
  """
  count_gt: Int
  """
  All values greater than or equal the given value.
  """
  count_gte: Int
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  question: QuestionWhereInput
}

input AnswerWhereUniqueInput {
  answerId: Int
  id: ID
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

scalar DateTime

"""
A connection to a list of items.
"""
type GameConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  startTime: DateTime
  endTime: DateTime
  numWinners: Int
  averagePrize: Float
  streamUrl: String
  questions: QuestionCreateManyWithoutGameInput
}

input GameCreateOneWithoutQuestionsInput {
  create: GameCreateWithoutQuestionsInput
  connect: GameWhereUniqueInput
}

input GameCreateWithoutQuestionsInput {
  startTime: DateTime
  endTime: DateTime
  numWinners: Int
  averagePrize: Float
  streamUrl: String
}

"""
An edge in a connection.
"""
type GameEdge {
  """
  The item at the end of the edge.
  """
  node: Game!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum GameOrderByInput {
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  numWinners_ASC
  numWinners_DESC
  averagePrize_ASC
  averagePrize_DESC
  streamUrl_ASC
  streamUrl_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GamePreviousValues {
  startTime: DateTime
  endTime: DateTime
  numWinners: Int
  averagePrize: Float
  streamUrl: String
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [GameSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [GameSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GameWhereInput
}

input GameUpdateInput {
  startTime: DateTime
  endTime: DateTime
  numWinners: Int
  averagePrize: Float
  streamUrl: String
  questions: QuestionUpdateManyWithoutGameInput
}

input GameUpdateOneWithoutQuestionsInput {
  create: GameCreateWithoutQuestionsInput
  connect: GameWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GameUpdateWithoutQuestionsDataInput
  upsert: GameUpsertWithoutQuestionsInput
}

input GameUpdateWithoutQuestionsDataInput {
  startTime: DateTime
  endTime: DateTime
  numWinners: Int
  averagePrize: Float
  streamUrl: String
}

input GameUpsertWithoutQuestionsInput {
  update: GameUpdateWithoutQuestionsDataInput!
  create: GameCreateWithoutQuestionsInput!
}

input GameWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [GameWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [GameWhereInput!]
  startTime: DateTime
  """
  All values that are not equal to given value.
  """
  startTime_not: DateTime
  """
  All values that are contained in given list.
  """
  startTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  startTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  startTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  startTime_lte: DateTime
  """
  All values greater than the given value.
  """
  startTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  startTime_gte: DateTime
  endTime: DateTime
  """
  All values that are not equal to given value.
  """
  endTime_not: DateTime
  """
  All values that are contained in given list.
  """
  endTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  endTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  endTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  endTime_lte: DateTime
  """
  All values greater than the given value.
  """
  endTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  endTime_gte: DateTime
  numWinners: Int
  """
  All values that are not equal to given value.
  """
  numWinners_not: Int
  """
  All values that are contained in given list.
  """
  numWinners_in: [Int!]
  """
  All values that are not contained in given list.
  """
  numWinners_not_in: [Int!]
  """
  All values less than the given value.
  """
  numWinners_lt: Int
  """
  All values less than or equal the given value.
  """
  numWinners_lte: Int
  """
  All values greater than the given value.
  """
  numWinners_gt: Int
  """
  All values greater than or equal the given value.
  """
  numWinners_gte: Int
  averagePrize: Float
  """
  All values that are not equal to given value.
  """
  averagePrize_not: Float
  """
  All values that are contained in given list.
  """
  averagePrize_in: [Float!]
  """
  All values that are not contained in given list.
  """
  averagePrize_not_in: [Float!]
  """
  All values less than the given value.
  """
  averagePrize_lt: Float
  """
  All values less than or equal the given value.
  """
  averagePrize_lte: Float
  """
  All values greater than the given value.
  """
  averagePrize_gt: Float
  """
  All values greater than or equal the given value.
  """
  averagePrize_gte: Float
  streamUrl: String
  """
  All values that are not equal to given value.
  """
  streamUrl_not: String
  """
  All values that are contained in given list.
  """
  streamUrl_in: [String!]
  """
  All values that are not contained in given list.
  """
  streamUrl_not_in: [String!]
  """
  All values less than the given value.
  """
  streamUrl_lt: String
  """
  All values less than or equal the given value.
  """
  streamUrl_lte: String
  """
  All values greater than the given value.
  """
  streamUrl_gt: String
  """
  All values greater than or equal the given value.
  """
  streamUrl_gte: String
  """
  All values containing the given string.
  """
  streamUrl_contains: String
  """
  All values not containing the given string.
  """
  streamUrl_not_contains: String
  """
  All values starting with the given string.
  """
  streamUrl_starts_with: String
  """
  All values not starting with the given string.
  """
  streamUrl_not_starts_with: String
  """
  All values ending with the given string.
  """
  streamUrl_ends_with: String
  """
  All values not ending with the given string.
  """
  streamUrl_not_ends_with: String
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  questions_every: QuestionWhereInput
  questions_some: QuestionWhereInput
  questions_none: QuestionWhereInput
}

input GameWhereUniqueInput {
  id: ID
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

"""
A connection to a list of items.
"""
type QuestionConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [QuestionEdge]!
  aggregate: AggregateQuestion!
}

input QuestionCreateInput {
  questionId: Int!
  question: String
  category: String
  questionNumber: Int
  questionCount: Int
  askTime: DateTime
  endTime: DateTime
  advancingPlayersCount: Int
  eliminatedPlayersCount: Int
  game: GameCreateOneWithoutQuestionsInput
  answers: AnswerCreateManyWithoutQuestionInput
}

input QuestionCreateManyWithoutGameInput {
  create: [QuestionCreateWithoutGameInput!]
  connect: [QuestionWhereUniqueInput!]
}

input QuestionCreateOneWithoutAnswersInput {
  create: QuestionCreateWithoutAnswersInput
  connect: QuestionWhereUniqueInput
}

input QuestionCreateWithoutAnswersInput {
  questionId: Int!
  question: String
  category: String
  questionNumber: Int
  questionCount: Int
  askTime: DateTime
  endTime: DateTime
  advancingPlayersCount: Int
  eliminatedPlayersCount: Int
  game: GameCreateOneWithoutQuestionsInput
}

input QuestionCreateWithoutGameInput {
  questionId: Int!
  question: String
  category: String
  questionNumber: Int
  questionCount: Int
  askTime: DateTime
  endTime: DateTime
  advancingPlayersCount: Int
  eliminatedPlayersCount: Int
  answers: AnswerCreateManyWithoutQuestionInput
}

"""
An edge in a connection.
"""
type QuestionEdge {
  """
  The item at the end of the edge.
  """
  node: Question!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum QuestionOrderByInput {
  questionId_ASC
  questionId_DESC
  question_ASC
  question_DESC
  category_ASC
  category_DESC
  questionNumber_ASC
  questionNumber_DESC
  questionCount_ASC
  questionCount_DESC
  askTime_ASC
  askTime_DESC
  endTime_ASC
  endTime_DESC
  advancingPlayersCount_ASC
  advancingPlayersCount_DESC
  eliminatedPlayersCount_ASC
  eliminatedPlayersCount_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type QuestionPreviousValues {
  questionId: Int!
  question: String
  category: String
  questionNumber: Int
  questionCount: Int
  askTime: DateTime
  endTime: DateTime
  advancingPlayersCount: Int
  eliminatedPlayersCount: Int
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type QuestionSubscriptionPayload {
  mutation: MutationType!
  node: Question
  updatedFields: [String!]
  previousValues: QuestionPreviousValues
}

input QuestionSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [QuestionSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [QuestionSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: QuestionWhereInput
}

input QuestionUpdateInput {
  questionId: Int
  question: String
  category: String
  questionNumber: Int
  questionCount: Int
  askTime: DateTime
  endTime: DateTime
  advancingPlayersCount: Int
  eliminatedPlayersCount: Int
  game: GameUpdateOneWithoutQuestionsInput
  answers: AnswerUpdateManyWithoutQuestionInput
}

input QuestionUpdateManyWithoutGameInput {
  create: [QuestionCreateWithoutGameInput!]
  connect: [QuestionWhereUniqueInput!]
  disconnect: [QuestionWhereUniqueInput!]
  delete: [QuestionWhereUniqueInput!]
  update: [QuestionUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [QuestionUpsertWithWhereUniqueWithoutGameInput!]
}

input QuestionUpdateOneWithoutAnswersInput {
  create: QuestionCreateWithoutAnswersInput
  connect: QuestionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: QuestionUpdateWithoutAnswersDataInput
  upsert: QuestionUpsertWithoutAnswersInput
}

input QuestionUpdateWithoutAnswersDataInput {
  questionId: Int
  question: String
  category: String
  questionNumber: Int
  questionCount: Int
  askTime: DateTime
  endTime: DateTime
  advancingPlayersCount: Int
  eliminatedPlayersCount: Int
  game: GameUpdateOneWithoutQuestionsInput
}

input QuestionUpdateWithoutGameDataInput {
  questionId: Int
  question: String
  category: String
  questionNumber: Int
  questionCount: Int
  askTime: DateTime
  endTime: DateTime
  advancingPlayersCount: Int
  eliminatedPlayersCount: Int
  answers: AnswerUpdateManyWithoutQuestionInput
}

input QuestionUpdateWithWhereUniqueWithoutGameInput {
  where: QuestionWhereUniqueInput!
  data: QuestionUpdateWithoutGameDataInput!
}

input QuestionUpsertWithoutAnswersInput {
  update: QuestionUpdateWithoutAnswersDataInput!
  create: QuestionCreateWithoutAnswersInput!
}

input QuestionUpsertWithWhereUniqueWithoutGameInput {
  where: QuestionWhereUniqueInput!
  update: QuestionUpdateWithoutGameDataInput!
  create: QuestionCreateWithoutGameInput!
}

input QuestionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [QuestionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [QuestionWhereInput!]
  questionId: Int
  """
  All values that are not equal to given value.
  """
  questionId_not: Int
  """
  All values that are contained in given list.
  """
  questionId_in: [Int!]
  """
  All values that are not contained in given list.
  """
  questionId_not_in: [Int!]
  """
  All values less than the given value.
  """
  questionId_lt: Int
  """
  All values less than or equal the given value.
  """
  questionId_lte: Int
  """
  All values greater than the given value.
  """
  questionId_gt: Int
  """
  All values greater than or equal the given value.
  """
  questionId_gte: Int
  question: String
  """
  All values that are not equal to given value.
  """
  question_not: String
  """
  All values that are contained in given list.
  """
  question_in: [String!]
  """
  All values that are not contained in given list.
  """
  question_not_in: [String!]
  """
  All values less than the given value.
  """
  question_lt: String
  """
  All values less than or equal the given value.
  """
  question_lte: String
  """
  All values greater than the given value.
  """
  question_gt: String
  """
  All values greater than or equal the given value.
  """
  question_gte: String
  """
  All values containing the given string.
  """
  question_contains: String
  """
  All values not containing the given string.
  """
  question_not_contains: String
  """
  All values starting with the given string.
  """
  question_starts_with: String
  """
  All values not starting with the given string.
  """
  question_not_starts_with: String
  """
  All values ending with the given string.
  """
  question_ends_with: String
  """
  All values not ending with the given string.
  """
  question_not_ends_with: String
  category: String
  """
  All values that are not equal to given value.
  """
  category_not: String
  """
  All values that are contained in given list.
  """
  category_in: [String!]
  """
  All values that are not contained in given list.
  """
  category_not_in: [String!]
  """
  All values less than the given value.
  """
  category_lt: String
  """
  All values less than or equal the given value.
  """
  category_lte: String
  """
  All values greater than the given value.
  """
  category_gt: String
  """
  All values greater than or equal the given value.
  """
  category_gte: String
  """
  All values containing the given string.
  """
  category_contains: String
  """
  All values not containing the given string.
  """
  category_not_contains: String
  """
  All values starting with the given string.
  """
  category_starts_with: String
  """
  All values not starting with the given string.
  """
  category_not_starts_with: String
  """
  All values ending with the given string.
  """
  category_ends_with: String
  """
  All values not ending with the given string.
  """
  category_not_ends_with: String
  questionNumber: Int
  """
  All values that are not equal to given value.
  """
  questionNumber_not: Int
  """
  All values that are contained in given list.
  """
  questionNumber_in: [Int!]
  """
  All values that are not contained in given list.
  """
  questionNumber_not_in: [Int!]
  """
  All values less than the given value.
  """
  questionNumber_lt: Int
  """
  All values less than or equal the given value.
  """
  questionNumber_lte: Int
  """
  All values greater than the given value.
  """
  questionNumber_gt: Int
  """
  All values greater than or equal the given value.
  """
  questionNumber_gte: Int
  questionCount: Int
  """
  All values that are not equal to given value.
  """
  questionCount_not: Int
  """
  All values that are contained in given list.
  """
  questionCount_in: [Int!]
  """
  All values that are not contained in given list.
  """
  questionCount_not_in: [Int!]
  """
  All values less than the given value.
  """
  questionCount_lt: Int
  """
  All values less than or equal the given value.
  """
  questionCount_lte: Int
  """
  All values greater than the given value.
  """
  questionCount_gt: Int
  """
  All values greater than or equal the given value.
  """
  questionCount_gte: Int
  askTime: DateTime
  """
  All values that are not equal to given value.
  """
  askTime_not: DateTime
  """
  All values that are contained in given list.
  """
  askTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  askTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  askTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  askTime_lte: DateTime
  """
  All values greater than the given value.
  """
  askTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  askTime_gte: DateTime
  endTime: DateTime
  """
  All values that are not equal to given value.
  """
  endTime_not: DateTime
  """
  All values that are contained in given list.
  """
  endTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  endTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  endTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  endTime_lte: DateTime
  """
  All values greater than the given value.
  """
  endTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  endTime_gte: DateTime
  advancingPlayersCount: Int
  """
  All values that are not equal to given value.
  """
  advancingPlayersCount_not: Int
  """
  All values that are contained in given list.
  """
  advancingPlayersCount_in: [Int!]
  """
  All values that are not contained in given list.
  """
  advancingPlayersCount_not_in: [Int!]
  """
  All values less than the given value.
  """
  advancingPlayersCount_lt: Int
  """
  All values less than or equal the given value.
  """
  advancingPlayersCount_lte: Int
  """
  All values greater than the given value.
  """
  advancingPlayersCount_gt: Int
  """
  All values greater than or equal the given value.
  """
  advancingPlayersCount_gte: Int
  eliminatedPlayersCount: Int
  """
  All values that are not equal to given value.
  """
  eliminatedPlayersCount_not: Int
  """
  All values that are contained in given list.
  """
  eliminatedPlayersCount_in: [Int!]
  """
  All values that are not contained in given list.
  """
  eliminatedPlayersCount_not_in: [Int!]
  """
  All values less than the given value.
  """
  eliminatedPlayersCount_lt: Int
  """
  All values less than or equal the given value.
  """
  eliminatedPlayersCount_lte: Int
  """
  All values greater than the given value.
  """
  eliminatedPlayersCount_gt: Int
  """
  All values greater than or equal the given value.
  """
  eliminatedPlayersCount_gte: Int
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  game: GameWhereInput
  answers_every: AnswerWhereInput
  answers_some: AnswerWhereInput
  answers_none: AnswerWhereInput
}

input QuestionWhereUniqueInput {
  questionId: Int
  id: ID
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  email: String!
  password: String!
  name: String!
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
}

input UserWhereUniqueInput {
  email: String
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createGame(data: GameCreateInput!): Game!
  createQuestion(data: QuestionCreateInput!): Question!
  createAnswer(data: AnswerCreateInput!): Answer!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateQuestion(data: QuestionUpdateInput!, where: QuestionWhereUniqueInput!): Question
  updateAnswer(data: AnswerUpdateInput!, where: AnswerWhereUniqueInput!): Answer
  deleteUser(where: UserWhereUniqueInput!): User
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteQuestion(where: QuestionWhereUniqueInput!): Question
  deleteAnswer(where: AnswerWhereUniqueInput!): Answer
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  upsertQuestion(where: QuestionWhereUniqueInput!, create: QuestionCreateInput!, update: QuestionUpdateInput!): Question!
  upsertAnswer(where: AnswerWhereUniqueInput!, create: AnswerCreateInput!, update: AnswerUpdateInput!): Answer!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput!): BatchPayload!
  updateManyGames(data: GameUpdateInput!, where: GameWhereInput!): BatchPayload!
  updateManyQuestions(data: QuestionUpdateInput!, where: QuestionWhereInput!): BatchPayload!
  updateManyAnswers(data: AnswerUpdateInput!, where: AnswerWhereInput!): BatchPayload!
  deleteManyUsers(where: UserWhereInput!): BatchPayload!
  deleteManyGames(where: GameWhereInput!): BatchPayload!
  deleteManyQuestions(where: QuestionWhereInput!): BatchPayload!
  deleteManyAnswers(where: AnswerWhereInput!): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question]!
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer]!
  user(where: UserWhereUniqueInput!): User
  game(where: GameWhereUniqueInput!): Game
  question(where: QuestionWhereUniqueInput!): Question
  answer(where: AnswerWhereUniqueInput!): Answer
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  questionsConnection(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionConnection!
  answersConnection(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  question(where: QuestionSubscriptionWhereInput): QuestionSubscriptionPayload
  answer(where: AnswerSubscriptionWhereInput): AnswerSubscriptionPayload
}
`

export type GameOrderByInput = 
  'startTime_ASC' |
  'startTime_DESC' |
  'endTime_ASC' |
  'endTime_DESC' |
  'numWinners_ASC' |
  'numWinners_DESC' |
  'averagePrize_ASC' |
  'averagePrize_DESC' |
  'streamUrl_ASC' |
  'streamUrl_DESC' |
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type QuestionOrderByInput = 
  'questionId_ASC' |
  'questionId_DESC' |
  'question_ASC' |
  'question_DESC' |
  'category_ASC' |
  'category_DESC' |
  'questionNumber_ASC' |
  'questionNumber_DESC' |
  'questionCount_ASC' |
  'questionCount_DESC' |
  'askTime_ASC' |
  'askTime_DESC' |
  'endTime_ASC' |
  'endTime_DESC' |
  'advancingPlayersCount_ASC' |
  'advancingPlayersCount_DESC' |
  'eliminatedPlayersCount_ASC' |
  'eliminatedPlayersCount_DESC' |
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput = 
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type AnswerOrderByInput = 
  'answerId_ASC' |
  'answerId_DESC' |
  'answer_ASC' |
  'answer_DESC' |
  'correct_ASC' |
  'correct_DESC' |
  'count_ASC' |
  'count_DESC' |
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface AnswerCreateManyWithoutQuestionInput {
  create?: AnswerCreateWithoutQuestionInput[] | AnswerCreateWithoutQuestionInput
  connect?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
}

export interface AnswerUpsertWithWhereUniqueWithoutQuestionInput {
  where: AnswerWhereUniqueInput
  update: AnswerUpdateWithoutQuestionDataInput
  create: AnswerCreateWithoutQuestionInput
}

export interface QuestionCreateWithoutAnswersInput {
  questionId: Int
  question?: String
  category?: String
  questionNumber?: Int
  questionCount?: Int
  askTime?: DateTime
  endTime?: DateTime
  advancingPlayersCount?: Int
  eliminatedPlayersCount?: Int
  game?: GameCreateOneWithoutQuestionsInput
}

export interface AnswerUpdateWithoutQuestionDataInput {
  answerId?: Int
  answer?: String
  correct?: Boolean
  count?: Int
}

export interface GameCreateWithoutQuestionsInput {
  startTime?: DateTime
  endTime?: DateTime
  numWinners?: Int
  averagePrize?: Float
  streamUrl?: String
}

export interface AnswerUpdateWithWhereUniqueWithoutQuestionInput {
  where: AnswerWhereUniqueInput
  data: AnswerUpdateWithoutQuestionDataInput
}

export interface QuestionWhereInput {
  AND?: QuestionWhereInput[] | QuestionWhereInput
  OR?: QuestionWhereInput[] | QuestionWhereInput
  questionId?: Int
  questionId_not?: Int
  questionId_in?: Int[] | Int
  questionId_not_in?: Int[] | Int
  questionId_lt?: Int
  questionId_lte?: Int
  questionId_gt?: Int
  questionId_gte?: Int
  question?: String
  question_not?: String
  question_in?: String[] | String
  question_not_in?: String[] | String
  question_lt?: String
  question_lte?: String
  question_gt?: String
  question_gte?: String
  question_contains?: String
  question_not_contains?: String
  question_starts_with?: String
  question_not_starts_with?: String
  question_ends_with?: String
  question_not_ends_with?: String
  category?: String
  category_not?: String
  category_in?: String[] | String
  category_not_in?: String[] | String
  category_lt?: String
  category_lte?: String
  category_gt?: String
  category_gte?: String
  category_contains?: String
  category_not_contains?: String
  category_starts_with?: String
  category_not_starts_with?: String
  category_ends_with?: String
  category_not_ends_with?: String
  questionNumber?: Int
  questionNumber_not?: Int
  questionNumber_in?: Int[] | Int
  questionNumber_not_in?: Int[] | Int
  questionNumber_lt?: Int
  questionNumber_lte?: Int
  questionNumber_gt?: Int
  questionNumber_gte?: Int
  questionCount?: Int
  questionCount_not?: Int
  questionCount_in?: Int[] | Int
  questionCount_not_in?: Int[] | Int
  questionCount_lt?: Int
  questionCount_lte?: Int
  questionCount_gt?: Int
  questionCount_gte?: Int
  askTime?: DateTime
  askTime_not?: DateTime
  askTime_in?: DateTime[] | DateTime
  askTime_not_in?: DateTime[] | DateTime
  askTime_lt?: DateTime
  askTime_lte?: DateTime
  askTime_gt?: DateTime
  askTime_gte?: DateTime
  endTime?: DateTime
  endTime_not?: DateTime
  endTime_in?: DateTime[] | DateTime
  endTime_not_in?: DateTime[] | DateTime
  endTime_lt?: DateTime
  endTime_lte?: DateTime
  endTime_gt?: DateTime
  endTime_gte?: DateTime
  advancingPlayersCount?: Int
  advancingPlayersCount_not?: Int
  advancingPlayersCount_in?: Int[] | Int
  advancingPlayersCount_not_in?: Int[] | Int
  advancingPlayersCount_lt?: Int
  advancingPlayersCount_lte?: Int
  advancingPlayersCount_gt?: Int
  advancingPlayersCount_gte?: Int
  eliminatedPlayersCount?: Int
  eliminatedPlayersCount_not?: Int
  eliminatedPlayersCount_in?: Int[] | Int
  eliminatedPlayersCount_not_in?: Int[] | Int
  eliminatedPlayersCount_lt?: Int
  eliminatedPlayersCount_lte?: Int
  eliminatedPlayersCount_gt?: Int
  eliminatedPlayersCount_gte?: Int
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  game?: GameWhereInput
  answers_every?: AnswerWhereInput
  answers_some?: AnswerWhereInput
  answers_none?: AnswerWhereInput
}

export interface AnswerUpdateManyWithoutQuestionInput {
  create?: AnswerCreateWithoutQuestionInput[] | AnswerCreateWithoutQuestionInput
  connect?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
  disconnect?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
  delete?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
  update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput[] | AnswerUpdateWithWhereUniqueWithoutQuestionInput
  upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput[] | AnswerUpsertWithWhereUniqueWithoutQuestionInput
}

export interface QuestionSubscriptionWhereInput {
  AND?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  OR?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionWhereInput
}

export interface QuestionUpdateWithoutGameDataInput {
  questionId?: Int
  question?: String
  category?: String
  questionNumber?: Int
  questionCount?: Int
  askTime?: DateTime
  endTime?: DateTime
  advancingPlayersCount?: Int
  eliminatedPlayersCount?: Int
  answers?: AnswerUpdateManyWithoutQuestionInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface QuestionUpdateWithWhereUniqueWithoutGameInput {
  where: QuestionWhereUniqueInput
  data: QuestionUpdateWithoutGameDataInput
}

export interface QuestionUpdateWithoutAnswersDataInput {
  questionId?: Int
  question?: String
  category?: String
  questionNumber?: Int
  questionCount?: Int
  askTime?: DateTime
  endTime?: DateTime
  advancingPlayersCount?: Int
  eliminatedPlayersCount?: Int
  game?: GameUpdateOneWithoutQuestionsInput
}

export interface QuestionUpdateManyWithoutGameInput {
  create?: QuestionCreateWithoutGameInput[] | QuestionCreateWithoutGameInput
  connect?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
  disconnect?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
  delete?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
  update?: QuestionUpdateWithWhereUniqueWithoutGameInput[] | QuestionUpdateWithWhereUniqueWithoutGameInput
  upsert?: QuestionUpsertWithWhereUniqueWithoutGameInput[] | QuestionUpsertWithWhereUniqueWithoutGameInput
}

export interface AnswerUpdateInput {
  answerId?: Int
  answer?: String
  correct?: Boolean
  count?: Int
  question?: QuestionUpdateOneWithoutAnswersInput
}

export interface GameUpdateInput {
  startTime?: DateTime
  endTime?: DateTime
  numWinners?: Int
  averagePrize?: Float
  streamUrl?: String
  questions?: QuestionUpdateManyWithoutGameInput
}

export interface GameWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
}

export interface AnswerWhereUniqueInput {
  answerId?: Int
  id?: ID_Input
}

export interface GameCreateInput {
  startTime?: DateTime
  endTime?: DateTime
  numWinners?: Int
  averagePrize?: Float
  streamUrl?: String
  questions?: QuestionCreateManyWithoutGameInput
}

export interface GameUpdateWithoutQuestionsDataInput {
  startTime?: DateTime
  endTime?: DateTime
  numWinners?: Int
  averagePrize?: Float
  streamUrl?: String
}

export interface QuestionCreateManyWithoutGameInput {
  create?: QuestionCreateWithoutGameInput[] | QuestionCreateWithoutGameInput
  connect?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
}

export interface QuestionUpdateInput {
  questionId?: Int
  question?: String
  category?: String
  questionNumber?: Int
  questionCount?: Int
  askTime?: DateTime
  endTime?: DateTime
  advancingPlayersCount?: Int
  eliminatedPlayersCount?: Int
  game?: GameUpdateOneWithoutQuestionsInput
  answers?: AnswerUpdateManyWithoutQuestionInput
}

export interface QuestionCreateWithoutGameInput {
  questionId: Int
  question?: String
  category?: String
  questionNumber?: Int
  questionCount?: Int
  askTime?: DateTime
  endTime?: DateTime
  advancingPlayersCount?: Int
  eliminatedPlayersCount?: Int
  answers?: AnswerCreateManyWithoutQuestionInput
}

export interface AnswerSubscriptionWhereInput {
  AND?: AnswerSubscriptionWhereInput[] | AnswerSubscriptionWhereInput
  OR?: AnswerSubscriptionWhereInput[] | AnswerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AnswerWhereInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
}

export interface GameSubscriptionWhereInput {
  AND?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput
  OR?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GameWhereInput
}

export interface AnswerCreateWithoutQuestionInput {
  answerId: Int
  answer?: String
  correct?: Boolean
  count?: Int
}

export interface QuestionUpdateOneWithoutAnswersInput {
  create?: QuestionCreateWithoutAnswersInput
  connect?: QuestionWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: QuestionUpdateWithoutAnswersDataInput
  upsert?: QuestionUpsertWithoutAnswersInput
}

export interface QuestionCreateInput {
  questionId: Int
  question?: String
  category?: String
  questionNumber?: Int
  questionCount?: Int
  askTime?: DateTime
  endTime?: DateTime
  advancingPlayersCount?: Int
  eliminatedPlayersCount?: Int
  game?: GameCreateOneWithoutQuestionsInput
  answers?: AnswerCreateManyWithoutQuestionInput
}

export interface QuestionWhereUniqueInput {
  questionId?: Int
  id?: ID_Input
}

export interface GameUpdateOneWithoutQuestionsInput {
  create?: GameCreateWithoutQuestionsInput
  connect?: GameWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GameUpdateWithoutQuestionsDataInput
  upsert?: GameUpsertWithoutQuestionsInput
}

export interface QuestionCreateOneWithoutAnswersInput {
  create?: QuestionCreateWithoutAnswersInput
  connect?: QuestionWhereUniqueInput
}

export interface AnswerCreateInput {
  answerId: Int
  answer?: String
  correct?: Boolean
  count?: Int
  question?: QuestionCreateOneWithoutAnswersInput
}

export interface GameWhereInput {
  AND?: GameWhereInput[] | GameWhereInput
  OR?: GameWhereInput[] | GameWhereInput
  startTime?: DateTime
  startTime_not?: DateTime
  startTime_in?: DateTime[] | DateTime
  startTime_not_in?: DateTime[] | DateTime
  startTime_lt?: DateTime
  startTime_lte?: DateTime
  startTime_gt?: DateTime
  startTime_gte?: DateTime
  endTime?: DateTime
  endTime_not?: DateTime
  endTime_in?: DateTime[] | DateTime
  endTime_not_in?: DateTime[] | DateTime
  endTime_lt?: DateTime
  endTime_lte?: DateTime
  endTime_gt?: DateTime
  endTime_gte?: DateTime
  numWinners?: Int
  numWinners_not?: Int
  numWinners_in?: Int[] | Int
  numWinners_not_in?: Int[] | Int
  numWinners_lt?: Int
  numWinners_lte?: Int
  numWinners_gt?: Int
  numWinners_gte?: Int
  averagePrize?: Float
  averagePrize_not?: Float
  averagePrize_in?: Float[] | Float
  averagePrize_not_in?: Float[] | Float
  averagePrize_lt?: Float
  averagePrize_lte?: Float
  averagePrize_gt?: Float
  averagePrize_gte?: Float
  streamUrl?: String
  streamUrl_not?: String
  streamUrl_in?: String[] | String
  streamUrl_not_in?: String[] | String
  streamUrl_lt?: String
  streamUrl_lte?: String
  streamUrl_gt?: String
  streamUrl_gte?: String
  streamUrl_contains?: String
  streamUrl_not_contains?: String
  streamUrl_starts_with?: String
  streamUrl_not_starts_with?: String
  streamUrl_ends_with?: String
  streamUrl_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  questions_every?: QuestionWhereInput
  questions_some?: QuestionWhereInput
  questions_none?: QuestionWhereInput
}

export interface GameCreateOneWithoutQuestionsInput {
  create?: GameCreateWithoutQuestionsInput
  connect?: GameWhereUniqueInput
}

export interface QuestionUpsertWithWhereUniqueWithoutGameInput {
  where: QuestionWhereUniqueInput
  update: QuestionUpdateWithoutGameDataInput
  create: QuestionCreateWithoutGameInput
}

export interface GameUpsertWithoutQuestionsInput {
  update: GameUpdateWithoutQuestionsDataInput
  create: GameCreateWithoutQuestionsInput
}

export interface UserWhereUniqueInput {
  email?: String
  id?: ID_Input
}

export interface QuestionUpsertWithoutAnswersInput {
  update: QuestionUpdateWithoutAnswersDataInput
  create: QuestionCreateWithoutAnswersInput
}

export interface AnswerWhereInput {
  AND?: AnswerWhereInput[] | AnswerWhereInput
  OR?: AnswerWhereInput[] | AnswerWhereInput
  answerId?: Int
  answerId_not?: Int
  answerId_in?: Int[] | Int
  answerId_not_in?: Int[] | Int
  answerId_lt?: Int
  answerId_lte?: Int
  answerId_gt?: Int
  answerId_gte?: Int
  answer?: String
  answer_not?: String
  answer_in?: String[] | String
  answer_not_in?: String[] | String
  answer_lt?: String
  answer_lte?: String
  answer_gt?: String
  answer_gte?: String
  answer_contains?: String
  answer_not_contains?: String
  answer_starts_with?: String
  answer_not_starts_with?: String
  answer_ends_with?: String
  answer_not_ends_with?: String
  correct?: Boolean
  correct_not?: Boolean
  count?: Int
  count_not?: Int
  count_in?: Int[] | Int
  count_not_in?: Int[] | Int
  count_lt?: Int
  count_lte?: Int
  count_gt?: Int
  count_gte?: Int
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  question?: QuestionWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface Question extends Node {
  questionId: Int
  question?: String
  category?: String
  questionNumber?: Int
  questionCount?: Int
  askTime?: DateTime
  endTime?: DateTime
  advancingPlayersCount?: Int
  eliminatedPlayersCount?: Int
  game?: Game
  answers?: Answer[]
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AnswerPreviousValues {
  answerId: Int
  answer?: String
  correct?: Boolean
  count?: Int
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AnswerSubscriptionPayload {
  mutation: MutationType
  node?: Answer
  updatedFields?: String[]
  previousValues?: AnswerPreviousValues
}

export interface GamePreviousValues {
  startTime?: DateTime
  endTime?: DateTime
  numWinners?: Int
  averagePrize?: Float
  streamUrl?: String
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateAnswer {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface AnswerEdge {
  node: Answer
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface AnswerConnection {
  pageInfo: PageInfo
  edges: AnswerEdge[]
  aggregate: AggregateAnswer
}

/*
 * An edge in a connection.

 */
export interface QuestionEdge {
  node: Question
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateGame {
  count: Int
}

export interface QuestionPreviousValues {
  questionId: Int
  question?: String
  category?: String
  questionNumber?: Int
  questionCount?: Int
  askTime?: DateTime
  endTime?: DateTime
  advancingPlayersCount?: Int
  eliminatedPlayersCount?: Int
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface GameConnection {
  pageInfo: PageInfo
  edges: GameEdge[]
  aggregate: AggregateGame
}

export interface Game extends Node {
  startTime?: DateTime
  endTime?: DateTime
  numWinners?: Int
  averagePrize?: Float
  streamUrl?: String
  questions?: Question[]
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface QuestionSubscriptionPayload {
  mutation: MutationType
  node?: Question
  updatedFields?: String[]
  previousValues?: QuestionPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AggregateQuestion {
  count: Int
}

export interface GameSubscriptionPayload {
  mutation: MutationType
  node?: Game
  updatedFields?: String[]
  previousValues?: GamePreviousValues
}

export interface User extends Node {
  email: String
  password: String
  name: String
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserPreviousValues {
  email: String
  password: String
  name: String
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface QuestionConnection {
  pageInfo: PageInfo
  edges: QuestionEdge[]
  aggregate: AggregateQuestion
}

export interface Answer extends Node {
  answerId: Int
  answer?: String
  correct?: Boolean
  count?: Int
  question?: Question
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface GameEdge {
  node: Game
  cursor: String
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  games: (args: { where?: GameWhereInput, orderBy?: GameOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Game[]>
  questions: (args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Question[]>
  answers: (args: { where?: AnswerWhereInput, orderBy?: AnswerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Answer[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  game: (args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Game | null>
  question: (args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Question | null>
  answer: (args: { where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Answer | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  gamesConnection: (args: { where?: GameWhereInput, orderBy?: GameOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<GameConnection>
  questionsConnection: (args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<QuestionConnection>
  answersConnection: (args: { where?: AnswerWhereInput, orderBy?: AnswerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<AnswerConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createGame: (args: { data: GameCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Game>
  createQuestion: (args: { data: QuestionCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Question>
  createAnswer: (args: { data: AnswerCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Answer>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateGame: (args: { data: GameUpdateInput, where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Game | null>
  updateQuestion: (args: { data: QuestionUpdateInput, where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Question | null>
  updateAnswer: (args: { data: AnswerUpdateInput, where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Answer | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteGame: (args: { where: GameWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Game | null>
  deleteQuestion: (args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Question | null>
  deleteAnswer: (args: { where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Answer | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertGame: (args: { where: GameWhereUniqueInput, create: GameCreateInput, update: GameUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Game>
  upsertQuestion: (args: { where: QuestionWhereUniqueInput, create: QuestionCreateInput, update: QuestionUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Question>
  upsertAnswer: (args: { where: AnswerWhereUniqueInput, create: AnswerCreateInput, update: AnswerUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Answer>
  updateManyUsers: (args: { data: UserUpdateInput, where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyGames: (args: { data: GameUpdateInput, where: GameWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyQuestions: (args: { data: QuestionUpdateInput, where: QuestionWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyAnswers: (args: { data: AnswerUpdateInput, where: AnswerWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyGames: (args: { where: GameWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyQuestions: (args: { where: QuestionWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyAnswers: (args: { where: AnswerWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  game: (args: { where?: GameSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<GameSubscriptionPayload>>
  question: (args: { where?: QuestionSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<QuestionSubscriptionPayload>>
  answer: (args: { where?: AnswerSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<AnswerSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Game: (where: GameWhereInput): Promise<boolean> => super.existsDelegate('query', 'games', { where }, {}, '{ id }'),
    Question: (where: QuestionWhereInput): Promise<boolean> => super.existsDelegate('query', 'questions', { where }, {}, '{ id }'),
    Answer: (where: AnswerWhereInput): Promise<boolean> => super.existsDelegate('query', 'answers', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    games: (args, info): Promise<Game[]> => super.delegate('query', 'games', args, {}, info),
    questions: (args, info): Promise<Question[]> => super.delegate('query', 'questions', args, {}, info),
    answers: (args, info): Promise<Answer[]> => super.delegate('query', 'answers', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    game: (args, info): Promise<Game | null> => super.delegate('query', 'game', args, {}, info),
    question: (args, info): Promise<Question | null> => super.delegate('query', 'question', args, {}, info),
    answer: (args, info): Promise<Answer | null> => super.delegate('query', 'answer', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    gamesConnection: (args, info): Promise<GameConnection> => super.delegate('query', 'gamesConnection', args, {}, info),
    questionsConnection: (args, info): Promise<QuestionConnection> => super.delegate('query', 'questionsConnection', args, {}, info),
    answersConnection: (args, info): Promise<AnswerConnection> => super.delegate('query', 'answersConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createGame: (args, info): Promise<Game> => super.delegate('mutation', 'createGame', args, {}, info),
    createQuestion: (args, info): Promise<Question> => super.delegate('mutation', 'createQuestion', args, {}, info),
    createAnswer: (args, info): Promise<Answer> => super.delegate('mutation', 'createAnswer', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateGame: (args, info): Promise<Game | null> => super.delegate('mutation', 'updateGame', args, {}, info),
    updateQuestion: (args, info): Promise<Question | null> => super.delegate('mutation', 'updateQuestion', args, {}, info),
    updateAnswer: (args, info): Promise<Answer | null> => super.delegate('mutation', 'updateAnswer', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteGame: (args, info): Promise<Game | null> => super.delegate('mutation', 'deleteGame', args, {}, info),
    deleteQuestion: (args, info): Promise<Question | null> => super.delegate('mutation', 'deleteQuestion', args, {}, info),
    deleteAnswer: (args, info): Promise<Answer | null> => super.delegate('mutation', 'deleteAnswer', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertGame: (args, info): Promise<Game> => super.delegate('mutation', 'upsertGame', args, {}, info),
    upsertQuestion: (args, info): Promise<Question> => super.delegate('mutation', 'upsertQuestion', args, {}, info),
    upsertAnswer: (args, info): Promise<Answer> => super.delegate('mutation', 'upsertAnswer', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyGames: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyGames', args, {}, info),
    updateManyQuestions: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyQuestions', args, {}, info),
    updateManyAnswers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyAnswers', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyGames: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyGames', args, {}, info),
    deleteManyQuestions: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyQuestions', args, {}, info),
    deleteManyAnswers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyAnswers', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    game: (args, infoOrQuery): Promise<AsyncIterator<GameSubscriptionPayload>> => super.delegateSubscription('game', args, {}, infoOrQuery),
    question: (args, infoOrQuery): Promise<AsyncIterator<QuestionSubscriptionPayload>> => super.delegateSubscription('question', args, {}, infoOrQuery),
    answer: (args, infoOrQuery): Promise<AsyncIterator<AnswerSubscriptionPayload>> => super.delegateSubscription('answer', args, {}, infoOrQuery)
  }
}