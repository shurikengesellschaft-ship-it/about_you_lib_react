import './Breadcrumbs_u837.css'
import IcArrowR from '../assets/ic-arrow-right-Bv-Mt_7834.svg'

export const Breadcrumbs_u837 = () => {
    return (
        <ul data-testid='Breadcrumbs' className='btig345kj'>
            <li className='it345j'>
                <span className='k55rtj'>Man</span>
            </li>
            <li className='it345j'>
                <img src={IcArrowR} alt="" className='pyu24tgyju' />
                <span className='k55rtj'>Clothing</span>
            </li>
            <li className='it345j'>
                <img src={IcArrowR} alt="" className='pyu24tgyju' />
                <span className='k55rtj'>T-Shirt</span>
            </li>
        </ul>
    )
}