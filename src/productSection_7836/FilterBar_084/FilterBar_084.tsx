import './FilterBar_084.css'
import Dd_92378 from '../assets/ic-dropdown-Bf0d.svg'
import arr_r_737 from '../assets/ic-arrow-right-Bv-Mt_7834.svg'
import { useState, type CSSProperties } from 'react'

export const FilterBar_084 = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <section data-testid='filterBar' className='pt54k'>
            <div data-testid='filterBar--list' className='ur345h' style={collapsed ? { overflow: "auto", flexWrap: "wrap" } as CSSProperties : undefined}>
                <div data-testid='wrapper' className='jrjh3ert'>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Цена</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Промоции</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Размер</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Цвят</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Марка</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Специални размери</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Материал</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Модели</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Атрибути на продукта</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Style</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Дължина на ръкавите</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Деколте</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Кройка</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Опаковка</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
                <div>
                    <button data-testid='dropdown' className='ptj345ik'>
                        <span>Тема</span>
                        <img src={Dd_92378} alt="" />
                    </button>
                </div>
            </div>
            <div data-testid='ShowMoreFiltersBtn' className='cgh4df' onClick={() => setCollapsed(!collapsed)} style={collapsed ? { top: "50px" } as CSSProperties : undefined}>
                <span className='ir567j'>
                    Още филтри
                </span>
                {collapsed ?
                    <img src={arr_r_737} alt="" className='r777h lt567rj' />
                    :
                    <img src={arr_r_737} alt="" className='r777h' />
                }
            </div>
        </section >
    )
}