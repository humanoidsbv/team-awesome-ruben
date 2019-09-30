import { all, fork } from 'redux-saga/effects';

import { teamMembersSagas } from './team-members';
import { timeEntriesSagas } from './time-entries';

export default function* root() {
  yield all([fork(timeEntriesSagas), fork(teamMembersSagas)]);
}
