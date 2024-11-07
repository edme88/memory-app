export default function Card({ icon, index, action, flipped, disabled }) {
  const handleClick = () => {
    if(!disabled){
      action(icon);
    }
  };

  return (
    <div className={disabled ? "noSelected" : "cartita"} key={index} onClick={handleClick}>
      {flipped ? icon : ""}
    </div>
  );
}
