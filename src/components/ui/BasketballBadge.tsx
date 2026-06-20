import React from "react";

type BasketballBadgeProps = {
  label: string;
};

export default function BasketballBadge({ label }: BasketballBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-orange-300 dark:border-orange-800 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-3 py-1 text-sm font-medium">
      {label}
    </span>
  );
}



