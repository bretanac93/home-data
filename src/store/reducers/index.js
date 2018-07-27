import { combineReducers } from 'redux';
import houses from './houses';

// In despite of existing only one reducer at the moment
// I will use combine reducers for compatibility in case of need
// of adding more reducers in the future.
export default combineReducers({
    houses
})