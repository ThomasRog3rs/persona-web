import { Button, Card } from "flowbite-react";
import { PersonaCardProps } from "../../types";

const PersonaCard: React.FC<PersonaCardProps> = ({
  persona,
}: PersonaCardProps): JSX.Element => {
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
        <Button>Chat</Button>
      </Card>
    </div>
  );
};

export default PersonaCard;
