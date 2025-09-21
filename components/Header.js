import { FaSearch, FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black fixed top-0 w-full z-50">
      <h1 className="text-2xl font-bold text-red-600">NETFLIX</h1>
      <div className="flex space-x-4 items-center">
        <FaSearch className="cursor-pointer" />
        <FaBell className="cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded w-8 h-8"
        />
      </div>
    </header>
  );
}