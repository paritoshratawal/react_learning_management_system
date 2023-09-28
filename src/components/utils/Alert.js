import Alert from 'react-bootstrap/Alert';

import React from 'react'

export default function AlertComponent(props) {
  console.log('props',props);
  return (
    <Alert variant={props.alertOptions.variant}>
      {props.alertOptions.message}
    </Alert>
  )
}