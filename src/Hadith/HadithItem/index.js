import React from 'react';
import './style.css';

export default class HadithItem extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <p key={this.props.hadith.id} className="HadithItem"> {this.props.hadith.textAr} </p>
          {
            this.props.hadith.comment.map((item) =>
              <p key={item.id} className="HadithItemComment">{item.textAr}</p>
            )
          }
        </div>
      </div>
    );
  }
}