import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from './Card';

import img1 from '../images/Apple-iPhone-14-A2649-US-Unlocked-Blue.webp'
import img2 from '../images/How-Can-Digital-Marketing-Work-For-Your-Business.jpg'
import img3 from '../images/istockphoto-1299979983-170667a.jpg'
import img4 from '../images/what-is-product-marketing.jpg'
import img5 from '../images/How-Can-Digital-Marketing-Work-For-Your-Business.jpg'
import img6 from '../images/depositphotos_516124562-stock-photo-businessman-touch-screen-concept-set.jpg'


function File() {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><Card image={img1}  title='My new Product'/></SwiperSlide>
            <SwiperSlide><Card image={img2} title='My new Product'/></SwiperSlide>
            <SwiperSlide><Card image={img3} title='My new Product'/></SwiperSlide>
            <SwiperSlide><Card image={img4} title='My new Product'/></SwiperSlide>
            <SwiperSlide><Card image={img5} title='My new Product'/></SwiperSlide>
            <SwiperSlide><Card image={img6} title='My new Product'/></SwiperSlide>
            
        </Swiper>
    )
};

export default File;


//yah css ke file kha open akerngy yah bataon