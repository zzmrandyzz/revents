import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from '../../features/home/HomePage';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import NavBar from '../../features/nav/NavBar';
import Sandbox from '../../features/sandbox/Sandbox';
import { useLocation } from 'react-router-dom';

export default function App() {
  const {key} = useLocation();
  return (
    <>
      <Route exact path="/" component={HomePage}/> 
      <Route path='/(.+)' render={() => (
        <>
        <NavBar/>
        <Container className="main">
          <Route exact path="/events" component={EventDashboard}/> 
          <Route exact path="/sandbox" component={Sandbox}/> 
          <Route path="/events/:id" component={EventDetailedPage}/> 
          <Route path={["/createEvent", "/manage/:id"]} component={EventForm} key={key}/> 
          {/* <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent} selectedEvent={selectedEvent} /> */}
        </Container>
        </>
      )}
      />
    </>
  );
}
