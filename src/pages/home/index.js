import React, { Component } from "react";
import { withStyles, Typography, Divider } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: "2.5vh",
    marginBottom: "2.5vh",
    maxWidth: "80vw",
    marginLeft: "10vw",
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h2">Home</Typography>
        <Divider />
        <br/>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros
          nisi, dictum et pretium sed, imperdiet ut lectus. Maecenas non pretium
          est. Phasellus sit amet dui in velit consequat interdum. Nulla nisi
          orci, sodales sit amet fermentum et, hendrerit sit amet ante. Praesent
          tempor metus id faucibus pulvinar. Phasellus dapibus sem ex, in
          venenatis risus facilisis in. Donec porta finibus nibh quis luctus.
          Sed nec condimentum orci. Praesent metus neque, hendrerit quis iaculis
          nec, auctor nec risus. In imperdiet nibh et neque tincidunt, maximus
          imperdiet tellus bibendum. Sed sollicitudin erat purus, non viverra
          tortor porttitor ut. Mauris euismod dui vel lectus efficitur lobortis.
          Nam non imperdiet est. Fusce vel pulvinar nunc, ultricies pellentesque
          nulla. Donec eu interdum ante. Pellentesque cursus tempor enim, mollis
          interdum mauris rutrum id. Mauris sollicitudin nec libero sed varius.
          Mauris semper sed magna nec pellentesque. Vivamus suscipit, diam ac
          accumsan porttitor, sem erat ultrices sem, nec tempus metus augue nec
          justo. Vivamus semper tincidunt auctor. Phasellus ante nisl, malesuada
          sit amet mi nec, euismod pulvinar odio. Proin in urna id nibh
          fringilla condimentum eleifend eget odio. Donec nisi nisi, consectetur
          quis nunc sit amet, auctor laoreet libero. Nunc vel commodo est.
          Maecenas vel posuere massa, eu convallis metus. Donec at ex nisl.
          Quisque blandit nibh viverra, pulvinar metus vel, eleifend sapien.
          Donec nec accumsan tortor. Nunc malesuada nec tellus nec sollicitudin.
          Sed tincidunt cursus velit, non molestie velit semper eu. Phasellus
          tellus felis, venenatis ac pellentesque vel, malesuada in nibh.
          Quisque ut diam eget erat bibendum blandit ac eu nunc. Donec posuere
          tempus eros eu hendrerit. Suspendisse tempor tortor eu dolor
          hendrerit, id eleifend sapien fringilla. Aenean in tempor sapien. In
          in nisl ligula. Cras tempor ex nulla, sed ultricies ante feugiat eu.
          Donec pellentesque, urna tincidunt fermentum pharetra, mauris nunc
          interdum purus, nec maximus sem lacus accumsan lectus. Maecenas
          egestas purus sed quam commodo mollis. Pellentesque cursus venenatis
          luctus. Vivamus placerat et nibh at rhoncus. Phasellus rutrum diam eu
          tellus dapibus, ac rutrum urna euismod. Sed accumsan commodo nisi id
          rhoncus. Sed venenatis dolor vel sem ullamcorper porttitor. Maecenas
          at libero ut ipsum sagittis elementum. Ut orci nunc, mattis eu ex in,
          scelerisque efficitur diam. Vestibulum lorem purus, ultricies non
          tellus eget, facilisis vehicula turpis. Cras aliquet, justo facilisis
          fringilla blandit, nunc massa pellentesque lorem, nec mattis turpis
          neque viverra neque. Suspendisse non nisl commodo ante interdum
          ultrices eu et dolor. Praesent in nibh sit amet dolor feugiat aliquam.
          Vivamus ultrices laoreet ante, eu scelerisque sapien hendrerit sit
          amet. Nullam accumsan nunc et nibh viverra ultrices. Vestibulum tortor
          leo, commodo non lorem sed, rhoncus faucibus orci. Nam quis tortor id
          urna vehicula mollis. Nulla auctor ligula sed hendrerit luctus. Nunc
          lacus sem, ornare quis egestas eget, condimentum a augue. Proin
          ultricies massa lacus, at cursus orci vestibulum vel.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
