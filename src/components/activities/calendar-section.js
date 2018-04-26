import React from "react";
import Calendar from 'react-calendar';
import './styles/calendar-section.css';

export default function CalendarSection(props) {
  return (
    <section className="calendar-wrapper">
      <Calendar
      value={props.currDate}
        onChange={(value) => props.onChange(value)}
      />
      {props.activitiesCount.length === props.activities.length ? <h3 className={"activities-count"}>* No activities today</h3> : <h3 className={"activities-count"}>Activities today: {props.activitiesCount.length}</h3> }
    </section>
  );
}