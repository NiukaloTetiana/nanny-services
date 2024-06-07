import Icons from "../../assets/sprite.svg";

// example:  <Icon id="plus" size={100} color="black" className="plus" />;

export const Icon = ({ id, size, className }) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};
