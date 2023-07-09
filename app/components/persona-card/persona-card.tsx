import { Card } from "flowbite-react";
import Link from "next/link";
import { PersonaCardProps } from "../../types";

const PersonaCard: React.FC<PersonaCardProps> = ({
  persona,
}: PersonaCardProps): JSX.Element => {
  const chatLink: string = `/persona/${String(persona.id)}`;
  return (
    <div className="flex-auto mx-8">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={persona.imagUrl}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {persona.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {persona.description}
        </p>
        <Link
          href={chatLink}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Chat
        </Link>
      </Card>
    </div>
  );
};

export default PersonaCard;
