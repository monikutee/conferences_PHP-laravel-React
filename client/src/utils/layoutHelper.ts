import {
    getMonthFirstDay,
    getWeekStartDate,
    addDay,
    padWithZero,
    getYearMonthDayString,
} from "./dateHelper";
import { DISPLAY_LIMIT, WEEKDAYS_NUMBER, DAY_HOURS } from "../constants";
import { CalendarEvent } from "../types";

export function getMonthDays(date: Date): Date[] {
    const arr = [];
    const firstDayOfDisplayMonth = getMonthFirstDay(date);
    let dateToRender = getWeekStartDate(firstDayOfDisplayMonth);
    for (
        let i = 0;
        i < DISPLAY_LIMIT;
        i++, dateToRender = addDay(dateToRender)
    ) {
        arr.push(dateToRender);
    }
    return arr;
}

export function getWeekDays(date: Date): Date[] {
    const arr = [];
    let dateToRender = getWeekStartDate(date);
    for (
        let i = 0;
        i < WEEKDAYS_NUMBER;
        i++, dateToRender = addDay(dateToRender)
    ) {
        arr.push(dateToRender);
    }
    return arr;
}

export function getWeekHours(date: Date): Date[] {
    const arr = [];
    let dateToRender = getWeekStartDate(date);
    for (let i = 0; i < DAY_HOURS; i++, dateToRender = addDay(dateToRender)) {
        arr.push(new Date(dateToRender.setHours(dateToRender.getHours() + i)));
    }
    return arr;
}

export function createTimeline(): string[] {
    const timeline = new Array(DAY_HOURS - 1)
        .fill(0)
        .map((_, idx) => padWithZero(idx + 1));

    return timeline;
}

export function getByIdOrError(id: string): HTMLElement {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`#${id} does not exist`);
    }
    return element;
}

export function compareEventsByStartDate(
    a: CalendarEvent,
    b: CalendarEvent
): number {
    return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
}

export function getEventsByHour(
    selectedDay: Date,
    events: CalendarEvent[]
): CalendarEvent[] {
    return getSortedEventsByCallback(events, (event: CalendarEvent) => {
        const formatedSelectedDay = getYearMonthDayString(
            new Date(selectedDay)
        );
        const startDate = getYearMonthDayString(new Date(event.start_date));
        return (
            formatedSelectedDay === startDate &&
            selectedDay.getHours() === new Date(event.start_date).getHours()
        );
    });
}

export function getEventsByDay(
    selectedDay: Date,
    events: CalendarEvent[]
): CalendarEvent[] {
    return getSortedEventsByCallback(events, (event: CalendarEvent) => {
        const formatedSelectedDay = getYearMonthDayString(selectedDay);
        const startDate = getYearMonthDayString(event.start_date);
        return formatedSelectedDay === startDate;
    });
}

function getSortedEventsByCallback(
    events: CalendarEvent[],
    callback: (event: CalendarEvent) => boolean
) {
    return events.filter(callback).sort(compareEventsByStartDate);
}

export function getEventTime(event: CalendarEvent): {
    startTime: string;
    endTime: string;
} {
    const startHours = new Date(event.start_date).getHours();
    const startMinutes = new Date(event.start_date).getMinutes();
    const endHours = new Date(event.end_date).getHours();
    const endMinutes = new Date(event.end_date).getMinutes();

    return {
        startTime: startHours + ":" + padWithZero(startMinutes),
        endTime: endHours + ":" + padWithZero(endMinutes),
    };
}
