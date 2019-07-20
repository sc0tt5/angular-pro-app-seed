import { Meal } from '@core/models/meal.interface';
import { Workout } from '@core/models/workout.interface';

export interface ScheduleItem {
    meals: Meal[];
    workouts: Workout[];
    section: string;
    timestamp: number;
}
