import clayRabbit from "./assets/clayRabbit.jpg";

export default function Profile({ person, size }) {
  const description = "clay Rabbit";
  return <img src={clayRabbit} alt={person.name} width={size} height={size} />;
}
