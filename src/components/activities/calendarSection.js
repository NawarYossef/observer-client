import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from 'react-calendar';
import '../styles/calendarSection.css';

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