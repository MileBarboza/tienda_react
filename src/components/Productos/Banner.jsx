import React from 'react'
import { Link } from 'react-router-dom'
import './banner.scss'
import { TbTruckDelivery } from "react-icons/tb";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import Aviso from '../Productos/Aviso'
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import Boton2 from '../boton/Boton2'
import '../boton/boton2.scss'
import { IoMdHeartEmpty } from 'react-icons/io'


function Banner({greeting,data }) {
  return (
    <div className='App' style={{marginTop: '120px'}}>
        <div className="swiperContainer">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".pagination",
                    clickable: true,
                }}
                className="slider"
            >
                <SwiperSlide className="slider">
                    <img src="/assets/banner1.png" alt="Clothing"className='banner'/>
                </SwiperSlide>   
                <SwiperSlide className="slider">
                    <img src="/assets/banner2.png" alt="Clothing"className='banner'/>
                </SwiperSlide>
                <SwiperSlide className="slider">
                    <img src="/assets/banner3.png" alt="Clothing"className='banner'/>
                </SwiperSlide>

            </Swiper>
            <div className="pagination"/>
        </div>

        <h1 style={{margin: '70px 0 30px'}} >{greeting}</h1>


        <div className='aviso'>
            <div className='aviso__conte'>
              <RiShoppingCart2Line style={{fontSize:'40px'}}/>
            <Aviso text='Una vez confirmado el stock, nos comunicamos por whatsapp dentro de 16 horas hábiles.'>REALIZÁ TU PEDIDO</Aviso>
            </div>
            <div className='aviso__conte'>
                <MdPayment style={{fontSize:'40px'}}/>
              <Aviso text='Aboná tu pedido en 48 HRS HÁBILES por depósito, transferencia, mercadopago, o efectivo en el local.'>REALIZÁ EL PAGO</Aviso>
            </div>
            <div className='aviso__conte'>
              <TbTruckDelivery style={{fontSize:'40px'}}/>
              <Aviso text='Retirá tu pedido en el local o recibilo por transporte como correo argentino o encomiendas.'>RECIBÍ TU PEDIDO</Aviso>
            </div>
        </div>

        <div className='categoria'>
          <div className='categoria__imagen'>
              <img src="/assets/banner4.jpg" alt="Clothing" className='categoria__img'/>
              <div className='categoria__btn-l'>
                  <Link  to='/categoria/Pantalón'><Boton2 text='Pantalón' className='boton__categoria'></Boton2></Link>
              </div>
          </div>
          <div className='categoria__imagen'>
            <img src="/assets/banner5.jpg" alt="Clothing" className='categoria__img' />
            <div className='categoria__btn-r'>
                <Link to='/categoria/Remera'><Boton2 text='Remera' className='boton__categoria'></Boton2></Link>
            </div>
          </div>
        </div>

        <section className='sect'>
            <h2 style={{marginTop:'100px'}}>Nuevos ingresos</h2>
            <div className='loNvo'>
                <section className='card'> 
                  <Link to= {`/productos/xmON1nsKo6eXGsktTEHd`}>
                    <div><img src="/assets/remerasedoso.jpg" alt="Remera Sedosa" className='card__img'/></div>
                  </Link> 
                    <div >
                      <div className='card__detail'>
                          <h3 className='card__titulo'>Remera Sedosa</h3>
                        <div className='card__prefa'>
                          <p className='card__precio'>$2870</p>
                          <button className="card__favorito"><IoMdHeartEmpty/></button>
                        </div>
                      </div>
                    </div>
                </section>
                <section className='card'> 
                  <Link to= {`/productos/gOGiPe77BAXyvP8BG2nb`}>
                    <div><img src="/assets/chupinbengalinaconlazo.jpg" alt="Chupin Bengalina con Lazo" className='card__img'/></div>
                  </Link> 
                    <div >
                      <div className='card__detail'>
                          <h3 className='card__titulo'>Chupin Bengalina con Lazo</h3>
                        <div className='card__prefa'>
                          <p className='card__precio'>$4860</p>
                          <button className="card__favorito"><IoMdHeartEmpty/></button>
                        </div>
                      </div>
                    </div>
                </section>
                <section className='card'> 
                  <Link to= {`/productos/syYcKPbnXbluySYhhY38`}>
                    <div><img src="/assets/camperajean.jpg" alt="Campera de Jean" className='card__img'/></div>
                  </Link> 
                    <div >
                      <div className='card__detail'>
                          <h3 className='card__titulo'>Campera de Jean</h3>
                        <div className='card__prefa'>
                          <p className='card__precio'>$4890</p>
                          <button className="card__favorito"><IoMdHeartEmpty/></button>
                        </div>
                      </div>
                    </div>
                </section>
                <section className='card'> 
                  <Link to= {`/productos/mIxjXtTZ93igIHKIFqit`}>
                    <div><img src="/assets/remeraencaje.jpg" alt="Remera Encaje" className='card__img'/></div>
                  </Link> 
                    <div >
                      <div className='card__detail'>
                          <h3 className='card__titulo'>Remera Encaje</h3>
                        <div className='card__prefa'>
                          <p className='card__precio'>$2450</p>
                          <button className="card__favorito"><IoMdHeartEmpty/></button>
                        </div>
                      </div>
                    </div>
                </section>
              </div>
        </section>
    </div>
  )
}

export default Banner
