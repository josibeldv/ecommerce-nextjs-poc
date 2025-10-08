"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        setError("");
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username, password, idApp: "APP-MCC",
                    userSessionInformation: [
                        { paramName: "browser", paramValue: "Chrome" },
                        { paramName: "browserDescr", paramValue: navigator.userAgent }
                    ]
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Error de login!");
                return;
            }

            console.log("DATA", data)

            // Redirigir al dashboard
            router.push("/dashboard");
        } catch (err) {
            setError(`Error de conexión ${err}`);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
            <Typography variant="h4" mb={3}>Login</Typography>
            <TextField label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} margin="normal" />
            <TextField label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />
            {error && <Typography color="error">{error}</Typography>}
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleLogin}>
                Entrar
            </Button>
        </Box>
    );
}
