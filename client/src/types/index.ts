export interface SidebarCalendarDate {
    displayMonthDate: Date;
    setDisplayMonthDate: (date: Date) => void;
}

export interface ModalProps {
    selectedDate: string;
    setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
    selectedStartTime: string;
    setSelectedStartTime: React.Dispatch<React.SetStateAction<string>>;
    selectedEndTime: string;
    setSelectedEndTime: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description?: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    isTitleError: boolean;
    setTitleError: React.Dispatch<React.SetStateAction<boolean>>;
    isDateError: boolean;
    setDateError: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CalendarEvent {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    description?: string;
}

export interface CalendarEventAllStrings {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    description?: string;
}

export interface NewEvent {
    selectedDate: string;
    selectedStartTime: string;
    selectedEndTime: string;
    title: string;
    description?: string;
}
