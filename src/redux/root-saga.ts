import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { clientsSagas } from './clients';
import { teamMembersSagas } from './team-members';
import { timeEntriesSagas } from './time-entries';

export default function* root(): SagaIterator {
  yield all([
    fork(clientsSagas),
    fork(teamMembersSagas),
    fork(timeEntriesSagas)
  ]);
}
