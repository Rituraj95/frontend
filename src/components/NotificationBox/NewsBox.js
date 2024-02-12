import React from 'react'
import './NewsBox.css'
import { Button, Card } from 'react-bootstrap';

const newsItems = [
    'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
    'News Item 4',
    // Add more news items as needed
  ];
const NewsBox = () => {
  return (
    <div className="newsfeed-container">
        <h4 className='newsfeed-header'>Information Bulletin</h4>
        <div className='newsfeed-boundary'>
          <div className="newsfeed">
            {newsItems.map((item, index) => (
            <Card style={{ 
                textAlign:'left', 
                width:'95%', 
                margin:'0 2.5% 1rem 2.5%', 
                // position:'absolute',
                // zIndex:'-100' 
              }}>
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  {item}
                </Card.Text>
                <Button variant="primary" style={{ backgroundColor:'#0a75ad' }}>more...</Button>
              </Card.Body>
            </Card>
            ))}
          </div>

        </div>
    </div>
  )
}

export default NewsBox