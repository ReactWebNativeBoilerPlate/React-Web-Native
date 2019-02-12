import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {

    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


const tileData = [
    {
        img: require('../../images/grid/img1.jpeg'),
        title: 'Breakfast',
        author: 'jill111',
        cols: 2,
        featured: true,
    },
    {
        img: require('../../images/grid/img2.jpeg'),
        title: 'Tasty burger',
        author: 'director90',
    },
    {
        img: require('../../images/grid/img3.jpeg'),
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: require('../../images/grid/img4.jpeg'),
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: require('../../images/grid/img5.jpeg'),
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: require('../../images/grid/img6.jpeg'),
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: require('../../images/grid/img7.jpeg'),
        title: 'Vegetables',
        author: 'jill111',
        cols: 2,
    },
    {
        img: require('../../images/grid/img8.jpeg'),
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: require('../../images/grid/img9.jpeg'),
        title: 'Sea star',
        cols: 2,
        author: '821292',
    },
    {
        img: require('../../images/grid/img10.jpeg'),
        title: 'Bike',
        author: 'danfador',
    },
];





function TitlebarGridList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">December</ListSubheader>
                </GridListTile>
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);