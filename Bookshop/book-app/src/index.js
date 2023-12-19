import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';




const BookList = () => {
    return (
        <>
        <h1>Amazon best sellers</h1>
        <section className='booklist'>
        {books.map((book,index) => {
            return <Book {...book} key={book.id} number={index} />;
        })}
        </section>
        </>
    );
};

const EventExamples = () => {
    const handleFormInput = () => {
        console.log('handle form input');
    };
    const handleButtonClick = () => {
        alert('handle button click');
    };
    const handleFormSubmission = (e) => {
        e.preventDefault();
       console.log('form submitted');
    };
    return (
    <section>
        <form onSubmit={handleFormSubmission}>
            <h2>Typical form</h2>
            <input type='text' name='product' onChange={handleFormInput} style={{margin: '1rem 0' }}/>
        </form>
        <button type='submit' onClick={handleFormSubmission}>submit</button>
        <div>
         <button onClick={handleButtonClick} type='button'>click me</button>
        </div>
    </section>
    );
};




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);