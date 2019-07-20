import { Meal, ScheduleItem, User, Workout } from '.';

export interface AppState {
    user: User;
    meals: Meal[];
    selected: any;
    list: any;
    schedule: ScheduleItem[];
    date: Date;
    workouts: Workout[];
    [key: string]: any;
}
