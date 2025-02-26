const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function TodoList() {
  return <h1 style={{ color: "gold" }}> To Do List for {formatDate(today)}</h1>;
}
