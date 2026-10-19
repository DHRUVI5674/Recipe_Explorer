"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  initialValue?: string;
}

export default function SearchBar({
  initialValue = "",
}: SearchBarProps) {
  const [search, setSearch] = useState(initialValue);
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search.trim());
    }

    router.push(
      params.toString()
        ? `/recipes?${params.toString()}`
        : "/recipes"
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl gap-2"
    >
      <input
        type="text"
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
        placeholder="Search recipes..."
        className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-900"
      />

      <button
        type="submit"
        className="rounded-xl bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-700"
      >
        Search
      </button>
    </form>
  );
}