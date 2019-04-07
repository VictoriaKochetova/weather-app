import React from "react";

const Weather = props => (
	<div className="weather__info">
  <div className="col-md-7 card">
   <div className="card-info col-md-7">
	 {
	 	props.city && props.country && <p className="weather__key"> Местоположение:
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p>
	 }
   {
    props.description && <p className="weather__key"> Погода:
      <span className="weather__value"> { props.description } </span>
   </p>
   }
	 {
	 	props.temp && <p className="weather__key"> Температура:
	 		<span className="weather__value"> { props.temp } С	</span>
	 	</p>
	 }

	 {
	 	props.humidity && <p className="weather__key"> Влажность:
	 		<span className="weather__value"> { props.humidity } % </span>
	 	</p>
	 }

	 {
	 	props.error && <p className="weather__error">{ props.error }</p>
	 }
      </div>

    {
     props.city && props.country && <div className = "col-md-5 desc">
		 <p className="weather__key">
    Сегодня
     <span className="weather__value"> { props.description } </span>
     </p>
		   </div>
   }

  </div>

  </div>

);

export default Weather;
