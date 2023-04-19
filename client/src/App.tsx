import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { ContextProvider, Context } from "./contextStore";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { WeekLayout } from "./components/WeekLayout/WeekLayout";
import { MonthLayout } from "./components/MonthLayout/MonthLayout";
import { EventCreationModal } from "./components/Modals/EventCreationModal/EventCreationModal";
import { Login } from "./components/Modals/Login";

function Calendar() {
    const { isWeekLayout, modalVisibility, loginVisibility } =
        React.useContext(Context);
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
                {loginVisibility ? <Login /> : null}
            </div>
        </>
    );
}

const App: React.FC<{ date: Date }> = ({ date }) => {
    return (
        <I18nextProvider i18n={i18n}>
            <ContextProvider
                initialDisplayDate={date}
                initialModalVisibility={false}
                initialIsWeekLayout={true}
                initialEventsArr={[]}
            >
                <Calendar />
            </ContextProvider>
        </I18nextProvider>
    );
};

export default App;
