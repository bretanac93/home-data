import { combineReducers } from 'redux';
import providers from './providers';

// In despite of existing only one reducer at the moment
// I will use combine reducers for compatibility in case of need
// of adding more reducers in the future.
export default combineReducers({
    providers
})