import React from 'react';
import { Button } from 'reactstrap';

export default class StatusButton extends React.Component {
  constructor(props) {
    super(props);
  }

  displayButton(item) {
    return (
      <Button color="secondary" {...item.handlers}>
        {item.text}
      </Button>
    )
  }

  render() {
    const { item } = this.props;

    return (
      <div>
        {this.displayButton(item)}
      </div>
    )
  }

}

