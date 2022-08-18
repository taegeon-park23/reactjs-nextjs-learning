import React from "react";
import Link from "next/link";

export const AppLayout = ({ children }) => {
  return (
    <div>
      <Link href="/">Index</Link>
      <Link href="/profile">
        <a>profile</a>
      </Link>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
