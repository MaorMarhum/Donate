import React from 'react';
import './Article.css'
import Data from '../../constans/Data'

const Article = () => {
    return (
        <div className='donate__article'>
            {Data.map((item) => {
                const { id, title, img, desc, distance } = item
                return (
                    <article key={id} className='donate__article-item'>
                        <img width={240} src={img} className='photo' alt='itemimg' />
                        <div className="donate__article-item_info">
                            <header>
                                <h3 className='donate__article-item_info-distance'>{distance}km Away From You</h3>
                                <h4>{title}</h4>
                            </header>
                            <p className='donate__article-item_info-text'>{desc}</p>
                        </div>
                        <div className='donate__article-item_button'>
                            <button type='button'>Contact</button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Article;