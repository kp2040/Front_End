import React from "react";

function Card({ img, title, desc }) {
    return (
        <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
                
                <img src={img} className="card-img-top" alt={title} />

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>

                    <p className="card-text">
                        {desc}
                    </p>

                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;