export interface SidebarCalendarDate {
    displayMonthDate: Date;
    setDisplayMonthDate: (date: Date) => void;
}

export interface CalendarEvent {
    id: string;
    title: string;
    start_date: Date;
    end_date: Date;
    description: string;
    participant_count: number;
    address: string;
}

export interface User {
    email: string;
    password: string;
}
