import './Continent.css';
import { Link } from 'react-router-dom';

const Continent = () => {

    return (
        <div>
            <Link to='/asia'><button className='button'>Asia</button></Link>
            <Link to='/europe'><button className='button'>Europe</button></Link>
            <Link to='/africa'><button className='button'>Africa</button></Link>
        </div>
    )
}

export default Continent;