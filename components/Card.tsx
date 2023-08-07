import Image from "next/image";

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  className: string;
}

const Card: React.FC<CardProps> = ({title, content, imageUrl, className}) => {
  return (
        <div className={`${className} max-w-sm flex flex-col gap-4  border-t-4 p-6 rounded-2xl shadow-2xl `}>
          <h2 className="text-xl font-semibold opacity-70">{title}</h2>
          <p className="text-md text-grayish-blue">{content}</p>
          <Image className="self-end m-4" src={imageUrl} alt="" height="60" width="60"></Image>
        </div>
  );
};

export default Card;
