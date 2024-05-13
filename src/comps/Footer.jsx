import React from "react"
import Card from "../comps/Card.jsx"
import { register } from "swiper/element"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';
import data from "../data/dataMembers"

register()
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Footer = () => {
    return (
        <footer className="h-fit bg-slate-500 text-white pt-6 pr-4 pb-4 flex justify-center w-screen
        md:h-full md:max-h-64 mt-auto ">
            <div className="flex flex-col space-y-4 
            md:flex-row md:space-x-16 md:space-y-0">
                {/* column1 */}
                <div className="flex flex-col w-80 space-y-2
                md:text-left md:w-96" >
                    <span className="font-semibold">Sobre o projeto</span>
                    <span className="text-slate-200 text-sm">O presente estudo tem como objetivo avaliar a usabilidade do site para a apresentação do protocolo desenvolvido de forma individualizada, qualquer dúvida em relação aos exercícios, suas finalidades ou execução, por favor entrar em contato com os acadêmicos.</span>
                </div>
                {/* colum2 */}
                <div className="">
                    <Swiper
                        className="h-52 w-44 rounded-md cursor-pointer"
                        slidesPerView={1}
                        loop
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.name}>
                                <Card
                                    name = {item.name}
                                    imageUrl={"https://i.imgur.com/Hw3ChJY.jpeg"}
                                    phone={item.phone}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </footer>


    )
}
export default Footer