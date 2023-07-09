export interface Persona {
  id: Number;
  name: string;
  description: string;
  imagUrl: string;
  areaId: Number;
}

export interface PersonaCardProps {
  persona: Persona;
}

export interface Area {
  id: Number;
  name: string;
}
