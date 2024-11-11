type CardTypes = "small-square" | "medium-square" | "tall-rect" | "wide-rect";

const Card = ({ color, type }: { color: string; type: CardTypes }) => {
  let width = 180;
  let height = 180;

  switch (type) {
    case "small-square":
      height = 180;
      width = 180;
      break;
    case "medium-square":
      height = 376;
      width = 376;
      break;
    case "tall-rect":
      height = 376;
      width = 180;
      break;
    case "wide-rect":
      height = 180;
      width = 376;
      break;
    default:
  }

  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: 32,
        width,
        height,
      }}
    ></div>
  );
};

export default Card;
