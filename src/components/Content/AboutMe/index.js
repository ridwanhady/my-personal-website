import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Illustration from '../../Illustration'
import ProfilePicture from '../../../assets/profilePictureZoom.png'
import useStyles from './styles'

function AboutMe (props) {
  const classes = useStyles()
  return (
    <Grid container spacing={3} id='about-me' direction='column'>
      <Grid
        item
        container
        className={classes.greeting}
        alignItems='center'
        spacing={5}
      >
        <Grid item xs={3}>
          <Illustration
            image={ProfilePicture}
            size={'medium'}
            imageName={'profilePicture'}
          />
        </Grid>
        <Grid item xs={7} container direction='column'>
          <Typography className={classes.title}>
            {'Hi! '}
            <i>{'Apa Kabar? '}</i>
          </Typography>
          <Typography className={classes.title}>
            {`I'm Ridwan Hady!`}
          </Typography>
        </Grid>
      </Grid>
      <Grid item spacing={3} direction='column'>
        <Typography className={classes.normalText}>
          {`I'm a Software Engineer who loves building websites. You can also call me a Fullstack Developer, that is, someone who became Backend Developer during the day, and Front-end Developer during the night, and sometime vice-versa.`}
        </Typography>
        <br />
        <Typography className={classes.normalText}>
          {`Recently, I've been challenging myself to build Chatbot on Mental Health as my Final Assignment. Yes, I'm still a Final Year Student at Institut Teknologi Bandung, hopefully I can grad by July this year.`}
        </Typography>
        <br />
        <Typography className={classes.subtitle}>
          {`More fun fact about me...`}
        </Typography>
        <br />
        <Typography className={classes.normalText}>
          {`I really loves Comic. I have a bunch of reading list from all over the world (Japanese Manga, Korean Manhua, Chinese Manhwa, and Webtoon as well) with multiple genres. My favorite comic still One Piece by Eichiro Oda tho.`}
        </Typography>
        <br />
        <Typography className={classes.normalText}>
          {`Aside from comic, as a common geeks you can find everywhere, I loves to watch movies, especially Anime, Marvel Movies, and Korean Drama. I also loves to watch Stand Up Comedy Special on Netflix because long ago, I kinda want to be Comedian, but I know I'm not that funny and have stage fright as well :(.`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AboutMe