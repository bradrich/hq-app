import { forwardTo } from 'graphql-binding/dist/utils';

export const Query = {
  games: forwardTo('db'),
  game: forwardTo('db'),
  questions: forwardTo('db'),
  question: forwardTo('db'),
  answers: forwardTo('db'),
  answer: forwardTo('db')
}