import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
  return <form onSubmit={event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
  }}>
    <Form.Field>
      <Form.Label>Name</Form.Label>
      <Form.Control>
        <Form.Input
          name="name"
        />
        <Icon align="left" size="small">
          <i className="fas fa-user" />
        </Icon>
        <Icon align="right" size="small">
          <i className="fas fa-check" />
        </Icon>
      </Form.Control>
    </Form.Field>

    <Form.Field>
      <Form.Label>Email</Form.Label>
      <Form.Control>
        <Form.Input
          name="email"
        />
        <Icon align="left" size="small">
          <i className="fas fa-envelope" />
        </Icon>
        <Icon align="right" size="small">
          <i className="fas fa-exclamation-triangle" />
        </Icon>
      </Form.Control>
    </Form.Field>


    <Form.Field>
      <Form.Label>Reason For Contacting</Form.Label>
      <Form.Control>
        <div>
          <Form.Checkbox>
            Great Experience
          </Form.Checkbox>
        </div>
        <div>
          <Form.Checkbox>
            Questions about food ingredients
          </Form.Checkbox>
        </div>
        <div>
          <Form.Checkbox>
            Catering
          </Form.Checkbox>
        </div>
        <div>
          <Form.Checkbox>
            Bad Experience
          </Form.Checkbox>
        </div>
      </Form.Control>
    </Form.Field>

    <Form.Field>
      <Form.Label>Message</Form.Label>
      <Form.Control>
        <Form.Textarea
          placeholder="Enter your message here"
        />
      </Form.Control>
    </Form.Field>

    <Form.Field kind="group">
      <Form.Control>
        <Button color="link">Submit</Button>
      </Form.Control>
      <Form.Control>
        <Button color="link" colorVariant="light">
          Cancel
        </Button>
      </Form.Control>
    </Form.Field>

  </form>
}