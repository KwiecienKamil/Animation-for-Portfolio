import { FeatureTitle } from "./components/features/title";

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",
  },
  {
    title: "Color your calendar to organize",
    id: "colors",
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",
  },
  {
    title: "Track what you listened to when",
    id: "music",
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",
  },
  {
    title: "Always know what your team is up to",
    id: "team",
  },
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
            div Col
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
      </div>
    </>
  );
}

export default App;
