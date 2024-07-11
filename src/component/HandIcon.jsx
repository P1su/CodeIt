import rockImg from '../assets/rock.svg';
import paperImg from '../assets/paper.svg';
import scissorImg from '../assets/scissor.svg';
import './BtnHand.css'

function HandIcon({ value, className }){
  const hands = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg,
  };

  return(
    <>
      <img 
        className={className}
        src={hands[value]} 
        alt={value}/>
    </>
  );
}
export default HandIcon;