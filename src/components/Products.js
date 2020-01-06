import React from "react";
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faReact, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
      },
      cardGrid: {
        width: '90%',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      leftIcon: {
        marginRight: theme.spacing(1),
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      iconSmall: {
        fontSize: 20,
      },
      title: {
      marginTop: theme.spacing(4),
    },
  }));

function Products() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <MainHeader />
            <Container maxWidth="md" className={classes.title}>
                <Typography component="h2" variant="h3" align="left" color="textSecondary" gutterBottom>
                  Products
                </Typography>
            </Container>

            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Grid item key={1} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="./static/materials/profile/github.png"
                            title="GitHub"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                GitHub
                            </Typography>
                            <Typography>
                                GitHubアカウント．主にここに制作物をあげています．
                            </Typography>
                            </CardContent>
                            <CardActions>
                            
                            <Fab variant="extended" size="medium" color="default" aria-label="add" className={classes.rightIcon} href="https://github.com/yagijin" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare}  size="lg" className={classes.leftIcon}/>
                            GitHub
                            </Fab>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item key={2} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="./static/materials/profile/mousehat.png"
                            title="mousehat"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                MouseHat
                            </Typography>
                            <Typography>
                               様々な賞を受賞．<br/>
                               口癖を直すのを手伝ってくれるWebアプリ．<br/>
                               JPHacks2019にて作成．<br/>
                               内部の処理を担当．
                            </Typography>
                            </CardContent>
                            <CardActions>
                            
                            <Fab variant="extended" size="medium" color="default" aria-label="add" className={classes.rightIcon} href="https://github.com/jphacks/NG_1904" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare}  size="lg" className={classes.leftIcon}/>
                                GitHub
                            </Fab>

                            <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.rightIcon} href="https://mousehat.tokyo/" target="_blank">
                                Mousehat
                            </Fab>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item key={3} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="./static/materials/profile/e-Bookmark.png"
                            title="Portfolio"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                eBookmark
                            </Typography>
                            <Typography>
                                審査員特別賞受賞．<br/>
                                OLEDとNFCで構成される次世代のしおり．<br/>
                                KMハッカソンにて作成．<br/>
                                主にデバイス側の処理を担当．
                            </Typography>
                            </CardContent>
                            <CardActions>
                        
                            <Fab variant="extended" size="medium" color="default" aria-label="add" className={classes.rightIcon} href="https://github.com/yagijin/ebookmark_device" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare}  size="lg" className={classes.leftIcon}/>
                                GitHub
                            </Fab>
                            <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.rightIcon} href="http://konicaminolta-hackathon.mystrikingly.com/" target="_blank">
                                konicaMinolta
                            </Fab>
                            </CardActions>
                        </Card>          
                        </Grid>

                        <Grid item key={4} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="./static/materials/profile/minimom.png"
                            title="Portfolio"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                MiniMom
                            </Typography>
                            <Typography>
                                Cookpad賞受賞<br/>
                                片付けを習慣づけるお手伝いをしてくれるIoT棚<br/>
                                OthloHack2019にて作成<br/>
                                サーバサイドを担当
                            </Typography>
                            </CardContent>
                            <CardActions>
                        
                            <Fab variant="extended" size="medium" color="default" aria-label="add" className={classes.rightIcon} href="https://github.com/yagijin/MiniMom" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare}  size="lg" className={classes.leftIcon}/>
                                GitHub
                            </Fab>
                            <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.rightIcon} href="https://hack.othlo.tech/2019/" target="_blank">
                                OthloHack
                            </Fab>
                            </CardActions>
                        </Card>          
                        </Grid>
                        
                        <Grid item key={5} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="./static/materials/profile/hacku.png"
                            title="HackU"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                お母さん検出装置
                            </Typography>
                            <Typography>
                                HappyHacking賞受賞.<br/>
                                任意の相手がWifiにつないだ時に検知して通知してくれるサービス．<br/>
                                HackU2019Nagoyaにて作成．<br/>
                                Androidアプリを担当．
                            </Typography>
                            </CardContent>
                            <CardActions>
                            
                            <Fab variant="extended" size="medium" color="default" aria-label="add" className={classes.rightIcon} href="https://github.com/yagijin/hack_u2019nagoya" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare}  size="lg" className={classes.leftIcon}/>
                                GitHub
                            </Fab>

                            <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.rightIcon} href="https://hacku.yahoo.co.jp/hacku2019nagoya/" target="_blank">
                            <FontAwesomeIcon icon={faYahoo}  size="md" className={classes.leftIcon}/>
                                Yahoo!
                            </Fab>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item key={6} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="./static/materials/profile/stick.jpg"
                            title="HackU"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                洗濯日和
                            </Typography>
                            <Typography>
                                IoT物干し竿．<br/>
                                太陽の方角を自動で向き，雨が降るとき自動で取り込むためはやく乾燥できる．<br/>
                                HackU2019Meijoにて作成．<br/>
                                サーバサイドを担当．
                            </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                        </Grid>

                        <Grid item key={7} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="./static/materials/profile/portfolio.png"
                            title="Portfolio"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                ポートフォリオ
                            </Typography>
                            <Typography>
                                このポートフォリオサイト．<br/>
                                <FontAwesomeIcon icon={faReact}  size="md" className={classes.leftIcon}/>Reactにて作成
                            </Typography>
                            </CardContent>
                            <CardActions>
                        
                            <Fab variant="extended" size="medium" color="default" aria-label="add" className={classes.rightIcon} href="https://github.com/yagijin/portfolio" target="_blank">
                            <FontAwesomeIcon icon={faGithubSquare}  size="lg" className={classes.leftIcon}/>
                                GitHub
                            </Fab>
                            <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.rightIcon} href="https://portfolio.yagijin.com/" target="_blank">
                            <FontAwesomeIcon icon={faHome}  size="lg" className={classes.leftIcon}/>
                                TopPage
                            </Fab>
                            </CardActions>
                        </Card>          
                        </Grid>
                    </Grid>
                </Container>
            <MainFooter />
        </React.Fragment>
    );
}

export default Products;