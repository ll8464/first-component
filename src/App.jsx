import Gallery from "./Gallery.jsx";
import Profile from "./Profile.jsx";
import TodoList from "./TodoList.jsx";
import PackingList from "./PackingList.jsx";

export default function App() {
  return (
    <div>
      <Profile
        person={{ name: "Clay Rabbit", imageId: "1bX5QH6" }}
        size={300}
      />
      <TodoList />
      <PackingList />
    </div>
  );
}
