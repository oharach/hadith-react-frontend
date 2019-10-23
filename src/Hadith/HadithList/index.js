import React from 'react';
import HadithItem from '../HadithItem';
import './style.css';

class HadithList extends React.Component {
  render() {
    var items = this.props.hadiths.map((item, index) => {
      return (
        <HadithItem   key    = {item.id}
                      hadith = {item} />
      );
    });
    return (
      <div dir="rtl"> {items} </div>
    );
  }
}

export default HadithList;