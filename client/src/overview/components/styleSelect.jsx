import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className='overview-styles-thumbnails-container' data-testid='style-select'>
        {this.props.styles.map(style => {
          return (
            <li className='overview-styles-imgs'>
              <img
                src={style.photos[0].thumbnail_url}
                className='overview-styles-img'
                height='50'
                width='50'>
              </img>
              <p>{style.name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default StyleSelector;