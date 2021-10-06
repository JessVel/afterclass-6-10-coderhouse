import './styles/spinner.scss';

const Spinner = () => {
  // https://tobiasahlin.com/spinkit/
  return (
    <div className='sk-chase'>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
    </div>
  );
};

export default Spinner;
