import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, bookName, author, image, tags, category} = book

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className='bg-gray-300 py-8 m-6 rounded-2xl'>
                    <img className='h-[166px]' src={image} alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-8'>
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-100 text-green-500">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    {/* <div className="divider"></div> */}
                    <div className="card-actions justify-around">
                        <div className="badge badge-outline">{category}</div>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;