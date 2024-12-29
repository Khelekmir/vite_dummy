import { Typography, Box, Card } from "@mui/material";
import SermonCardRecent from "./SermonCardRecent";
import SermonCardPrevious from "./SermonCardPrevious";

function Sermons() {
    return (
        <Box
            sx={{
                height: "80vh"
            }}
            className="sermons"
            display="flex"
            flexDirection="row"
            alignItems="center"
            spacing={2}
            justifyContent="space-between">
            <Box width="45%">
                <Typography
                    variant="h4"
                    sx={{
                        backgroundColor: "rgba(33, 150, 243, 0.75)", // primary.main with 80% opacity
                        padding: 1,
                        borderRadius: 1,
                    }}
                >
                    Recent Sermon
                </Typography>
                <SermonCardRecent />
            </Box>
            <Box width="45%">
                <Typography variant="h4"
                    sx={{
                        backgroundColor: "rgba(33, 150, 243, 0.75)", // primary.main with 80% opacity
                        padding: 1,
                        borderRadius: 1,
                    }}>
                    Previous Sermons</Typography>
                <SermonCardPrevious />
            </Box>
        </Box>
    )
}

export default Sermons