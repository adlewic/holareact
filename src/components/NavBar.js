import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    const { sections } = this.props;
    const renderSections = sections.map(section => <li>{ section }</li>);
    return (
      <nav>
        <ul>
          { renderSections }
        </ul>
      </nav>
    )
  }
}

export default NavBar;
