import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({ event, selectEvent, deleteEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item>
          <Item.Image size='tiny' circular src={event.hostPhotoURL} />
          <Item.Content>
            <Item.Header content={event.title} />
            <Item.Description>Hosted by {event.hostedBy}</Item.Description>
          </Item.Content>
        </Item>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          onClick={() => deleteEvent(event.id)}
          color='red'
          floated='right'
          content='Delete'
        />
        <Button
          //   onClick={() => selectEvent(event)}
          as={Link}
          to={`/events/${event.id}`}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </Segment.Group>
  );
}
