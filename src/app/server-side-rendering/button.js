"use client";
export default function Product({ price }) {
  return (
    <div>
      <button
        className="bg-indigo-500 text-white border-2 border-black"
        onClick={() => alert(price)}
      >
        get price
      </button>
    </div>
  );
}
