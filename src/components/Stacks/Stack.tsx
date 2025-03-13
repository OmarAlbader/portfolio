interface StackItem {
  name: string;
  image: string;
}

interface IProps {
  label: string;
  items: StackItem[];
}

const Stack = ({ label, items }: IProps) => {
  return (
    <div className="flex justify-between mt-15 animate">
      <div className="font-bold text-5xl anton">{label}</div>

      <div className="w-2/3">
        <ul className="flex flex-wrap space-x-15 justify-center space-y-10 text-xl">
          {items.map((item, index) => (
            <li
              id={index.toString()}
              key={index}
              className={`delay-${index * 100} animate flex h-fit gap-5`}
            >
              <img
                src={`../public/images/${item.image}`}
                alt={`${item.image.split(".")[0]} logo`}
                className={`${
                  item.name === "Tailwind CSS" ? "h-6" : "h-10"
                } w-auto`}
              />
              <span className="self-center">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stack;
