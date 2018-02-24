import * as types from "../actiontypes/actionTypes";


export function selectFunction(index) {
    return {
        type: types.SELECT,
        idx: index
    };
}
export function resetFunction() {
    return {
        type: types.RESET
    };
}