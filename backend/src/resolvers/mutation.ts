import { forwardTo } from 'graphql-binding/dist/utils';

export const Mutation = {
  createGame: forwardTo('db'),
  updateGame: forwardTo('db'),
  deleteGame: forwardTo('db'),
  createQuestion: forwardTo('db'),
  updateQuestion: forwardTo('db'),
  deleteQuestion: forwardTo('db'),
  createAnswer: forwardTo('db'),
  updateAnswer: forwardTo('db'),
  deleteAnswer: forwardTo('db')
}