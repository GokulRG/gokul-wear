import { CART_ACTION_TYPES } from './cart-action-types';

export const toggleCartHidden = () => {
    return {
        type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN
    };
};

export const addItem = (item) => {
    return {
        type: CART_ACTION_TYPES.ADD_ITEM,
        payload: item
    };
};