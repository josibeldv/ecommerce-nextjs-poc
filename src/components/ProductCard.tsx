"use client";

import { Product } from "@/types/product";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";


interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card>
            <CardMedia
                component="img"
                height={160}
                image={product.imagen}
                alt={product.nombre}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    {product.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.descripcion}
                </Typography>
                <Typography variant="subtitle1" color="text.primary" sx={{ mt: 1 }}>
                    {product.precio}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Agregar al carrito
                </Button>
            </CardContent>
        </Card>
    );
}
