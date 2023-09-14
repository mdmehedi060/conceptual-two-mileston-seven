import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './home.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
const Home = () => {
  const [allactorse, setAllActores] = useState([]);
  const [selectActor, setSelectActor] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
    .then(data=>setAllActores(data))
 },[])
 
  const handleSelectorActor = (actor) => {
    const isExist = selectActor.find(item => item.id == actor.id);
    // console.log(isExist);
    let count = actor.salary;
    if (isExist) {
      return alert("Already Booked")
    }

   
    else {
      selectActor.forEach((item) => {
        count = count + item.salary;
      });
      const totalRemaining = 20000 - count;
      
      if (count > 20000) {
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href="">Why do I have this issue?</a>'
})
      }
      else {
        setTotalCost(count);
        setRemaining(totalRemaining);
        setSelectActor([...selectActor, actor]);
      }
    }
  };
 

  return (
    <div className='container'>
      <div className="home-container">
        <div className="card-container">
          {
            allactorse.map(actor=>(  <div key={actor.id} className="card">
          <div className="card-img">
            <img className='photo' src={actor.image} alt="" />
          </div>
          <h4>{actor.name}</h4>
          <p> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eaque.</small></p>
          <div className="info">
            <p>Salary:$ {actor.salary}</p>
            <p>{actor.role}</p>
          </div>
          <button onClick={()=>handleSelectorActor(actor)} className='card-btn'>Select</button>
        </div>))
         }
        </div>
        <div className="cart">
          <Cart
            selectActor={selectActor}
            remaining={remaining}
            totalCost={totalCost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;