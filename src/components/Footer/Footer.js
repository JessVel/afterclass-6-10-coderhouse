import './styles/footer.scss';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p className='description-footer'>
        Made with ❤️ for after class-6/10 by -
        <a href='https://www.linkedin.com/in/%E2%9A%A1-jesica-velazquez-840a44120/'>
          Jesica Velazquez
        </a>
        - Peep source code
        <a
          className='link-icon'
          href='https://github.com/JessVel/afterclass-6-10-coderhouse'
          aria-label='Ir a Github'
        >
          <FaGithub />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
