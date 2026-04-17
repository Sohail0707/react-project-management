import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] my-8">
      <menu className="mt-16 flex item-center justify-end gap-4">
        <li>
          <button className="px-2 py-2 text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" isTextarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
