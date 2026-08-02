import ButtonItem from '../components/ButtonItem.jsx';
import { items } from './data.js';

function Principal () {
  return(
    <div className="container mt-3">
      <div className="row">
        {items.map(item => (
          <div className="col-4" key={item.id}>
            <ButtonItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Principal;