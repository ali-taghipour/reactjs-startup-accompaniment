import React from "react"
import Dialog from "@material-ui/core/Dialog"
import Grid from "@material-ui/core/Grid"
import DialogContent from "@material-ui/core/DialogContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"

type ContentType = {
  faTitle: string
  faBody: string
  enTitle: string
  enBody: string
}

type Properties = {
  content: ContentType
  open: boolean
  setOpen: any
}

const DialogContainer: React.FC<Properties> = (props) => {
  const theme = useTheme()

  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Dialog
      fullScreen={matchesXs}
      maxWidth="lg"
      PaperProps={{ style: { width: "70em" } }}
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <DialogContent>
        <Grid container direction="column">
          <Grid item container direction="column">
            <Typography variant="h5" gutterBottom align="right">
              اطلاعات
            </Typography>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1" align="right">
              {props.content.faTitle}
            </Typography>
            <Typography gutterBottom variant="body1" align="right">
              {props.content.faBody}
            </Typography>
          </Grid>
          <Grid item>
            <Divider style={{ marginTop: "1em" }} />
          </Grid>
          <Grid item style={{ direction: "ltr" }}>
            <Typography gutterBottom variant="subtitle1" align="left">
              {props.content.enTitle}
            </Typography>
            <Typography gutterBottom variant="body1" align="left">
              {props.content.enBody}
            </Typography>
          </Grid>
          <Grid
            item
            container
            style={{
              marginTop: "2em",
              marginBottom: "1em",
              direction: "rtl",
            }}
            direction={matchesSm ? "column" : "row"}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                variant="contained"
                onClick={() => props.setOpen(false)}
              >
                تأیید
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default DialogContainer
