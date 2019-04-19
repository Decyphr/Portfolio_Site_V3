import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    border: `1px solid #070707`,
    borderRadius: 0,
    maxWidth: 550,
    maxHeight: 350,
    textAlign: 'center',
  },
  media: {
    height: 140,
  },
};

function ProjectCard(props) {
  const { classes, title, image, description } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia>
          <img src={image.url} alt={image.fileName} />
        </CardMedia>
        <CardContent style={{ marginTop: -35 }} >
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
