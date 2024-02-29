'use client';
import { Carousel } from 'flowbite-react';
import sofa from '../../assets/sofa.avif'
import sofa2 from '../../assets/sofa2.avif'
import bed from '../../assets/bed.avif'
import table from '../../assets/table.avif'
import cupboard from '../../assets/cupboard.avif'

function Carousels() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[35rem]">
            <Carousel>
                <img src={sofa} alt="..." />
                <img src={sofa2} alt="..." />
                <img src={bed} alt="..." />
                <img src={table} alt="..." />
                <img src={cupboard} alt="..." />
            </Carousel>
        </div>

    )
}

export default Carousels