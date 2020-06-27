import React from "react";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useState } from "react";

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
    id: 0,
  },
  {
    title: "디지털공학개론 시험",
    startDate: moment("2020-06-26T14:00"),
    endDate: moment("2020-06-26T14:00").add(1, "hours"),
    id: 1,
  },
  {
    title: "유티쿼터스 시험",
    startDate: moment("2020-06-26T11:00"),
    endDate: moment("2020-06-26T11:00").add(2, "hours"),
    id: 2,
  },
  {
    title: "PC활용 시험",
    startDate: moment("2020-06-23T10:00"),
    endDate: moment("2020-06-23T10:00").add(2, "hours"),
    id: 3,
  },
  {
    title: "C언어 시험",
    startDate: moment("2020-06-23T14:00"),
    endDate: moment("2020-06-23T14:00").add(1, "hours"),
    id: 4,
  },
  {
    title: "멀티미디어 시험",
    startDate: moment("2020-06-22T12:00"),
    endDate: moment("2020-06-22T12:00").add(1, "hours"),
    id: 5,
  },
];

const notToDisplay = [0, 6];

class MySheculer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      currentDate: moment().format("YYYY-MM-DD"),
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointmentId: undefined,
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointmentId = this.changeEditingAppointmentId.bind(
      this
    );
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointmentId(editingAppointmentId) {
    this.setState({ editingAppointmentId });
  }

  commitChanges({ added, changed, deleted }) {
    console.log("deleted", deleted);
    console.log("added", added);
    console.log("changed", changed);
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    console.log(this.state);
    const {
      currentDate,
      data,
      addedAppointment,
      appointmentChanges,
      editingAppointmentId,
    } = this.state;
    return (
      <Container>
        <Paper>
          <Scheduler data={data} height={660} locale={"ko-KR"}>
            <ViewState currentDate={currentDate} />
            <EditingState
              onCommitChanges={this.commitChanges}
              addedAppointment={addedAppointment}
              onAddedAppointmentChange={this.changeAddedAppointment}
              appointmentChanges={appointmentChanges}
              onAppointmentChangesChange={this.changeAppointmentChanges}
              editingAppointmentId={editingAppointmentId}
              onEditingAppointmentIdChange={this.changeEditingAppointmentId}
            />
            <WeekView
              startDayHour={9}
              endDayHour={19}
              excludedDays={notToDisplay}
            />
            <EditRecurrenceMenu />
            <ConfirmationDialog />
            <Appointments />
            <AppointmentTooltip showOpenButton showDeleteButton />
            <AppointmentForm />
          </Scheduler>
        </Paper>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export default MySheculer;
