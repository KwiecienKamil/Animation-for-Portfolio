import { Availability, Colors, Todo } from "./components/features/card";
import { FeatureTitle } from "./components/features/title";

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
    card: Todo
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
    card: Colors
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
    card: Availability
  }
];

function App() {
  return (
    <>
      <h1 className="h-20 bg-black"></h1>
      <div className="mx-auto max-w-6xl px-4">
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh] text-2xl">
          <ul>
            {features.map((item) => (
              <li key={item.id}>
                <FeatureTitle>{item.title}</FeatureTitle>
                </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
            {features.map((feature) => (
              <feature.card key={feature.id} />
            ))}

          </div>
        </div>
      </div>
      <div className="h-screen"></div>
      </div>
    </>
  );
}

export default App;
