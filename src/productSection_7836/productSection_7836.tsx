import IcArrowR from './ic-arrow-right-Bv-Mt_7834.svg'
import './productSection_7836.css'
import IcShirt from './ic-shirt-CpvG.svg'
import IcSort from './ic-sort-Cjfv.svg'
import IcDropdown from './ic-dropdown-Bf0d.svg'

export const ProductSection_7836 = () => {
    return (
        <section data-testid='productSection' className='urjd567fh'>
            <ul data-testid='Breadcrumbs' className='btig345kj'>
                <li className='it345j'>
                    Man
                </li>
                <li className='it345j'>
                    <img src={IcArrowR} alt="" className='pyu24tgyju' />
                    Clothing
                </li>
                <li className='it345j'>
                    <img src={IcArrowR} alt="" className='pyu24tgyju' />
                    T-Shirt
                </li>
            </ul>
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
        </section>
    )
}