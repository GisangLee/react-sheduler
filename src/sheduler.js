import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2020-06-23";
const schedulerData = [
  {
    startDate: "2020-06-23T09:45",
    endDate: "2020-06-23T11:00",
    title: "Meeting",
  },
  {
    startDate: "2020-06-23T12:00",
    endDate: "2020-06-23T13:30",
    title: "Go to a gym",
  },
];

function MySheculer() {
  return (
    <Paper>
      <Scheduler data={schedulerData}>
        <ViewState currentDate={currentDate} />
        <DayView startDayHour={9} endDayHour={24} />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}

export default MySheculer;
