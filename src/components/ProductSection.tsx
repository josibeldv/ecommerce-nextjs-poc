"use client";

import { Grid } from "@mui/material";
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
        <Grid container spacing={4} mt={10} mb={10} justifyContent="center">
            {sampleProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
}

