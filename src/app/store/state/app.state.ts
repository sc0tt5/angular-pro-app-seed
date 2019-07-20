import { AppState } from '@core/models';
// prettier-ignore
import { initialAuthState, initialMealsState, initialScheduleState, initialWorkoutState } from '@store/state';

export const initialAppState: AppState = {
    user: initialAuthState,
    meals: initialMealsState,
    selected: undefined,
    list: undefined,
    schedule: initialScheduleState,
    date: undefined,
    workouts: initialWorkoutState
};

export function getInitialState(): AppState {
    return initialAppState;
}
