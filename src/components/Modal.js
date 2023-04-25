import React from 'react'

const Modal = ({show, i, onClose}) => {
    if (!show) {
        return null
    }
    console.log(i);
    let thumbnail = i.volumeInfo.imageLinks && i.volumeInfo.imageLinks.smallThumbnail; 
    return (
        <div className='overlay'>
            <div className="overlay_inner">
                <button className='close' onClick={onClose}>close</button>
                <div className="inner_box">
                    <img src={thumbnail} alt="" />
                    <div className="info">
                        <h1>{i.volumeInfo.title}</h1>
                        <h3>{i.volumeInfo.authors}</h3>
                        <h4>{i.volumeInfo.publisher}<span>{i.volumeInfo.publishedDate}</span></h4>
                        <a href={i.volumeInfo.previewLink}><button className='btn btn-primary'>More</button></a>
                    </div>
                </div>
                <h4>{i.volumeInfo.description}</h4>
            </div>
        </div>
    )
}

export default Modal
