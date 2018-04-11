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
    </section>
  );
}