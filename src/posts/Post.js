import React from 'react'
import {useState, useEffect} from 'react'

import './Post.css'

import Button from '@material-ui/core/Button'
// material ui imports
import { Avatar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Comment } from '../comments/Comment'
import { commentsData } from '../comments/commentsData'
import { Grid } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove';

export const Post = ({img,name,text, isAdded, handleRemove, currentIndex, listId}) => {
    // const [commentData, setCommentData] = useState(commentsData);

    // useEffect(() => {
    //     console.log("tyu")
    //     setCommentsRate(1,10, commentsData);
    // }, []);

    console.log(commentsData,"fdfdfd")

    // generate comments rating from n to n number
    // const setCommentsRate = (from, to, commentsData) => {
    //     commentsData.forEach((comment) => {
    //         setComme comment.rate = Math.floor(Math.random() * (to - from)) + to;
    //     })
    // }

    return (
        <>
            <Paper className="post__paper">
                <Box className="post__img-wrapper">
                    <Avatar className="post__img" alt="comment author" src={img} />
                    <Typography className="post__text" variant="h6">{name}</Typography>
                    <Button>
                        {isAdded ? <RemoveIcon onClick={(e) => handleRemove(e, currentIndex, listId)} /> : null}
                    </Button>
                </Box>
                <Typography variant="body1">{text}</Typography>
            </Paper>

            <Typography variant="body1">
                Comments
            </Typography>

            {!isAdded ? commentsData.map((comment,index) => {
                return (
                    <Grid container justify="center" key={index}>
                        <Grid item xs={6}>
                            <Comment name={comment.name} img={comment.img} text={comment.text} rate={comment.rate}/>
                        </Grid>
                    </Grid>
                )
            }) : null}
        </>
    )
}