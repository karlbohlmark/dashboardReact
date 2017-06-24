import {
    Nothing,
    Just
} from 'data.maybe';
// import {
//     get
// } from 'utils';
import {
    SHOW_USERS
} from 'actions/ui/GoogleMap/';
export const initialState = {
    users: Nothing()
};

export function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case SHOW_USERS: {

            return {
                ...state,
                users: state.users.cata({
                    Just: entity => {
                        console.log('::::', entity);
                        return (Just({
                            ...entity,
                            [ payload.type ]: payload.value
                        }));
                    },
                    Nothing: () => {
                        console.log('::::');
                        return (Just({
                            [ payload.type ]: payload.value
                        }));
                    }
                })
            };
        }
        default: {
            return state;
        }
    }
}
