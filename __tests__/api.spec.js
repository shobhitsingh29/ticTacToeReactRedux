import { join } from 'path';
import React from 'react';
import * as actionTypes from '../src/js/actiontypes/actionTypes';
import {getData, updateData} from '../src/js/common/api/api';

describe('apiHelper', () => {
    it('getAllCards should call getRequest', () => {
        apiHelper.getAllCards();

        expect(getData).toHaveBeenCalledWith(join("http://localhost:3000/tilesData", apiConfig.cards));
    })

    it('getCardDetails should call getRequest', () => {
        const id = '9';
        apiHelper.getCardDetails(id);

        expect(apiHelper.getRequest).toHaveBeenCalledWith(join(apiConfig.baseUrl, apiConfig.cards, id));
    })

    it('postCardDetails should call postRequest', () => {
        const id = '9';
        const payload= {location: 'Jaipur'};
        apiHelper.postCardDetails(id, payload);

        expect(apiHelper.postRequest).toHaveBeenCalledWith(join(apiConfig.baseUrl, apiConfig.cards, id), payload);
    })

    it('getImage should return image url', () => {
        const imageUrl = 'abc.png';

        expect(apiHelper.getImage(imageUrl)).toEqual(join(apiConfig.baseUrl, apiConfig.images, imageUrl));
    })
})
