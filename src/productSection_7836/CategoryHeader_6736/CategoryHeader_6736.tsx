import IcShirt from '../assets/ic-shirt-CpvG.svg'
import IcSort from '../assets/ic-sort-Cjfv.svg'
import IcDropdown from '../assets/ic-dropdown-Bf0d.svg'
import './CategoryHeader_6736.css'

export const CategoryHeader_6736 = () => {
    return (
        <header data-testid='categoryHeader' className='i77th'>
            <div className='jk345th'>
                <h1 className='ir345j'>T-Shirts <small>for men</small></h1>
                <span className='bo456y'>400</span>
            </div>
            <div data-testid='sortingAndViewWrapper' className='ikt45j'>
                <button className='ptj345ik'>
                    <img src={IcShirt} alt="" className='yr234gh' />
                    View
                    <img src={IcDropdown} alt="" />
                </button>
                <button className='ptj345ik'>
                    <img src={IcSort} alt="" className='yr234gh' />
                    Sort
                    <img src={IcDropdown} alt="" />
                </button>
            </div>
        </header>
    )
}