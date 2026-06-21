import './abt_ftr2134234.css'
import { PaymentProviders_84373 } from './paymentProvers_873467/paymentProvers_873467'
import { UspFooter_8484 } from './uspFooter_9847834/uspFooter_9847834'
import { Newsletter_8473 } from './newsletter_8473/newsletter_8473'
import { StaticLinks_84674 } from './staticLinks_84674/staticLinks_84674'


export const Footer_9339 = () => {


    return (
        <footer data-testid='footer' className="ir6jfr">
            <div data-testid='payment-section'>
                <UspFooter_8484 />
                <PaymentProviders_84373 />
            </div>
            <div data-testid='newsletter'>
                <Newsletter_8473 />
                <div className='o555urgt'></div>
            </div>
            <div data-testid='static-section-links'>
                <StaticLinks_84674 />
                <div className='o555urgt'></div>
            </div>
            <div data-testid='flexible-sections'>
                <nav data-testid='siteContacts'>
                    <div>
                        <a href="#"></a>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </nav>
            </div>
        </footer>
    )
}