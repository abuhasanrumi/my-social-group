import React from 'react';
import './Post.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {userId, id, title, body} = props.posts;

    return (
        <div> 
            <div className="post p-3">
                <div className="postImg">
                    <div className="image">
                        <img src={`https://randomuser.me/api/portraits/med/men/${userId}.jpg`} alt="userImg"/>
                    </div>
                </div> 
                <div className="postText">
                    <h6 className="mt-2">{title}</h6>
                    <p className="mt-3">{body.slice(0, 150)}..... </p>
                    <Link to={"/post/" + id}>
                        <Button className="px-3 bg-light" size="small">Learn More</Button>
                    </Link>
                </div>       
            </div>
        </div>
    );
};

export default Post;