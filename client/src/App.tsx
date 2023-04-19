import React from "react";
import { ContextProvider, Context } from "./contextStore";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { WeekLayout } from "./components/WeekLayout/WeekLayout";
import { MonthLayout } from "./components/MonthLayout/MonthLayout";
import { EventCreationModal } from "./components/EventCreationModal/EventCreationModal";

function Calendar() {
    const { isWeekLayout, modalVisibility } = React.useContext(Context);
    return (
        <>
            <Navbar />
            <div className="wrap">
                <Sidebar />
                <div className="container">
                    {isWeekLayout ? <WeekLayout /> : null}
                    {!isWeekLayout ? <MonthLayout /> : null}
                </div>
                {modalVisibility ? <EventCreationModal /> : null}
            </div>
        </>
    );
}

const App: React.FC<{ date: Date }> = ({ date }) => {
    return (
        <ContextProvider
            initialDisplayDate={date}
            initialModalVisibility={false}
            initialIsWeekLayout={true}
            initialEventsArr={[]}
        >
            <Calendar />
        </ContextProvider>
    );
};

export default App;
