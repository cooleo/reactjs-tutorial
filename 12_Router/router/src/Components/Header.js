import { Link } from 'react-router-dom';


export default class Header extends Component{
    render() {
        return (
            <div>
                <ul>
                  <li>
                <Link to="/home">Home</Link>
                  </li>
                    <li>
                <Link to="/about">About</Link>
                    </li>
                    <li>
                <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}