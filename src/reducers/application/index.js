import { APPLICATION_DETAIL } from '../../constants/ActionTypes';

export default function applicationDetail(state = { status: 'initial' }, action) {
  switch (action.type) {
    case APPLICATION_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
