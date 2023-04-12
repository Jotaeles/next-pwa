import React, { FC } from "react";

import Tooltip from "@mui/material/Tooltip";
import HelpOutline from "@mui/icons-material/HelpOutline";

type CellTooltipProps = {
  text: string;
};

export const CellTooltip: FC<CellTooltipProps> = ({ text }) => {
  return (
    <Tooltip
      sx={{ fontSize: "16px", verticalAlign: "middle" }}
      title={text}
      placement="top"
      arrow
    >
      <HelpOutline />
    </Tooltip>
  );
};
