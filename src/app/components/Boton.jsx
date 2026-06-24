"use client";

import Link from "next/link";

export default function Boton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  title = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold transition duration-300 cursor-pointer";

  const variantes = {
    primary: "bg-violet-600 text-white hover:bg-violet-500",
    outline:
      "border border-violet-500 text-violet-300 hover:bg-violet-500 hover:text-white",
    ghost: "bg-white/5 text-violet-300 hover:bg-white/20",
    danger: "bg-red-600 text-white hover:bg-red-500",
  };

  const clases = `${base} ${variantes[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={clases} title={title}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={clases} title={title}>
      {children}
    </button>
  );
}