import './sptsldqie7rh.css'
import Left from './svgexport-12.svg'
import Right from './svgexport-13.svg'
import { useRef, useState } from 'react'
import FerrarriBackground from './ferrarri_smallirjm3oi.webp'
import Ferrari from './ferrari_largeoikej5dfgok.webp'
import FerrariShoes from './ferrari_shoes12krgtp23.avif'
import MercedesPants from './mercedes_pants94jkdk.avif'
import MercedesTShirt from './merces_tshirt3094jkdfk.avif'
import McLarenTShirt from './mclaren_tshirt123ikri494.avif'

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

// const second = {
//     // '-ws8nke7-0': `linear-gradient(0deg, rgba(0, 0, 0, 0.00) 100%, rgba(0, 0, 0, 0.16) 0%), url(${Football}) rgba(0, 0, 0, 0.10)`,
//     '-ws8nke7-0': 'black',
//     '--ws8nke7-1': '#1a3f75;',
//     '--ws8nke7-2': 'blur(50px)', 
//     '--ws8nke7-3': '2.5'
// } as React.CSSProperties;

// const third = {
//     '-ws8nke7-0': `url(${Bubles})`,
//     '--ws8nke7-1': '#24ce0d',
//     '--ws8nke7-2': 'blur(10px)', 
//     '--ws8nke7-3': '1.5'
// } as React.CSSProperties;

export const SpotlightSlider_0057 = () => {
    const [card, setCard] = useState(2)

    const sliderRef = useRef<HTMLUListElement>(null)

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

    return (
        <div className="i7jr" data-testid="spotlightSlider">
            <ul data-testid='backgroundSlider' className='yrt1j'>
                <li>
                    <div className='do2qk3q' style={first}></div>
                </li>
                <li>
                    <div className='do2qk3q' style={first}></div>
                </li>
                <li>
                    <div className='do2qk3q' style={first}></div>
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
                <li data-testid={`card-2${card == 2 ? '-active' : ''}`} className='soe3k'>
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
            </ul>
            <div data-testid='sliderBtn' className='ut9qz'>
                <button className='ut84f ijfer44xc' onClick={slideLeft}>
                    <img src={Left} alt="" />
                </button>
                <button className='ut84f k1tj' onClick={slideRight}>
                    <img src={Right} alt="" />
                </button>
            </div>
        </div>
    )
}