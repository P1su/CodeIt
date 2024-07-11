import HandIcon from "./HandIcon";
import './BtnHand.css'

function BtnHand ({ value, onClick }) {
  const handleClick = () => {
    onClick(value);
  }
  
  return(
    <button
    className="BtnHand"
      onClick={() => {
        handleClick();
      }}
    >
      <HandIcon className='BtnHand-icon' value={value}/>
    </button>
  );
}
export default BtnHand;
