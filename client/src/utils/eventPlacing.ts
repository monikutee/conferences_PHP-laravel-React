import { CalendarEvent } from "../types";
import { compareEventsByStartDate } from "./layoutHelper";

export function sortEventsAndCountNeighbours(arrayOfEvents: CalendarEvent[]): {
    event: CalendarEvent;
    indexOfEvent: number;
}[] {
    const sortedEvents = arrayOfEvents.sort(compareEventsByStartDate);

    return sortedEvents.map((currentEvent, index, arr) => {
        let eventNeighbor = 1;

        for (let i = 0; i < arr.length; i++) {
            if (i >= index) {
                break;
            }
            if (isNeighbor(arr[i], currentEvent)) {
                eventNeighbor++;
            }
        }
        return { event: currentEvent, indexOfEvent: eventNeighbor };
    });
}

function isNeighbor(eventOne: CalendarEvent, eventTwo: CalendarEvent): boolean {
    const startA = new Date(eventOne.start_date);
    const endA = new Date(eventOne.end_date);
    const startB = new Date(eventTwo.start_date);
    const endB = new Date(eventTwo.end_date);

    const eventTwoStartsDuringOne =
        startA.getTime() <= startB.getTime() &&
        endA.getTime() > startB.getTime();
    const eventTwoFinishesDuringOne =
        startA.getTime() < endB.getTime() && endA.getTime() >= endB.getTime();
    const eventTwoEngulfsOne =
        startA.getTime() >= startB.getTime() &&
        endA.getTime() <= endB.getTime();
    return (
        eventTwoFinishesDuringOne ||
        eventTwoStartsDuringOne ||
        eventTwoEngulfsOne
    );
}

export const getEventPosition = (
    startHours: number,
    endHours: number,
    startMinutes: number,
    endMinutes: number,
    index: number
): {
    top: number;
    bottom: number;
    width: number;
    left: number;
} => {
    let bottom =
        (endHours - startHours - 1) * 100 +
        (endHours - startHours) +
        (endMinutes * 100) / 60;
    if (endHours >= startHours) {
        bottom *= -1;
    }
    let left = (90 / index) * (index - 1);
    if (index === 1) {
        left = 0;
    }
    return {
        top: (startMinutes * 100) / 60,
        bottom: bottom,
        width: 90 / index,
        left: left,
    };
};
