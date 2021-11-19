import './List.css';

const List = () => {
    return(
      <div className="list-div">
        <h3>Todos</h3>
        <ul className="list">
          <li>
          <input type="checkbox"></input>
            Learn React
          </li>
          <li>
          <input type="checkbox"></input>
            Be Awesome!
          </li>
        </ul>
      </div>
    ); 
};

export default List;