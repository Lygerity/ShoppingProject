import './items.css';
import Item from "../item";

export default function items(props){
    const itemList = [
        {
            name: 'Un premier Tee-Shirt',
            price: '15.99',
            picture: 'https://www.google.com/aclk?sa=l&ai=DChcSEwij_ITmz9P5AhXDhtUKHVslDmMYABAHGgJ3cw&sig=AOD64_3E0QL19GnMiUugquUSw1xuWqQ9Aw&adurl&ctype=5&ved=2ahUKEwijvvblz9P5AhW9hM4BHVctB8cQvhd6BQgBEIMB'},
        {
            name: 'Un deuxième tee-shirt',
            price: '9.99',
            picture: 'https://www.google.com/aclk?sa=l&ai=DChcSEwij_ITmz9P5AhXDhtUKHVslDmMYABAFGgJ3cw&sig=AOD64_0HXfIe149MI0BbcA6jmUIgzni-aw&adurl&ctype=5&ved=2ahUKEwijvvblz9P5AhW9hM4BHVctB8cQvhd6BAgBEHw'
        }
    ];
    return(
        itemList.map((item, key) =>
            <div className='items'>
                <Item key={key} name={item.name} price={item.price} picture={item.picture}></Item>
            </div>
        )
    );
}