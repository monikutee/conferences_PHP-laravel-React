import * as React from "react";
import apiFetch from "./services/api";
import { CalendarEvent } from "./types";

export const Context = React.createContext({
    isWeekLayout: true,
    setWeekLayout: (_flag: boolean) => {
        return;
    },
    modalVisibility: false,
    setModalVisibility: (_flag: boolean) => {
        return;
    },
    displayDate: new Date(),
    setDisplayDate: (_date: Date) => {
        return;
    },
    events: [],
    setEvents: (_events: any) => {
        return;
    },
    selectedEvent: null as unknown as CalendarEvent,
    setSelectedEvent: (_event: any) => {
        return;
    },
    user: "",
    setUser: (_user: string) => {
        return;
    },
    loginVisibility: false,
    setLoginVisibility: (_flag: boolean) => {
        return;
    },
    logout: () => {
        return;
    },
    csrfToken: "",
});

interface ContextProps {
    children: React.ReactNode;
    initialDisplayDate: Date;
    initialModalVisibility: boolean;
    initialIsWeekLayout: boolean;
    initialEventsArr: [];
}

export const ContextProvider: React.FC<ContextProps> = ({
    children,
    initialDisplayDate,
    initialModalVisibility,
    initialIsWeekLayout,
    initialEventsArr,
}) => {
    const [events, setEvents] = React.useState(initialEventsArr);
    const [displayDate, setDisplayDate] = React.useState(initialDisplayDate);
    const [modalVisibility, setModalVisibility] = React.useState(
        initialModalVisibility
    );
    const [loginVisibility, setLoginVisibility] = React.useState(false);
    const [isWeekLayout, setWeekLayout] = React.useState(initialIsWeekLayout);
    const [selectedEvent, setSelectedEvent] = React.useState<CalendarEvent>(
        null as unknown as CalendarEvent
    );
    const [user, setUser] = React.useState<string>("");
    const [csrfToken, setCsrfToken] = React.useState<string>("");

    React.useEffect(() => {
        apiFetch("/generate_token").then((response) => {
            setCsrfToken(response.csrf_token);
            console.log(response.csrf_token);
        });
        setUser(localStorage.getItem("access_token") ?? "");
    }, []);

    React.useEffect(() => {
        if (modalVisibility === false)
            apiFetch("/conferences", {
                method: "GET",
            }).then((res: any) => {
                setEvents(res);
            });
    }, [modalVisibility]);

    const logout = () => {
        localStorage.removeItem("access_token");
        setUser("");
    };

    return (
        <Context.Provider
            value={{
                csrfToken,
                user,
                setUser,
                selectedEvent,
                setSelectedEvent,
                isWeekLayout,
                setWeekLayout,
                modalVisibility,
                setModalVisibility,
                displayDate,
                setDisplayDate,
                events,
                setEvents,
                loginVisibility,
                setLoginVisibility,
                logout,
            }}
        >
            {children}
        </Context.Provider>
    );
};
