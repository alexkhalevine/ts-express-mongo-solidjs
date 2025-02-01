import type { Component } from "solid-js";

interface CustomButtonProps {
  name: string;
}

const CustomButton: Component<CustomButtonProps> = (
  props: CustomButtonProps
) => {
  return (
    <button class="transition text-4xl bg-emerald-600 w-full p-10 border-0 rounded-2xl cursor-pointer hover:bg-indigo-800 hover:text-emerald-300">
      {props.name}
    </button>
  );
};

const App: Component = () => {
  const votes = [1, 3, 5, 8];

  return (
    <div class="w-full p-20 min-w-xl">
      <header class="text-4xl mb-10">voten</header>

      <div id="timer-bar" class="flex justify-end py-10">
        <span class="text-4xl border-2 p-4 rounded-2xl border-emerald-600 ">
          60:00
        </span>
      </div>

      <div class="flex gap-4 w-full justify-between" id="votes-bar">
        {votes.map((vote: number) => (
          <CustomButton name={String(vote)} />
        ))}
      </div>
    </div>
  );
};

export default App;
