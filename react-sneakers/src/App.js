function App() {
  return (
    <div className="wrapper">
      <header className="d-flex justify-between">
        <div className="d-flex align-center" >
          <img width={40} height={40} src="./img/logo.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-1">Магазин лучших кроссовок</p>
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
        <h1 className="mb-40">Все кроссовки</h1>

       <div className="d-flex">
       <div className="card">
          <img width={133} height={112} src="/img/img1.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/image2.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/image3.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/image4.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="" />
            </button>
          </div>
        </div>
       </div>

      </div>
    </div>
  );
}

export default App;
