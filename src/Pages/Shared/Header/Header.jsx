import logo from '../../../assets/logo.png'
import moment from 'moment';
moment().format();
const Header = () => {
    return (
        <div className='text-center py-10'>
            <img className='mx-auto' src={logo} alt="logo for dragon news" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>

        </div>
    );
};

export default Header;