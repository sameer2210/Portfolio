"use client";
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = "",
  as: Component = "button",
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  as?: "button" | "span" | "div";
}) => {
  return (
    <div className="w-full sm:w-auto">
      <Component
        className="relative inline-flex h-12 w-full sm:w-auto min-w-[200px] overflow-hidden rounded-lg p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-transform active:scale-95"
        onClick={handleClick}
        type={Component === "button" ? "button" : undefined}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium gap-2 text-white backdrop-blur-3xl ${otherClasses}`}
        >
          {position === "left" && icon}
          <span>{title}</span>
          {position === "right" && icon}
        </span>
      </Component>
    </div>
  );
};

export default MagicButton;
