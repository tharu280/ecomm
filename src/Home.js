import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__conatainer'>
                <img className='home__image' src='https://www.rybrook.co.uk/lamborghini/wp-content/uploads/sites/16/2020/02/rybrook-lamborghini-huracan-evo-banner-1-1920x650.jpg'
                    alt='' img />

                <div className='home__row'>
                    <Product
                        id={1001}
                        title={"Lamborghini Revuelto"}
                        price={250000}
                        image="https://stimg.cardekho.com/images/car-images/930x620/Lamborghini/Revuelto/9770/1683007444597/222_Bianco-Monocerus_dadada.jpg?impolicy=resize&imwidth=420"
                        rating={5} />

                    <Product
                        id={1002}
                        title={"Lamborghini Huracan Sterrato"}
                        price={200000}
                        image="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/huracan/huracan_sterrato/hura_sterrato_ar.jpg "
                        rating={5} />
                    <Product
                        id={1003}
                        title={"Lamborghini Urus"}
                        price={235000}
                        image="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/urus/s/urus_s_ar.png"
                        rating={5} />
                    <Product
                        id={1004}
                        title={"Lamborghini Gallardo"}
                        price={240000}
                        image="https://e0.pxfuel.com/wallpapers/317/275/desktop-wallpaper-lamborghini-gallardo-lp560-lamborghini-gallardo.jpg"
                        rating={3} />




                </div>
                <div className='home__row'>
                    <Product
                        id={1005}
                        title={"Lamborghini Centenario"}
                        price={400000}
                        image="https://profimodel.cz/1574470-thickbox_default/auticko-super-resistant-scalextric-c4087-lamborghini-centenario-white-1-32.jpg"
                        rating={5} />
                    <Product
                        id={1006}
                        title={"Lamborghini Veneno"}
                        price={4000000}
                        image="https://live.staticflickr.com/8239/8562800190_384816a77d_b.jpg"
                        rating={5} />
                    <Product
                        id={1007}
                        title={"Lamborghini Countach"}
                        price={3000000}
                        image="https://images-na.ssl-images-amazon.com/images/I/71yloh76CtL._AC_UL600_SR600,600_.jpg"
                        rating={5} />

                </div>
                <div className='home__row'>
                    <Product
                        id={1008}
                        title={"Lamborghini Scian Roadster Limited Edition"}
                        price={6000000}
                        image="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2023/03_20_best_year/cover.jpg"
                        rating={5} />

                </div>

            </div>


        </div>
    )
}

export default Home
