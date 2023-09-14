import './cart.css'

const Cart = ({selectActor,remaining,totalCost}) => {
  console.log(selectActor);
  return (
    <div>
      <h3>Total Actors:{selectActor.length}</h3>
      <h5>Remaining:{remaining}</h5>
      <h5>Total Cost:{totalCost}</h5>
      {
        selectActor.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        )
        )
      }
    </div>
  );
};

export default Cart;