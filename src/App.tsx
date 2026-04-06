import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="p-10 space-y-4 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600">
        CourseLink Front Test
      </h1>

      <ul className="list-disc ml-5 text-slate-700">
        <li>React - Vite - Typescript - Tailwind</li>
      </ul>

      <div className="pt-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-slate-800"
        >
          Count is: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
