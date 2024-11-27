function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between">
        <div className="d-flex align-center" >
          <img width={40} height={40} src="./img/logo.png" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="./img/cart.png" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="./img/user.png" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        .....
      </div>
    </div>
  );
}

export default App;
