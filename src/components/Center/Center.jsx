import React from 'react'
import './Center.css'
import img1 from '../Image/center1.png'
import img2 from '../Image/center2.png'
import img3 from '../Image/center3.png'
import img4 from '../Image/center4.png'


function Center() {
  return (
    <div>
    <div className="card-main">
               <div className="card">
                <img src={img1} />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                        <h2 className="card__title">Easy Plant Kits
                            </h2>
                            <p className="parag">
                            A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.
                            </p>

                    </div>
                  


                </div>
            </div>
            <div className="card">
                <img src={img4} />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                        <h2 className="card__title">Landscaping 
                           </h2>
                            <p className="parag">
                            A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.
                            </p>

                    </div>
                   


                </div>
            </div>
            <div className="card">
                <img src={img3} />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                        <h2 className="card__title">Plant Gift <br />
                            </h2>
                            <p className="parag">
                            A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.
                            </p>

                    </div>
                   

                </div>
            </div>
            <div className="card">
                <img src={img2} />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                        <h2 className="card__title">Balcony & TerraceGardens
                            </h2>
                            <p className="parag">
                            A small plant in the room or at the work desk can help considerably in maintaining fresh air around you. So with a plant gift, you are actually gifting them good health along with years of beauty, companionship, and care.
                            </p>

                    </div>
                   


                </div>
            </div>
    </div>
    </div>
  )
}

export default Center
