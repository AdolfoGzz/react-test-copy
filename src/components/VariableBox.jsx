import CustomSlider from "./CustomSlider";
import { Paper, Typography, Button } from "@mui/material";
import { useState } from "react";

export default function VariableBox() {
    const [value, setValue] = useState(50);
    return (
        <Paper sx={{ display: 'flex' , justifyContent: 'center', alignItems: 'center' , minWidth: 500, gap: 6, flexDirection: 'column', p:2, m:2}}>
          <Typography variant="h5">Lorem Ipsum's: {value}</Typography>
          <Button variant="contained" color="primary" onClick={() => setValue(value + 10)}>
              More
          </Button>
          <CustomSlider value={value} onChange={(e, newValue) => setValue(newValue)} />
        </Paper>
    )
}