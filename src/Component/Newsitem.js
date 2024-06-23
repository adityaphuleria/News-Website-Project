import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{ display: 'flex', justifyContent: 'flex-end ', position: 'absolute', right: '0' }}>
            <span className=" badge rounded-pill bg-success" >
              {source}
            </span>
          </div>
          <img src={imageUrl ? imageUrl : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/oneplus-nord-ce-4-015358655-16x9_1.jpg?VersionId=loYvt7LZanqQ_bNbreg9w4tDYzXL6RFn"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" >{title}...   </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl}
              //  target="_blank" 
              className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem

