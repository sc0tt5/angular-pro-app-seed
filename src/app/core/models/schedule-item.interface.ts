import { Meal } from '@core/models';
import { Workout } from '@core/models';

export interface ScheduleItem {
    meals: Meal[];
    workouts: Workout[];
    section: string;
    timestamp: number;
}
