function Food({fav}) {
  return <h1>I like {fav}</h1>
}

const foodILike = [`kimchi`, `ramen`, `bibimbap`, `kimbab`]

function renderFood(dish) {
  return <Food fav={dish.name}/>
}

function App() {
  return (
    <>
      <h1>Hello!!!</h1>
      {foodILike.map(renderFood)}
    </>
  );
}

export default App;
