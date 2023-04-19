import * as React from "react";
import apiFetch from "./services/api";

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
});

interface ContexProps {
    children: React.ReactNode;
    initialDisplayDate: Date;
    initialModalVisibility: boolean;
    initialIsWeekLayout: boolean;
    initialEventsArr: [];
}

export const ContextProvider: React.FC<ContexProps> = ({
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
    const [isWeekLayout, setWeekLayout] = React.useState(initialIsWeekLayout);

    React.useEffect(() => {
        apiFetch("/conferences", {
            method: "GET",
        }).then((res: any) => {
            console.log(res, "AS");
            setEvents(res);
        });
    }, [modalVisibility]);

    return (
        <Context.Provider
            value={{
                isWeekLayout,
                setWeekLayout,
                modalVisibility,
                setModalVisibility,
                displayDate,
                setDisplayDate,
                events,
                setEvents,
            }}
        >
            {children}
        </Context.Provider>
    );
};
