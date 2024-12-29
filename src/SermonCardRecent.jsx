import { Typography, CardHeader, Card } from "@mui/material";

function SermonCardRecent() {
    return (
        <Card className="sermon-card">
            <CardHeader className="card-title"
                title="Card title"
                subheader="Card subtitle"
            />
            <Typography className="card-text">
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Typography>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </Card>
    );
}
export default SermonCardRecent