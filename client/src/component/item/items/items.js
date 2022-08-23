import './items.css';
import Item from "../item";

export default function items(props){
    const itemList = [
        {
            name: 'Un premier Tee-Shirt',
            price: '15.99',
            picture: "https://imgs.search.brave.com/uzJzl95dAsH5ZIuJ1B--njXkex_QRJmbYFJ7Soed-3U/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/eEFHYXhwVFVLbW9a/T1BpcHJZSl9BSGFI/YSZwaWQ9QXBp"
        },
        {
            name: 'Un deuxième tee-shirt',
            price: '9.99',
            picture: "https://imgs.search.brave.com/PYEy9mRuS1rNWqTzYU7PTN6IQfgQKwsKsdrzhazHi-0/rs:fit:377:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/anhSTXhRSnhHQXRw/eEdvUG5lNnFBSGFK/VCZwaWQ9QXBp"
        },
        {
            name:'Un 3ème tee-shirt',
            price:'5.50',
            picture:"https://imgs.search.brave.com/ZbC7FbxXs_eEOIIW04wRx33ZX-rQgpDazVgUA9WKGZ4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/X1YwYnpsaU1Objk5/QXRtUE1NcElRSGFF/OCZwaWQ9QXBp"
        },
        {
            name:'Un pantalon',
            price:'49.99',
            picture:"https://imgs.search.brave.com/u_ys6X8nFGoYYtbIMxnHutp0lqr-gIgXCMM-4-IFvYk/rs:fit:312:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/eVNYM1p6R3ZrakxU/RzI4RGtYX253SGFM/TyZwaWQ9QXBp"
        }
    ];
    return(
        itemList.map((item, key) =>
            
            <div className='items' key={key}>
                <Item  name={item.name} price={item.price} picture={item.picture}></Item>
            </div>
        )
    );
}