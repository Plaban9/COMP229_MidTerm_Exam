import { useState } from 'react';
import './Form.css';

function ShopForm()
{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = e =>
    {
        e.preventDefault();
        console.log("Name: " + name + ",\nDescription: " + description + ",\nCatergory: " + category + ",\nQuantity: " + quantity + ",\nPrice: " + price);
        alert(`Name: ${name},\nDescription: ${description},\nCatergory: ${category},\nQuantity: ${quantity},\nPrice: ${price}`);
    };

    return (
        <div>
            <h2>New Product</h2>
            <form onSubmit={handleSubmit}>
                <div><label htmlFor='name'> Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div><label htmlFor='description'> Description: </label>
                    <input type="text" name="description" id="description" placeholder="Enter description" onChange={e => setDescription(e.target.value)} />
                </div>
                <div><label htmlFor='category'> Category: </label>
                    <input type="text" name="category" id="category" placeholder="Enter category" value={name} onChange={e => setCategory(e.target.value)} />
                </div>
                <div><label htmlFor='quantity'> Quantity: </label>
                    <input type="text" name="quantity" id="quantity" placeholder="Enter quantity" onChange={e => setQuantity(e.target.value)} />
                </div>
                <div><label htmlFor='price'> Price: </label>
                    <input type="text" name="price" id="price" placeholder="Enter price" value={name} onChange={e => setPrice(e.target.value)} />
                </div>
                <br />
                <input type="submit" value="SUBMIT" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="submit" value="CANCEL" />
            </form>
        </div>
    );
}

export default ShopForm;