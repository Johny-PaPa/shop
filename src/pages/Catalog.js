import React from "react"
import Items from "../CatalogOfTovar/Items"
import { Link } from "react-router-dom";
import Header from '../Header/Header'
import '../CatalogOfTovar/Catalog.css'
import Footer from "../footer/footer"
import Sobr from "./sobr"
import El from '../assets/el.png'
import Pol from '../assets/pol.png'
import Ak from '../assets/ak.png'
import Class from '../assets/class.png'

// class Catalog extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             orders: [],
//             items:  [
//                 {
//                     id: 1,
//                     title: 'Электрогитара',
//                     img: 'el.png',
//                     desc: '1',
//                     category: 'el_g',
//                     price: '4000'
//                 },
//                 {
//                     id: 2,
//                     title: 'Полуакустическая гитара',
//                     img: 'pol.png',
//                     desc: '',
//                     category: 'pol_g',
//                     price: '2000'
//                 },
//                 {
//                     id: 3,
//                     title: 'Акустическая гитара',
//                     img: 'ak.png',
//                     desc: '',
//                     category: 'ak_g',
//                     price: '5000'
//                 },
//                 {
//                     id: 4,
//                     title: 'Классическая гитара',
//                     img: 'class.png',
//                     desc: '',
//                     category: 'class_g',
//                     price: '10000'
//                 }
//             ]
//         }
//         this.addToOrder = this.addToOrder.bind(this)
//     }
function Catalog(){
        return(
            <div className='wrapper'>
                <section className='section-header'>
                        <Header />
                        {/* orders={this.state.orders} */}
                        <ul className="sawe">
                        <div className="container-fluid">
                        <h1 className="big">Галерея</h1>
                        <h2 className="momo">Главная   /  Каталог</h2>
                            {/* <div className="fofo">
                                <Items items={this.state.items} onAdd={this.addToOrder} />
                            </div> */}
                            <div className="cls">
                                <div>
                                    <Link to="/catalog/el"><img className="cat_ob" src={El} /></Link>
                                    <h2 className="centr">Электрогитара</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/pol"><img className="cat_ob" src={Pol} /></Link>
                                    <h2 className="centr">Полуакустическая гитара</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/ak"><img className="cat_ob" src={Ak} /></Link>
                                    <h2 className="centr">Акустическая гитара</h2>
                                </div>
                                <div>
                                    <Link to="/catalog/class"><img className="cat_ob" src={Class} /></Link>
                                    <h2 className="centr">Классическая гитара</h2>
                                </div>
                            </div>
                        </div>
                        </ul>
                        <Sobr/>
                        <Footer/>
                </section>
            </div>
        ) 
}
    // addToOrder(item) {
    //     this.setState({oders: [...this.state.orders, item] }, () => {
    //       console.log(this.state.orders)
    //     })
    // }
// }


export default Catalog;