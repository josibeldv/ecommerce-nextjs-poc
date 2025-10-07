"use client";

import { Box } from "@mui/material";
import Image from "next/image";

export default function Banner() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 200, md: 400 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Image
        src="/images/banners/planes-y-paquetes-digitel.png"
        alt="Banner principal"
        fill
        style={{ objectFit: "cover"}}
        priority
      />
    </Box>
  );
}
