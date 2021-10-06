import './styles/button.scss';

const Button = ({theme, handleTheme, classname}) => {
    return ( 
        <span onClick={handleTheme} className={classname}>
            {theme ? '🌚' : '🌞' }
        </span>    
     );
}
 
export default Button;