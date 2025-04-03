import React from "react";
import { Slider } from "@mui/material";

export default function CustomSlider({ value, onChange }) {
  return <Slider value={value}onChange={onChange} min={0} max={100} step={1} sx={{ width: 200 }} />;
}
