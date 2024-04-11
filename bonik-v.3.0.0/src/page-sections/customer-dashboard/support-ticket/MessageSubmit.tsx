"use client";

import TextArea from "@component/textarea";
import { Button } from "@component/buttons";

export default function MessageSubmit() {
  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <>
      <TextArea
        rows={8}
        fullwidth
        mb="1.5rem"
        borderRadius={8}
        placeholder="Write your message here..."
      />

      <Button ml="auto" color="primary" variant="contained" onClick={handleFormSubmit}>
        Post message
      </Button>
    </>
  );
}
