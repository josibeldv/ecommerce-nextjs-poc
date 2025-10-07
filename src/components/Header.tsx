"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/store/slices/theme/themeSlice";
import { RootState } from "@/store/store";
import { AppBar, Toolbar, Typography, Button, Stack, Box } from "@mui/material";
import Link from "next/link";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Image from "next/image";

export default function Header() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <AppBar position="static" color="primary"
            sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.getContrastText(theme.palette.primary.main),
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Link
                    href="/"
                    aria-label="Ir al inicio Tienda Digitel"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <Box display="flex" alignItems="center">
                        <Image
                            src="/images/logos/logo-digitel.svg"
                            alt="Tienda Digitel logo"
                            width={120}
                            height={40}
                            priority
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                ml: 1.5,
                                fontWeight: "bold",
                                color: "inherit",
                            }}
                        >
                        </Typography>
                    </Box>
                </Link>

                <Stack direction="row" spacing={2}>
                    <Link href="/productos">
                        <Button
                            sx={{
                                border: "none"
                            }}
                            variant="outlined" color="inherit">
                            Productos
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button
                            sx={{
                                border: "none"
                            }}
                            variant="outlined" color="inherit">
                            Login
                        </Button>
                    </Link>

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            boxShadow: "none !important",
                            backgroundColor: (theme) => theme.palette.primary.main,
                        }}
                        onClick={() => dispatch(toggleDarkMode())}
                    >
                        {darkMode ? <WbSunnyIcon /> : <BedtimeIcon />}
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
