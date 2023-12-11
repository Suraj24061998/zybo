import React from 'react'
import './Slider.css'
import slide1 from '../Image/slide1.png'
import slide2 from '../Image/slide2.png'
import slide3 from '../Image/slide3.png'
import slide4 from '../Image/slide4.png'

function Slider() {
    return (
        <div className='card-main'>
            

            <div className="card">
                <img src={slide1} />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                        <h2 className="card__title">Aglaonema <br />
                            $ 250</h2>

                    </div>
                    <button class="card__button">Add Cart</button>


                </div>
            </div>

            <div className="card">
                <img src={slide2} />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                        <h2 className="card__title">Golden King Marble <br />$ 340</h2>

                    </div>
                    <button class="card__button">Add Cart</button>


                </div>
            </div>
            <div className="card">
                <img src={slide4} />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                        <h2 className="card__title">Radish Micro Green <br />
$ 250</h2>

                    </div>
                    <button class="card__button">Add Cart</button>


                </div>
            </div>
            <div className="card">
                <img src={slide3} />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                        <h2 className="card__title">Sanservia Fernwood <br />
$ 250</h2>

                    </div>
                    <button class="card__button">Add Cart</button>


                </div>
            </div>
           
        </div>
        
    )
}

export default Slider
