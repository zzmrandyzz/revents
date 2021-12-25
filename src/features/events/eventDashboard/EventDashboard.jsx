import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);
  // const events = useSelector(state => state.event.events)

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filter</h2>
      </Grid.Column>
    </Grid>
  );
}
