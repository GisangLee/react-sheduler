import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";
import moment from "moment";
import styled from "styled-components";

// const currentDate = "2020-06-23";

//moment
const date = moment().format("YYYY-MM-DD");

const schedulerData = [
  {
    startDate: moment().add(2, "hours").format("YYYY-MM-DDThh:mm"),
    endDate: moment().add(3, "hours").format("YYYY-MM-DDThh:mm"),
    title: "Go to a gym",
  },
];

function MySheculer() {
  console.log(date);
  return (
    <>
      <Container>
        <Paper>
          <Scheduler data={schedulerData} height={660}>
            <WeekView startDayHour={8} endDayHour={24} />
            <Appointments />
            <AppointmentTooltip showCloseButton showOpenButton />
            <AppointmentForm />
          </Scheduler>
        </Paper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 50%;
  margin: 100px auto;
`;

export default MySheculer;
