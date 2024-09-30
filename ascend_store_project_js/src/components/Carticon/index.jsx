import react from 'react'
import { Link } from 'react-router-dom';
import { CartRegular } from '@fluentui/react-icons';
//import { userCart } from '../../../context/Cartprovider';


function Carticon() {
   // const { cartQtd } =userCart();

    return (
        <Link to={`/checkout`} className='relative'>
        {/*<span className='absolut top-[-5px] right-[-5px] text-xs bg-red-600 rounded-full h-4 w-4 text-center text-white'>{ carQtd() } </span>*/}
            <div className="relative inline-block">
                <CartRegular className="w-8 h-8" />
                <span className="absolute top-[-5px] right-[-5px] bg-red-600 rounded-full h-4 w-4 flex items-center justify-center text-xs text-white">
                    2
                </span>
            </div>
        </Link>
    )
}

export default Carticon