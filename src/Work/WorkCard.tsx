import trees from "../assets/trees.jpg";

const WorkCard = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <img
        src={trees}
        alt=""
        className="rounded-lg w-full h-full object-cover max-h-[600px]"
      />
      <div className="block pt-2">
        <p className="text-sm text-black-100 leading-none">Oreo x Pacman</p>
        <span className="text-gray-100 text-[8px] leading-none">
          AR EXPERIENCE
        </span>
      </div>
    </div>
  );
};

export default WorkCard;
