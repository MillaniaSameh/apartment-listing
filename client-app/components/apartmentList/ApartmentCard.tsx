import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

type HeaderParams = {
  compoundName: string;
  location: string;
  description: string;
  price: string;
  imageUrl: string;
};

function ApartmentCard(props: HeaderParams) {
  return (
    <Card sx={{ width: { xs: 325, sm: 400 }, height: 400 }}>
      <CardActionArea sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="250"
          image={props.imageUrl}
          alt="apartment image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginBottom: 0 }}
          >
            {props.compoundName}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginBottom: 1.5 }}
          >
            {props.location}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.description}
          </Typography>
          <Typography gutterBottom sx={{ fontSize: 20, marginTop: 1.5 }}>
            {props.price} EGP
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ApartmentCard;
