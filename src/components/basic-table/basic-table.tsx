import { FC, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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

const StyledTableCell = styled(TableCell)((props) => {
  return {
    "&.MuiTableCell-root": { borderBottom: "none" },
    "&.MuiTableCell-head": {
      rowGap: 2,
      backgroundColor: "#F4F7F9",
      color: props.theme.palette.primary,
    },
    ".MuiSvgIcon-root": {
      marginRight: "5px",
    },
    "&.MuiTableCell-body": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      minWidth: "0px",
      maxWidth: "100px",
    },
    "&>.badge": {
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
      "&.picked_up,&.in_transit,&.last_mile,&.delivery_attempt": {
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
    },
  };
});

const BasicTable: FC = () => {
  const [openMessageCopy, setOpenMessageCopy] = useState(false);

  const handleCopyTrackingNumber = (trackingNumber: string) => {
    navigator.clipboard.writeText(trackingNumber);
    setOpenMessageCopy(true);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          id="table-shipment"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <CellTooltip text="Permite saber el nombre del cliente." />
                Cliente
              </StyledTableCell>
              <StyledTableCell>
                <CellTooltip text="Permite saber el nombre de la paquetería." />
                Paquetería
              </StyledTableCell>
              <StyledTableCell>
                <CellTooltip text="Permite saber el número de rastreo del envío." />
                Nº de Rastreo
              </StyledTableCell>
              <StyledTableCell>
                <CellTooltip text="Permite saber el estatus del envío y los días que ha permanecido en el estatus actual." />
                Estatus
              </StyledTableCell>
              <StyledTableCell>Compartir</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.client}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell>{row.client}</StyledTableCell>
                <StyledTableCell>{row.carrier}</StyledTableCell>
                <StyledTableCell>
                  <Box
                    sx={{ display: "inline-block" }}
                    onClick={() =>
                      handleCopyTrackingNumber(row.tracking_number)
                    }
                  >
                    <ContentCopyIcon
                      sx={{ fontSize: "14px", color: "#7b85a1" }}
                    />
                  </Box>
                  {row.tracking_number}
                </StyledTableCell>
                <StyledTableCell>
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      padding: "0px 12px",
                      borderRadius: "16px",
                    }}
                    className={`badge ${row.id}`}
                  >
                    <span>{row.status}</span>
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5233EA",
                      "&:hover": { backgroundColor: "#5233EA" },
                      ".MuiSvgIcon-root": { marginRight: "0px" },
                    }}
                    onClick={() =>
                      window.open(
                        `https://api.whatsapp.com/send?text=Revisa%20el%20rastreo%20de%20tus%20guía%20en%20el%20siguiente%20link%20https://rastreo.skydropx.com/?tracking_number=${row.tracking_number}`
                      )
                    }
                  >
                    <WhatsAppIcon />
                  </Button>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openMessageCopy}
        onClose={() => setOpenMessageCopy(false)}
        autoHideDuration={3000}
        message="Número de rastreo copiado al portapapeles"
      />
    </>
  );
};

export default BasicTable;
