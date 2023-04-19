export const getMonthFirstDay = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth());
};

export const padWithZero = (num: number): string => {
    return num.toString().padStart(2, "0");
};

export const getYearMonthDayString = (date: Date): string => {
    const startDate = new Date(date);
    const month = padWithZero(startDate.getMonth() + 1);
    const day = padWithZero(startDate.getDate());
    const year = startDate.getFullYear();
    const newDate = year + "-" + month + "-" + day;
    return newDate;
};
export const getTimeHourString = (date: Date): string => {
    const startDate = date;
    const hour = padWithZero(startDate.getHours());
    const time = hour + ":00";
    return time;
};

export const addDay = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
};

export const getWeekStartDate = (startDate: Date): Date => {
    const day = startDate.getDay();
    return new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() - (day === 0 ? 7 : day) + 1
    );
};

export const isPreviousMonth = (date: Date, previous: Date): boolean => {
    if (previous.getFullYear() === date.getFullYear()) {
        return previous.getMonth() < date.getMonth();
    }
    return previous.getFullYear() < date.getFullYear();
};
export const isNextMonth = (date: Date, next: Date): boolean => {
    if (next.getFullYear() === date.getFullYear()) {
        return next.getMonth() > date.getMonth();
    }
    return next.getFullYear() > date.getFullYear();
};
export function isEqual(date: Date, now: Date): boolean {
    return (
        date.getDate() === now.getDate() &&
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth()
    );
}

export const nextWeek = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
};
export const previousWeek = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
};
export const nextMonth = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
};
export const previousMonth = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
};

export const getLongMonthYearString = (date: Date): string => {
    const displayDateString = date.toLocaleDateString("en-EN", {
        year: "numeric",
        month: "long",
    });

    return displayDateString;
};

export const getShortMonthYearString = (date: Date): string => {
    const displayDateString = date.toLocaleDateString("en-EN", {
        year: "numeric",
        month: "short",
    });

    return displayDateString;
};
