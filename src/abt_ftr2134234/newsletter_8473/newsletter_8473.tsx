import { useState } from 'react';
import './newsletter_8473.css'

export const Newsletter_8473 = () => {
    const [gender, setGender] = useState('female')

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    }
    
    return (
        <section data-testid='footer-newsletter' className='h1rtk'>
            <span className='jtr7k ktj5h'>Не пропускай нищо!</span>
            <span className='jtr7k ht5x'>Абонирай се за нашия бюлетин и ще можем да те информираме за ексклузивни оферти</span>
            <form autoComplete='on' method='POST' className='ji333krjr'>
                <div data-testid='GenderButton--list' className='ik1rj'>
                    <label htmlFor="newsletter-gender-female" className='lrj567df'>
                        <div className='urj5ir'>
                            <input type="radio" id='newsletter-gender-female' className='o1irj' value='female' name='gender' checked={gender == 'female'} onChange={handleGenderChange} />
                            <div data-testid='genderTick' className='prj5v'></div>
                        </div>
                        <span>За жени</span>
                    </label>
                    <label htmlFor="newsletter-gender-male" className='lrj567df'>
                        <div className='urj5ir'>
                            <input type="radio" id='newsletter-gender-male' className='o1irj' value='male' name='gender' checked={gender == 'female'} onChange={handleGenderChange} />
                            <div data-testid='genderTick' className='prj5v'></div>
                        </div>
                        <span>За мъже</span>
                    </label>
                </div>
                <div data-testid='textInputWrapper' className='rt345n4jrt'>
                    <input autoComplete='email' placeholder=' ' type='email' className='r55gt34dsf' />
                    <span className='pgt456dfgfgh'>Твоят имейл адрес</span>
                </div>
                <button className='rh567jgtoujh'>Регистрирай се</button>
            </form>
            <span className='uorgt67867ju'>Искам да получавам бюлетин от ABOUT YOU за актуални тенденции,
                оферти и ваучери в съответствие с <a>Политика за поверителност</a>.
                Можете да оттеглите съгласието си по всяко време с действие за в бъдеще,
                като изпратите имейл на <a>obsluzhvanenaklienti@aboutyou.bg</a>&nbsp;
                или използвате опцията за отписване в края на всеки бюлетин.</span>
        </section>
    )
}