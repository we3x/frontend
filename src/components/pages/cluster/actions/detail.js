import { createAction } from 'redux-actions';
import { fetch } from '../../../../utils';
import { API_URL } from '../../../../backend_url';
import { CLUSTER_DETAIL } from '../constants';

const reset = createAction(CLUSTER_DETAIL, () => ({ status: 'initial' }));
const begin = createAction(CLUSTER_DETAIL, () => ({ status: 'pending' }));

const success = createAction(CLUSTER_DETAIL, cluster => ({
  cluster,
  roles: cluster.roles,
  status: 'success',
}));

const fail = createAction(CLUSTER_DETAIL, error => ({
  status: 'error',
  error,
}));

const get = id =>
  dispatch => {
    dispatch(begin());
    fetch({
      url: `${API_URL}/clusters/${id}`,
    })
      .then(cluster => {
        dispatch(success(cluster));
        return cluster;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };

const actions = {
  reset,
  begin,
  success,
  fail,
  get,
};

export default actions;
