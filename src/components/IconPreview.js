import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import JavaScriptIcon from './icons/JavaScriptIcon'
import ReactIcon from './icons/ReactIcon'
import NodeIcon from './icons/NodeIcon'
import GraphqlIcon from './icons/GraphqlIcon'
import MongoDBIcon from './icons/MongoDBIcon'
import SassIcon from './icons/SassIcon'
import HTMLIcon from './icons/HTMLIcon'
import CSSIcon from './icons/CSSIcon'
import IllustratorIcon from './icons/IllustratorIcon';
import PhotoshopIcon from './icons/PhotoshopIcon';
import FigmaIcon from './icons/FigmaIcon';
import IndesignIcon from './icons/IndesignIcon';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: `100px auto`
  }
})

function IconPreview (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid
        container
        justify='space-around'
        alignItems='center'
        spacing={24}
      >
        <Grid item xs={4} sm={2}>
          <JavaScriptIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <ReactIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <FigmaIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <IllustratorIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <NodeIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <GraphqlIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <HTMLIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <CSSIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <PhotoshopIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <IndesignIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <SassIcon />
        </Grid>
        <Grid item xs={4} sm={2}>
          <MongoDBIcon />
        </Grid>
      </Grid>
    </div>
  )
}

IconPreview.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IconPreview)
