import React from 'react'
import Container from '.'

const JoifulDefaultTextInput = (props) =>
    <Container {...props}>
        <input
            className="joiful-react-forms"
            type="text"
            {...props}
        />
    </Container>

export default JoifulDefaultTextInput
