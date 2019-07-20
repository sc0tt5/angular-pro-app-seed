import { ScheduleItem } from '@core/models';

export interface ScheduleList {
    morning?: ScheduleItem;
    lunch?: ScheduleItem;
    evening?: ScheduleItem;
    snacks?: ScheduleItem;
    [key: string]: any;
}
