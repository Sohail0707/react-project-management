import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onProjectCreated }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    // Validation ...

    onProjectCreated({
      title,
      description,
      dueDate,
    });
  }

  return (
    <div className="w-[35rem] my-8">
      <menu className="mt-16 flex item-center justify-end gap-4">
        <li>
          <button className="p-2 text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" isTextarea />
        <Input type="date" ref={dueDateRef} label="Due Date" />
      </div>
    </div>
  );
}
