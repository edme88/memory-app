export default function Card({ icon, index, action }) {
  const handleClick = () => {
    action(icon);
  };

  return (
    <div className="cartita" key={index} onClick={handleClick}>
      {icon}
    </div>
  );
}
