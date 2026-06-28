import './productSection_7836.css'
import { Breadcrumbs_u837 } from './Breadcrumbs_u837/Breadcrumbs_u837'
import { CategoryHeader_6736 } from './CategoryHeader_6736/CategoryHeader_6736'
import { FilterBar_084 } from './FilterBar_084/FilterBar_084'
import { ProductTile_7685 } from './productTile_7685/productTile_7685'

export const ProductSection_7836 = () => {
    return (
        <section data-testid='productSection' className='urjd567fh'>
            <Breadcrumbs_u837 />
            <CategoryHeader_6736 />
            <FilterBar_084 />
            <ul data-testid='tileGrid' className='zjd567e kr4j'>
                <ProductTile_7685 />
                <ProductTile_7685 />
                <ProductTile_7685 />
                <ProductTile_7685 />
                <ProductTile_7685 />
            </ul>
        </section>
    )
}