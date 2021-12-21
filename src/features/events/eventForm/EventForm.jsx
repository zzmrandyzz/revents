import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";

export default function EventForm({setFormOpen, setEvents, createEvent, selectedEvent}) {
    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    // console.log(initialValues instanceof Object)
    const [values, setValues] = useState(initialValues);
    
    function handleFormSubmit() {
        // console.log(values);
        createEvent({...values, id: cuid(), hostedBy: 'Bob', attendees:[], hostPhotoURL: '/assets/user.png'})
        setFormOpen(false);
    }

    function handleInputChange(e) {
        const {name,value} = e.target;
        setValues({...values, [name]: value})
    }

    return (
        <Segment clearing>
            <Header content="Create new event"/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" placeholder="Event title" name="title" value={values.title} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category" name="category" value={values.category} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Desciption" name="description" value={values.description} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City" name="city" value={values.city} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue" name="venue" value={values.venue} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date" name="date" value={values.date} onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Button type="submit" positive floated="right" content="Submit"/>
                <Button onClick={() => setFormOpen(false)} type="submit" floated="right" content="Cancel"/>
            </Form>
        </Segment>
    )
}