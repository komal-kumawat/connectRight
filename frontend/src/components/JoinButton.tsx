import React from 'react'
import Button from './Button'

interface JoinButtonProps {
  text: string;
}

const JoinButton = ({text}:JoinButtonProps) => {
    return (
        <Button color="white" bgColor="black" text={text} />
    )
}

export default JoinButton
