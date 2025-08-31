"use client";

import axios from "axios";

export default function Signin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-dashed p-2">
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="password"></input>
        <button
          className="bg-amber-700 border-4 border-dotted p-2"
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signin");
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
