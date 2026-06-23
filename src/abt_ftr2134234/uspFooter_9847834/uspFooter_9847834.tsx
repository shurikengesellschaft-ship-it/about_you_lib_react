import UspBasket_234 from '../../assets/usp_02394/uspBasket_23947889.webp'
import UspReturn_345 from '../../assets/usp_02394/uspReturn_983489.webp'
import UspPayment_843 from '../../assets/usp_02394/uspPayment_83478.webp'
import './uspFooter_9847834.css'

export const UspFooter_8484 = () => {
    return (
        <section data-testid='footerUspSlider' className='u1rtg'>
            <a href="#">
                <img src={UspBasket_234} alt="" className="ioe5jrf" />
                <span>Безплатни доставка* и връщане</span>
            </a>
            <a href="#">
                <img src={UspReturn_345} alt="" className="ioe5jrf" />
                <span>Безплатни доставка* и връщане</span>
            </a>
            <a href="#">
                <img src={UspPayment_843} alt="" className="ioe5jrf" />
                <span>Безплатни доставка* и връщане</span>
            </a>
        </section>
    )
}