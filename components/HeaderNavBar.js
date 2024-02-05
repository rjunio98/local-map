"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function HeaderNavBar() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex gap-7 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
        />

        <h2>Home</h2>
        <h2>Favourite</h2>
      </div>

      <div className="bg-gray-100 p-[6px] rounded-md w-[40%] gap-3 hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search"
        />
      </div>

      <div>
        {session?.user ? (
          <Image
            src={session.user.image}
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : null}
      </div>
    </div>
  );
}

export default HeaderNavBar;
