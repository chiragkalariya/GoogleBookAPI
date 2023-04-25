import React, { useState } from 'react'
import Card from './Card'
import axios from 'axios';

const Main = () => {
    const [search, setsearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCoXEbOxrVvhDYDpMGWkM0ySboU1alDk8Q')
            .then((res) => setData(res.data.items))
            .catch((err) => console.log(err))
        }
    }
    return (
        <>
            <div className='header'>
                <div className="container">
                    <div className="row g-0">
                        <div className="col-6 d-flex align-items-center">
                            <h1>A room without books is like <br /> a boy without a soul.</h1>
                        </div>
                        <div className="col-6 header_left">
                            <h3>Find your book</h3>
                            <div className="search input-group">
                                <input 
                                    type="text" 
                                    value={search} 
                                    onChange={(e) => setsearch(e.target.value)} 
                                    onKeyPress={searchBook}
                                    className='form-control' 
                                    placeholder='Enter Book name Ex.React' />
                                <button className='btn btn-primary'>Search</button>
                            </div>
                            <img src="./images/img1.jpg" alt="book" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card_container">
                    {
                        <Card book={bookData} />
                    }
                </div>
            </div>
        </>
    )
}

export default Main
