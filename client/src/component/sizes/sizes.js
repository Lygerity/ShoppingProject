import './sizes.css'
export default function sizes(){
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

    return(
        sizeList.map((size, key) => 
            <div className="Size" key={key}>
                <label>
                    <input type="checkbox" value={size.name}/>
                        <span className='checkbox'>{size.name}</span>
                </label>
            </div>
        )
    );
}