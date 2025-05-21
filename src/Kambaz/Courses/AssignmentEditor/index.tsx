import { Form, Button, Row, Col } from "react-bootstrap";

export function AssignmentEditor() {
  return (
    <div className="p-4">
      <h4>Edit Assignment</h4>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Text className="d-block text-danger mb-2">
            The assignment is <u>available online</u>
          </Form.Text>
          <Form.Control
            as="textarea"
            rows={7}
            defaultValue={`Submit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n• Your full name and section\n• Links to each of the lab assignments\n• Link to the Kanbas application\n• Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" defaultValue="100" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Assignment Group</Form.Label>
              <Form.Select defaultValue="ASSIGNMENTS">
                
                <option value="A">Group A</option>
                <option value="B">Group B</option>
                <option value="C">Group C</option>
                <option value="D">Group D</option>
                <option value="None">None</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Display Grade as</Form.Label>
              <Form.Select defaultValue="Percentage">
                <option value="PERCENTAGE">Percentage</option>
                <option value="GPA" >GPA</option>
                
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select className="mb-3" defaultValue="Online">
              <option value="A">Online</option>
              <option value="B">In person</option>
          </Form.Select>

          <Form.Label className="fw-bold">Online Entry Options</Form.Label>
          <div className="ms-2">
            <Form.Check label="Text Entry" />
            <Form.Check label="Website URL" defaultChecked />
            <Form.Check label="Media Recordings" />
            <Form.Check label="Student Annotation" />
            <Form.Check label="File Uploads" />
          </div>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Assign to</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" />
        </Form.Group>

        <Row className="mb-4">
          <Col md={4}>
            <Form.Label>Due</Form.Label>
            <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
          </Col>
          <Col md={4}>
            <Form.Label>Available from</Form.Label>
            <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
          </Col>
          <Col md={4}>
            <Form.Label>Until</Form.Label>
            <Form.Control type="datetime-local" />
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}