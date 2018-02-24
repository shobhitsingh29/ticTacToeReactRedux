import React from 'react';
import {getRenderingData} from '../src/js/common/reselect/selector';

describe('test', () => {
    it('testing selector', () => {
        const it = getRenderingData();
        const getItems = { 'items': [{ 'id': '1', 'description': 'season1' }, { 'id': '2', 'description': 'season2' }] };
        const getSearchTerm = { 'match': { 'params': { 'id': '1' } } };
        const expectedOutput = [{ 'id': '1', 'description': 'season1' }];
        debugger;
        expect(it(getItems, getSearchTerm)).toEqual(expectedOutput);
    });
});
