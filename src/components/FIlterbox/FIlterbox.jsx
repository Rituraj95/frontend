import React from 'react';
import './FilterBox.css'; 
import { Button, Card, Form } from 'react-bootstrap';

const filterOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

const FilterBox = () => {
  return (
    <div className="filter-container">
     
      <div className='filter-boundary'>
        <div className="filter-box">
          <Card style={{
            textAlign: 'left',
            width: '95%',
            margin: '0 2.5% 1rem 2.5%',
          }}>
            <Card.Header as="h5">Filter Selection</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Select an Option</Form.Label>
                  <Form.Control as="select">
                    {filterOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
              <Button variant="primary" style={{ backgroundColor: '#0a75ad' }}>Apply Filter</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
