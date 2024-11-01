import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../utility/utility";

const BookDetail = () => {

    // useParams ke call dile akta kore object day
    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)

    const { bookId: currentBookId, image, } = book

    const handleMarkAsRead = (id) => {
        /**
         * 1. understand what to store or save --> bookId
         * 2. where to store: database
         * 3. array, list, collection
         * 4. cheak: if the book is already in the readList.
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
        */

        addToStoreReadList(id)
    }

    return (
        <div className="my-12">
            <h2>Book Detail: {currentBookId}</h2>
            <img className="w-36" src={image} alt="" />
            <div className="my-6">
                <button onClick={() => handleMarkAsRead(id)} className="btn btn-outline mr-4 btn-accent">Mark to Read</button>
                <button className="btn btn-accent">Add to Wish List</button>
            </div>
        </div>
    );
};

export default BookDetail;