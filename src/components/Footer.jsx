import { Paper, Typography, Box } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ position:'absolute', bottom:0, width:'100%' }}>
            <Paper elevation={1}>
                <Box sx={{ p: 2, m: 2, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="body1" component="p">
                        © 2021 Lorem Ipsum
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}