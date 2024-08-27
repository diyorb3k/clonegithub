import { IoSearch } from "react-icons/io5";

type Props = {
  value: string;
  Onchange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit:React.FormEventHandler<HTMLFormElement>
};
export default function SearchAndBtn(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex items-center gap-2 w-full shadow-md focus-within:ring-2 dark:focus-within:ring-gray-200
    focus-within:ring-slate-800  p-2 rounded-lg"
    >
      <div className="flex w-full items-center h-full gap-2">
        <IoSearch className="text-2xl text-blue-500  dark:tx-slate-800" />
        <input
          className="w-full h-[40px] rounded bg-inherit outline-none  px-1 text-sm"
          placeholder="Searh GitHub username...."
          type="text"
          value={props.value}
          onChange={props.Onchange}
        />
      </div>
      <button className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:opacity-80">
        seach
      </button>
    </form>
  );
}
