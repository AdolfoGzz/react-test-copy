import { Paper, Typography } from '@mui/material';

export default function ImportantTextBox() {
    return (
        <Paper elevation={1} sx={{ p: 2, m: 2, minWidth: 300, maxWidth: 500 }}>
          <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Paper>
    );
}