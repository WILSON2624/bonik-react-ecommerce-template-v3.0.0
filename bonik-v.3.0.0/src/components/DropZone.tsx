import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import Box from "./Box";
import Divider from "./Divider";
import { Button } from "./buttons";
import Typography, { H5, Small } from "./Typography";

// ==============================================================
export interface DropZoneProps {
  onChange?: (files: []) => void;
}
// ==============================================================

export default function DropZone({ onChange }: DropZoneProps) {
  const onDrop = useCallback((acceptedFiles: any) => {
    if (onChange) onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 10,
    multiple: true,
    accept: { "image/*": [".png", ".jpeg", ".jpg", ".gif"] }
  });

  return (
    <Box
      display="flex"
      minHeight="200px"
      alignItems="center"
      border="1px dashed"
      borderRadius="10px"
      flexDirection="column"
      borderColor="gray.400"
      justifyContent="center"
      bg={isDragActive && "gray.200"}
      transition="all 250ms ease-in-out"
      style={{ outline: "none" }}
      {...getRootProps()}>
      <input {...getInputProps()} />
      <H5 mb="18px" color="text.muted">
        Drag & drop product image here
      </H5>

      <Divider width="200px" mx="auto" />
      <Typography
        px="1rem"
        mb="18px"
        mt="-10px"
        lineHeight="1"
        color="text.muted"
        bg={isDragActive ? "gray.200" : "body.paper"}>
        on
      </Typography>

      <Button color="primary" bg="primary.light" px="2rem" mb="22px" type="button">
        Select files
      </Button>

      <Small color="text.muted">Upload 280*280 image</Small>
    </Box>
  );
}
