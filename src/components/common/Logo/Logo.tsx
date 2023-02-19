import React from "react";

type Props = {
    className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <div className={className}>
        <img src="./images/logo.png" alt="Company logo" />
    </div>
  )
}

export default Logo