import React from 'react';
import { Row, Col } from 'react-bootstrap'

const QualidadeSenha = props => {
  var strColor;
  var strWidth;

  switch (props.score) {
    case 1:
      strColor = 'red';
      strWidth = '20%';
      break;
    case 2:
      strColor = 'orange';
      strWidth = '40%';
      break;
    case 3:
      strColor = 'yellow';
      strWidth = '60%';
      break;
    case 4:
      strColor = '#5cff47';
      strWidth = '80%';
      break;
    case 5:
      strColor = 'green';
      strWidth = '100%';
      break;
    default:
  }

  var style = { backgroundColor: strColor, height: '5px', width: strWidth, transition: 'all 300ms ease-in-out' }

  return (
  <div>
    <Row>
        <Col><p className="pwStrWeak">fraco</p></Col>
        <Col><p className="pwStrStrong">forte</p></Col>
    </Row>
  
    <div style={style} />
  </div> 
  );

}

export default QualidadeSenha;