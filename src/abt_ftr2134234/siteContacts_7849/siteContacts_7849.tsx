import Logo563 from '../../assets/logo-footer-cjkdel.svg'
import Fb from '../../assets/socials_67439/fb_78467.avif'
import Ig from '../../assets/socials_67439/ig_6746.avif'
import Tw from '../../assets/socials_67439/tw_946734.avif'
import Yt from '../../assets/socials_67439/yt_83673.avif'
import Pi from '../../assets/socials_67439/pi_5638.avif'
import Tk from '../../assets/socials_67439/tk_6749.avif'
import Ssl from '../../assets/ssl_775.avif'
import './siteContacts_7849.css'

export const SiteContacts_7849 = () => {
    return (
        <nav data-testid='siteContacts' className='irj734j'>
            <div data-testid='contactsSection' className='y345r'>
                <a data-testid='footerLogo' href="#" className='i55rjk'>
                    <img src={Logo563} alt="" className='itjh456u' />
                </a>
                <div data-testid='socialLinks' className='ljk1t'>
                    <a href="#">
                        <img src={Fb} alt="" />
                    </a>
                    <a href="#">
                        <img src={Ig} alt="" />
                    </a>
                    <a href="#">
                        <img src={Tw} alt="" />
                    </a>
                    <a href="#">
                        <img src={Yt} alt="" />
                    </a>
                    <a href="#">
                        <img src={Pi} alt="" />
                    </a>
                    <a href="#">
                        <img src={Tk} alt="" />
                    </a>
                </div>
            </div>
            <div data-testid='customerCareLinks'>
                <span className='urt777i'>Обслужване на клиенти</span>
                <a href="#" className='urt23j'>Помощ & Контакт</a>
                <a href="#" className='urt23j'>Колаборации със създатели на съдържание</a>
                <a href="#" className='urt23j'>Зона за доставка</a>
                <a href="#" className='urt23j iejorf'>Откажи се от договора тук</a>
            </div>
            <div data-testid='secureShoppingCertificates'>
                <span className='urt777i'>Сигурно пазаруване</span>
                <a href="#" className='urt23j'>
                    <img src={Ssl} alt="" className="hfrhe" />
                    <span>Твоите данни при нас са защитени</span>
                </a>
            </div>
            <div data-testid='legalSection' className="jurg5hr">
                <span>*Безплатна доставка за поръчки, започващи от 17,90 € (35,01 лв.), във всички останали случаи разходите за доставка и обслужване са 2,50 € (4,89 лв.).</span>
                <span>**Най-ниската цена през последните 30 дни преди намалението.</span>
                <span>³Фиксиран валутен курс 1 EUR = 1.95583 BGN.</span>
                <span>****Безплатно от всички мрежи в България. При обаждания от чужбина може да се начислят такси.</span>
                <span>******Всички цени с вкл. ДДС.</span>
            </div>
        </nav>
    )
}