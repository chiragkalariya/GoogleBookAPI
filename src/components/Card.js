import React, { useState } from 'react'
import Modal from './Modal';

const Card = ({book}) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    return (
        <>
            {
                book.map((i, k) => {
                    let thumbnail = i.volumeInfo.imageLinks && i.volumeInfo.imageLinks.smallThumbnail;    
                    let amount = i.saleInfo.listPrice && i.saleInfo.listPrice.amount;
                    if(thumbnail != undefined && amount != undefined) {
                        return (
                            <>
                                <div className="card" key={k} onClick={() => {setShow(true);setItem(i)}}>
                                    <img src={thumbnail} alt="" />
                                    <div className="card_caption">
                                        <h3 className='card_titlt'>{i.volumeInfo.title}</h3>
                                        <button className='btn w-100 card_amount'>&#8377;{amount}</button>
                                    </div>
                                </div>
                                <Modal show={show} i={bookItem} onClose={() => setShow(false)} />
                            </>
                        )
                    }
                })
            }
        </>
    )
}

export default Card
