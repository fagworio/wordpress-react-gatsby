import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import innertext from 'innertext'
import {Link} from 'gatsby'

const Post = (props) => {
  return (
    <main>
      <div className="p-3">
        <Card>
          <Card.Img variant="top"  src={props.image} alt={innertext(props.title) || "default" } title={innertext(props.title) || "default"} />
          <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{__html: props.title }} />
          <Card.Text>
            <div  dangerouslySetInnerHTML={{__html: props.excerpt }} />
          </Card.Text>
          <Button variant="warning" as={Link} to={props.readMore}>Read More...</Button>
          </Card.Body>
        </Card>
      </div>
    </main>
  )
}

export default Post
