import React from 'react';
import "./series.css";

function Series(props){
    return(
        <>
           
                <div className="product-card-container">
                    
                        <div className="product-card">
                            <div className="product-image-container">
                                 <img src={props.imgsrc} alt="" className="product-img"/>
                            </div>

                            <div className="product-content-container">
                                <h1>{props.sname}</h1>
                                <p> {props.title} </p>
                            </div>

                           <div className="product-link-container">
                                <button> watch now </button>
                            </div>
                        </div>
                </div>

           
        </>
    )
}

export default Series;