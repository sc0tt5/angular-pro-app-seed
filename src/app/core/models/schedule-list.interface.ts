import { ScheduleItem } from '@core/models/schedule-item.interface';

export interface ScheduleList {
    morning?: ScheduleItem;
    lunch?: ScheduleItem;
    evening?: ScheduleItem;
    snacks?: ScheduleItem;
    [key: string]: any;
}
