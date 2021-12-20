import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm() {
    return (
        <Segment clearing>
            <Header content="Create new event"/>
            <Form>
                <Form.Field>
                    <input type="text" placeholder="Event title"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Desciption"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Date"/>
                </Form.Field>
                <Button type="submit" positive floated="right" content="Submit"/>
                <Button type="submit" floated="right" content="Cancel"/>
            </Form>
        </Segment>
    )
}