import { useDispatch } from 'react-redux';
import { filterBySize } from '../../actions/items';
import './sizes.css'
export default function Sizes({isFilter, setFilter}){
    const sizeList = [
        {
            name:'XS'
        },
        {
            name: 'S'
        },
        {
            name: 'M'
        },
        {
            name: 'L'
        },
        {
            name: 'XL'
        }
    ];
    const dispatch = useDispatch();

    const handleClick = (size) =>{
        dispatch(filterBySize(size))
        setFilter(!isFilter);
    }

    return(
        sizeList.map((size, key) => 
            <div className="Size" key={key}>
                <label>
                    <input type="checkbox" value={size.name} onClick={() => handleClick(size.name)}/>
                        <span className='checkbox'>{size.name}</span>
                </label>
            </div>
        )
    );
}