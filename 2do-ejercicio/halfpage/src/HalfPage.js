import React from 'react';

class HalfPage extends React.Component {
  render() {
        return(
            <div className={this.props.ubication}>
                 {this.props.children}
            </div>
        );
    }
}

export default HalfPage;