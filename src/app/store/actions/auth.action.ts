import { User } from '@core/models';
import { createAction, props } from '@ngrx/store';

export const getUser = createAction('[User] Get User');
export const getUserFail = createAction('[User] Get User Fail', props<{ error: any }>());
export const getUserSuccess = createAction('[User] Get User Success', props<{ user: User }>());

export const createUser = createAction('[User] Create User');
export const createUserFail = createAction('[User] Create User Fail', props<{ error: any }>());
export const createUserSuccess = createAction(
    '[User] Create User Success',
    props<{ user: User }>()
);

export const loginUser = createAction(
    '[User] Login User',
    props<{ email: string; password: string }>()
);
export const loginUserFail = createAction('[User] Login User Fail', props<{ error: any }>());
export const loginUserSuccess = createAction('[User] Login User Success', props<{ user: User }>());

export const logoutUser = createAction('[User] Logout User');
export const logoutUserFail = createAction('[User] Logout User Fail', props<{ error: any }>());
export const logoutUserSuccess = createAction(
    '[User] Logout User Success',
    props<{ user: User }>()
);
/*
const actions = union({
    getUser,
    getUserFail,
    getUserSuccess,
    createUser,
    createUserFail,
    createUserSuccess,
    loginUser,
    loginUserFail,
    loginUserSuccess,
    logoutUser,
    logoutUserFail,
    logoutUserSuccess
});

// export action types
export type ActionUnion = typeof actions;
 */
