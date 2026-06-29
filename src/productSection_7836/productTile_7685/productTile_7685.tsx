import './productTile_7685.css'
import arr_r_8467 from '../assets/ic-arrow-right-Bv-Mt_7834.svg'

export const ProductTile_7685 = (props: { tileImage: string }) => {
    return (
        <div data-testid='productTile' className='lrtj4k'>
            <a href="#" className='op3t'>
                <div data-testid='ImageWrapper' className='ex1c'>
                    <div data-testid='imageFrame' className='jrk7k'>
                        <img src={props.tileImage} alt="tileImage" className='prj5k' />
                    </div>
                    <div data-testid='badgesContainer' className='i1rj'>
                        <div className='jr435sd'>Premium</div>
                        <div className='xcd5s'>DEAL</div>
                    </div>
                    <div data-testid='productTileImageSliderNavigation' className='hrg6h'>
                        <div className='jd1ehe' style={{ opacity: '0' }}>
                            <img src={arr_r_8467} alt="rhierh03834jhwl9dj"  />
                        </div>
                        <div className='jd1ehe'>
                            <img src={arr_r_8467} alt="rhierh03834jhwl9dj" />
                        </div>
                    </div>
                </div>
                <div data-testid='infoBox' className="kr43j">
                    <div data-testid='infoBoxWrapper' className='ir6j'>
                        <p className='qi1e'>Just Cavalli</p>
                        <p className='lcd5fg'>Тениска</p>
                        <div className='jlk2r'>
                            64,50 €<span>&nbsp;(126,15 лв.)</span>
                        </div>
                        <div data-testid='purchaseSection' className='oir456j'>
                            <ul data-testid='tileColors--list' className='kde456je'>
                                <li className='jre43r' style={{ background: "#fff", boxShadow: "rgb(255, 255, 255) 0px 0px 0px 2px inset, rgb(217, 217, 217) 0px 0px 0px 1px" }}></li>
                                <li className='jre43r' style={{ background: "#000" }}></li>
                            </ul>
                            <span className='dg43f'>Налични размери: M, L, XL</span>
                            <button className='ker76j'>Добави в Кошницата</button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}