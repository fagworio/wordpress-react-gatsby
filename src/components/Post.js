import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Post = (props) => {
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>{ props.title }</Card.Title>
        <Card.Text>
          { props.excerpt }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post
