//import React from 'react';
import { combineReducers } from 'redux';
import { dateReducer } from './DateInput/dateReducer';
//import {} from 'react-redux';

export const rootReducer = combineReducers({dateReducer});