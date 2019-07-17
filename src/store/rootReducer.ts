import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import toDos from '../examples/ToDo/reducers/toDos';
import visibilityFilter from '../examples/ToDo/reducers/visibilityFilter';

export default (history: any) => combineReducers({
	router: connectRouter(history),
	toDos,
	visibilityFilter
});
