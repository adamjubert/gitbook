import React from 'react';

class LoadingSpinner extends React.Component {

  render() {
    return(
      <div className={ this.props.parentClass }>
        <div className='loading-spinner'>
          <img src='https://www.wallies.com/filebin/images/loading_apple.gif' />
        </div>
      </div>
    );
  }

}

export default LoadingSpinner;
