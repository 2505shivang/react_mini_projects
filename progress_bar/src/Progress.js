import './App.css';

const Progress = ({width: inputWidth}) => {

  return (
        <div className='progress'>
          <div className='bar' style={{width:`${inputWidth}%`}}>{inputWidth}</div>
        </div>
  );
}

export default Progress;