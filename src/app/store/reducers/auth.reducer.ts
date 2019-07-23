import { Action, createReducer, on } from '@ngrx/store';
// import { getInitialState } from '@store/state';
import { AuthAction } from '@store/actions';
import { User } from '@core/models';
import { getInitialState } from '@store/state/app.state';

export const authReducer = createReducer(
    getInitialState().user,

    // get user
    on(AuthAction.getUser, state => ({ ...state })),
    on(AuthAction.getUserSuccess, (state, { user }) => ({ ...state, user })),
    on(AuthAction.getUserFail, (state, error) => ({ ...state, error })),

    // create user
    on(AuthAction.createUser, state => ({ ...state })),
    on(AuthAction.createUserSuccess, (state, { user }) => ({ ...state, user })),
    on(AuthAction.createUserFail, (state, error) => ({ ...state, error })),

    // login
    on(AuthAction.loginUser, state => ({ ...state, state })),
    on(AuthAction.loginUserSuccess, (state, { user }) => ({ ...state, user })),
    on(AuthAction.loginUserFail, (state, error) => ({ ...state, error })),

    // logout
    on(AuthAction.logoutUser, state => ({ ...state })),
    on(AuthAction.logoutUserSuccess, (state, { user }) => ({ ...state, user })),
    on(AuthAction.logoutUserFail, (state, error) => ({ ...state, error }))
);

export function reducer(state: User | undefined, action: Action) {
    return authReducer(state, action);
}
