import { useState } from 'react';
import './Form.css';

function ShopForm()
{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e =>
    {
        e.preventDefault();
        console.log("Name: " + name + ",\nDescription: " + description);
        alert(`Name: ${name},\nDescription: ${description}`);
    };

    return (
        <div>
            <h2>New Shop</h2>
            <form onSubmit={handleSubmit}>
                <div><label htmlFor='name'> Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div><label htmlFor='description'> Description: </label>
                    <input type="text" name="description" id="description" placeholder="Enter description" onChange={e => setDescription(e.target.value)} />
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