import React from 'react'

function NewsCard({title,link}) {
  return (
    <div className='news-card-container'>
        <p className='news-text'>{title}</p>
        <a className='news-link' href={`https://economictimes.indiatimes.com/${link}`} target='_blank'>Read More</a>
    </div>
  )
}

export default NewsCard