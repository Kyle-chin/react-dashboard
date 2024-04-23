import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Answer of the Important Question
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Answer of the Important Question
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}

export default FAQ