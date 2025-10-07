"use client";

import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

const sampleProducts: Product[] = [
    {
        id: 1,
        nombre: "Plan Básico",
        descripcion: "Incluye 10GB de datos, llamadas ilimitadas.",
        precio: "$10/mes",
        imagen: "/images/products/woocommerce-placeholder.png",
    },
    {
        id: 2,
        nombre: "Plan Avanzado",
        descripcion: "Incluye 50GB de datos, llamadas ilimitadas y Netflix.",
        precio: "$25/mes",
        imagen: "/images/products/woocommerce-placeholder.png",
    },
    {
        id: 3,
        nombre: "Equipo Smartphone",
        descripcion: "Smartphone última generación con garantía de 1 año.",
        precio: "$300",
        imagen: "/images/products/woocommerce-placeholder.png",
    },
];

export default function ProductsSection() {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{ mt: 10, mb: 10 }}
    >
      {sampleProducts.map((product) => (
        <Box
          key={product.id}
          sx={{
            flex: "1 1 300px", // ancho flexible
            maxWidth: 350,     // ancho máximo por tarjeta
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProductCard product={product} />
        </Box>
      ))}
    </Grid>
  );
}

