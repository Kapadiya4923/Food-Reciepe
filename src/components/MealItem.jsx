import React from 'react';
import { useNavigate } from 'react-router-dom';
const MealItem = ({ data }) => {
    console.log(data);
    let navigate=useNavigate();
    return (
        <>

            {/* <div className="card">
    <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg"  alt=""/>
    <h3>Pasta</h3>
</div> */}
            {
                (!data) ? "Not Found" : data.map(item => {
                    return (
                        <div className="card" key ={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}  >
                            <img src={item.strMealThumb} alt="" />
                            <h3>{item.strMeal}</h3>
                        </div>
                    )
                })
            }
        </>

    )

}
export default MealItem;