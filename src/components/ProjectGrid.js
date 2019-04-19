import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ProjectCard from './ProjectCard';
import { ProjectLink } from './Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: `100px auto`
  }
})

function ProjectGrid (props) {
  const { classes, data } = props

  return (
    <div className={classes.root}>
      <Grid
        container
        justify='space-around'
        alignItems='center'
        spacing={40}
      >
        {data.allContentfulProject.edges.map((project, i) => (
          <Grid item xs={12} sm={6}>
            <ProjectLink href={project.node.url} style={{ textDecoration: 'none' }}>
              <ProjectCard 
                key={i}
                title={project.node.title} 
                description={project.node.description}
                image={project.node.image.file}
                link={project.node.url}  
              />
            </ProjectLink>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

ProjectGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProjectGrid)
