import React from "react";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useState, useEffect } from "react";

moment.lang("ko", {
  weekdays: ["월요일", "화요일", "수요일", "목요일", "금요일"],
  weekdaysShort: ["월", "화", "수", "목", "금"],
});

const currentDate = moment().format("YYYY-MM-DD");

const data = [
  {
    title: "전산개론 시험",
    startDate: moment("2020-06-26T17:00"),
    endDate: moment("2020-06-26T17:00").add(1, "hours"),
    allDay: false,
  },
  {
    title: "디지털공학개론 시험",
    startDate: moment("2020-06-26T14:00"),
    endDate: moment("2020-06-26T14:00").add(1, "hours"),
    allDay: false,
  },
  {
    title: "유티쿼터스 시험",
    startDate: moment("2020-06-26T11:00"),
    endDate: moment("2020-06-26T11:00").add(2, "hours"),
    allDay: false,
  },
  {
    title: "PC활용 시험",
    startDate: moment("2020-06-23T10:00"),
    endDate: moment("2020-06-23T10:00").add(2, "hours"),
    allDay: false,
  },
  {
    title: "C언어 시험",
    startDate: moment("2020-06-23T14:00"),
    endDate: moment("2020-06-23T14:00").add(1, "hours"),
    allDay: false,
  },
  {
    title: "멀티미디어 시험",
    startDate: moment("2020-06-22T12:00"),
    endDate: moment("2020-06-22T12:00").add(1, "hours"),
    allDay: false,
  },
];

const notToDisplay = [0, 6];

function MySheculer() {
  const [state, setState] = useState();

  useEffect(() => {
    setState(data);
  }, []);

  console.log(state);

  return (
    <Container>
      <Paper>
        <Scheduler data={data} height={660} locale={"ko-KR"} firstDayOfWeek={1}>
          <ViewState defaultCurrentDate={currentDate} />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            excludedDays={notToDisplay}
          />
          <Appointments />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export default MySheculer;
