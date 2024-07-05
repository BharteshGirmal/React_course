import React from 'react'

export default function NewsItem(props) {
  let { title, description, imageURL, newsURL , author, publishDate, source} = props;

  return (
    <div>
    <div className="card" style={{border: '1px solid black' }}>
      <img 
        src={imageURL ? imageURL : "https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2041456513.jpg?c=16x9&q=w_800,c_fill"} 
        className="card-img-top" 
        alt="..."
      />
       <div style={{display:'flex-end',justifyContent:'left', position:'absolute', right:'0'}}>
      <span className="badge rounded-pill bg-success" >
      {source}</span>
      </div>
      <div className="card-body">
 
    
        <h5 className="card-title">{title}
        </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small>by {author} on {new Date(publishDate).toJSON()}</small></p>
        <a rel="noreferrer" href={newsURL ? newsURL : "https://your-default-link.com"} target='_blank' className="btn btn-sm btn-dark">
          Learn More
        </a>
      </div>
    </div>
  </div>
  )
}

