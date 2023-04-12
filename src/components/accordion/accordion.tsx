import { FC, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";

import { styled } from "@mui/system";

import { CellTooltip } from "../cell-tooltip";

function createData(
  client: string,
  carrier: string,
  tracking_number: string,
  status: string,
  id: string
) {
  return { client, carrier, tracking_number, status, id };
}

const rows = [
  createData(
    "Mariana Cano",
    "BEETRACK",
    "081438273",
    "En tránsito",
    "in_transit"
  ),
  createData(
    "Mariana Cano",
    "BEETRACK",
    "081438273",
    "En tránsito",
    "in_transit"
  ),
  createData("Jhon Doe", "FEDEX", "081434626", "Entregado", "delivered"),
  createData("Jhon Doe", "FEDEX", "081434626", "Entregado", "delivered"),
  createData("Jhon Doe", "ESTAFETA", "081434626", "Cancelado", "canceled"),
];

const StyledBox = styled(Box)((props) => {
  return {};
});

export const SimpleAccordion: FC = () => {
  const [openMessageCopy, setOpenMessageCopy] = useState(false);

  const handleCopyTrackingNumber = (trackingNumber: string) => {
    navigator.clipboard.writeText(trackingNumber);
    setOpenMessageCopy(true);
  };

  return (
    <Box>
      {rows.map((row) => (
        <Accordion key={row.tracking_number}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <CellTooltip text="Permite saber el nombre del cliente." />
              <Typography>
                <strong>Cliente: </strong> {row.client}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{ display: "flex", rowGap: "10px", flexDirection: "column" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CellTooltip text="Permite saber el nombre de la paquetería." />
                <Typography>
                  <strong>Paquetería: </strong> {row.carrier}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CellTooltip text="Permite saber el número de rastreo del envío." />
                <Typography>
                  <strong>Nº de Rastreo: </strong>
                  <Box
                    sx={{ display: "inline-block", marginRight: "5px" }}
                    onClick={() =>
                      handleCopyTrackingNumber(row.tracking_number)
                    }
                  >
                    <ContentCopyIcon
                      sx={{ fontSize: "14px", color: "#7b85a1" }}
                    />
                  </Box>
                  {row.tracking_number}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CellTooltip text="Permite saber el estatus del envío y los días que ha permanecido en el estatus actual." />
                <Typography>
                  <strong>Estatus: </strong>
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      padding: "0px 12px",
                      borderRadius: "16px",
                      span: {
                        fontSize: "12px",
                        fontWeight: "500",
                      },
                      "&.created": {
                        backgroundColor: "#F8F9FC",
                        span: {
                          color: "#657193",
                        },
                      },
                      "&.picked_up,&.in_transit,&.last_mile,&.delivery_attempt":
                        {
                          backgroundColor: "#F2F0FE",
                          span: {
                            color: "#5233EA",
                          },
                        },
                      "&.delivered": {
                        backgroundColor: "#ECFDF3",
                        span: {
                          color: "#027A48",
                        },
                      },
                      "&.canceled": {
                        backgroundColor: "#FEF0C7",
                        span: {
                          color: "#B54D12",
                        },
                      },
                      "&.exception": {
                        backgroundColor: "#FFEDEF",
                        span: {
                          color: "#C13C4B",
                        },
                      },
                    }}
                    className={`badge ${row.id}`}
                  >
                    <span>{row.status}</span>
                  </Box>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  justifyContent: "center",
                }}
              >
                <Typography>
                  <strong>Compartir </strong>
                  <IconButton
                    sx={{ marginLeft: "10px" }}
                    onClick={() =>
                      window.open(
                        `https://api.whatsapp.com/send?text=Revisa%20el%20rastreo%20de%20tus%20guía%20en%20el%20siguiente%20link%20https://rastreo.skydropx.com/?tracking_number=${row.tracking_number}`
                      )
                    }
                    aria-label="shared"
                  >
                    <WhatsAppIcon sx={{ fontSize: "18px", color: "#25D366" }} />
                  </IconButton>
                </Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
