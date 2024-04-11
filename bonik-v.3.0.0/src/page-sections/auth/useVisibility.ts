import React, { useState } from "react";

export default function useVisibility() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((visible) => !visible);
  };

  return { passwordVisibility, togglePasswordVisibility };
}
