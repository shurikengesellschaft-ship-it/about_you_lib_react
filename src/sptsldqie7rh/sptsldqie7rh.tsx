import './sptsldqie7rh.css'
import Left from './svgexport-12.svg'
import Right from './svgexport-13.svg'
import { useRef, useState } from 'react'

// First Slide
import FerrarriBackground from '../assets/slide1/ferrarri_smallirjm3oi.webp'
import Ferrari from '../assets/slide1/ferrari_largeoikej5dfgok.webp'
import FerrariShoes from '../assets/slide1/ferrari_shoes12krgtp23.avif'
import MercedesPants from '../assets/slide1/mercedes_pants94jkdk.avif'
import MercedesTShirt from '../assets/slide1/merces_tshirt3094jkdfk.avif'
import McLarenTShirt from '../assets/slide1/mclaren_tshirt123ikri494.avif'

// Second Slide
import GuessBackground from '../assets/slide2/guessSmallWebp23jkderj.webp'
import Guess from '../assets/slide2/guessLarge34eipfr.avif'
import GuessJacket from '../assets/slide2/guessJacket1weourf.avif'
import GuessJeanJacket from '../assets/slide2/guessJeanJacket09krjkr.avif'
import GuessTShirt from '../assets/slide2/guessTShirtWhite4ierj.avif'
import GuessJacketWinter from '../assets/slide2/guessJacketWinter93kedje.avif'

// Third Slide
import JustCavaliCover from '../assets/slide3/justBlack398jdk.avif'
import JustCavali from '../assets/slide3/justCavali5jikrju3.avif'
import JustCavaliTShirt from '../assets/slide3/jCTShirt34jdjej.avif'
import JustCavaliShoes from '../assets/slide3/jCShoe38kedj.avif'
import JustCavaliTShirtTiger from '../assets/slide3/jCTShirtTiger094kdk.webp' 
import JustCavaliTShirtSlogan from '../assets/slide3/jCTShirtSlogan948ikd.avif'


interface SliderProps {
    wallpaper: string,
    style: {
        '--ws8nke7-0': string,
        '--ws8nke7-1': string,
        '--ws8nke7-2': string, 
        '--ws8nke7-3': string
    }
}

const first = {
    '--ws8nke7-0': `url(${FerrarriBackground})`,
    '--ws8nke7-1': '#6d0b12',
    '--ws8nke7-2': 'blur(50px)', 
    '--ws8nke7-3': '2.5'
} as React.CSSProperties;

const second = {
    '--ws8nke7-0': `url(${GuessBackground})`,
    '--ws8nke7-1': 'green',
    '--ws8nke7-2': 'blur(50px)', 
    '--ws8nke7-3': '2.5'
} as React.CSSProperties;

const third = {
    // '--ws8nke7-0': `url(${JustCavaliCover})`,
    // '-ws8nke7-0': `linear-gradient(0deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.00) 100%)`,
    // '--ws8nke7-1': 'black',
    '--ws8nke7-2': 'blur(10px)', 
    '--ws8nke7-3': '1.5'
} as React.CSSProperties;

export const SpotlightSlider_0057 = () => {
    const [card, setCard] = useState(2) // this has to be 0

    const sliderRef = useRef<HTMLUListElement>(null)
console.log(JustCavaliCover)
    const scroll = (direction: string) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current
      // Scroll by the width of one visible slider view
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth
      
      sliderRef!.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const slideRight = () => {
    scroll("right")
    setCard(card+1 <= 2 ? card+1 : card)
  }

  const slideLeft = () => {
    scroll("left")
    setCard(card-1 >= 0 ? card-1 : card)
  }
  console.log(card)

    return (
        <div className="i7jr" data-testid="spotlightSlider">
            <ul data-testid='backgroundSlider' className='yrt1j'>
                <li data-active={card == 0 ? 'true' : 'false'}>
                    <div className='do2qk3q irjk4gt' style={first}></div>
                </li>
                <li data-active={card == 1 ? 'true' : 'false'}>
                    <div className='do2qk3q irjk4gt' style={second}></div>
                </li>
                <li data-active={card == 2 ? 'true' : 'false'}>
                    <div className='do2qk3q irjk4gt jru' style={third}></div>
                </li>
            </ul>
            <ul data-testid='sliderContent' className='sqo2j' ref={sliderRef}>
                <li data-testid={`card-0${card == 0 ? '-active' : ''}`} className='soe3k'>
                    <div data-testid='contentSlide' className="qi5dk">
                        <div data-testid='contentSlide--left' className='jok35e'>
                            <div data-testid='contentBanner'>
                                <span className='ifjr fh34hg'>От нашите популярни марки</span>
                                <div className='y1tfi'>
                                    <span className='pd4j'>Разгледай Марката</span>
                                    <span className="odj9k">F1 Fashion</span>
                                </div>
                                <ul className="yhdf3i">
                                    <li className="q1kdju" data-active='true'></li>
                                    <li className="q1kdju" data-active='false'></li>
                                    <li className="q1kdju" data-active='false'></li>
                                </ul>
                            </div>
                            <div data-testid='contentPromo' className='thf1ik'>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={FerrariShoes} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={MercedesPants} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={MercedesTShirt} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={McLarenTShirt} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                            </div>
                        </div>
                        <div data-testid='contentSlide--right' className='pro1fk'>
                            <img src={Ferrari} alt="odfjhr" className='a2ksdjh' />
                        </div>
                    </div>
                </li>
                <li data-testid={`card-1${card == 1 ? '-active' : ''}`} className='soe3k'>
                    <div data-testid='contentSlide' className="qi5dk">
                        <div data-testid='contentSlide--left' className='jok35e'>
                            <div data-testid='contentBanner'>
                                <span className='ifjr fh34hg'>От нашите популярни марки</span>
                                <div className='y1tfi'>
                                    <span className='pd4j'>Разгледай Марката</span>
                                    <span className="odj9k">GUESS JEANS</span>
                                </div>
                                <ul className="yhdf3i">
                                    <li className="q1kdju" data-active='true'></li>
                                    <li className="q1kdju" data-active='false'></li>
                                    <li className="q1kdju" data-active='false'></li>
                                </ul>
                            </div>
                            <div data-testid='contentPromo' className='thf1ik'>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={GuessJacket} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={GuessJeanJacket} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={GuessTShirt} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={GuessJacketWinter} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                            </div>
                        </div>
                        <div data-testid='contentSlide--right' className='pro1fk'>
                            <img src={Guess} alt="odfjhr" className='a2ksdjh' />
                        </div>
                    </div>
                </li>
                <li data-testid={`card-2${card == 2 ? '-active' : ''}`} className='soe3k'>
                    <div data-testid='contentSlide' className="qi5dk">
                        <div data-testid='contentSlide--left' className='jok35e'>
                            <div data-testid='contentBanner'>
                                <span className='ifjr fh34hg'>От нашите популярни марки</span>
                                <div className='y1tfi'>
                                    <span className='pd4j'>Разгледай Марката</span>
                                    <span className="odj9k">Just Cavalli</span>
                                </div>
                                <ul className="yhdf3i">
                                    <li className="q1kdju" data-active='true'></li>
                                    <li className="q1kdju" data-active='false'></li>
                                    <li className="q1kdju" data-active='false'></li>
                                </ul>
                            </div>
                            <div data-testid='contentPromo' className='thf1ik'>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={JustCavaliTShirt} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={JustCavaliShoes} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={JustCavaliTShirtTiger} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                                <div data-testid='promoCard' className='u3itjf'>
                                    <img src={JustCavaliTShirtSlogan} alt="ejoikp123fwemjiop9i" className="qoei5ke" />
                                </div>
                            </div>
                        </div>
                        <div data-testid='contentSlide--right' className='pro1fk uirjr'>
                            <img src={JustCavaliCover} alt="odfjhr" className='a2ksdjh' />
                            <div className='urtjh4tg'>
                                <img src={JustCavali} alt="" className='oi5rtk' />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div data-testid='sliderBtn' className='ut9qz'>
                <button className='ut84f ijfer44xc' onClick={slideLeft}>
                    <img src={Left} alt="" className='iur4jh' />
                </button>
                <button className='ut84f k1tj' onClick={slideRight}>
                    <img src={Right} alt="" className='iur4jh' />
                </button>
            </div>
        </div>
    )
}