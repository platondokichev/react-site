import './Blog.css';
import axios from "axios";
import React from 'react';
import { useState } from 'react';
import { Component } from 'react';
// import {AddPostForm} from './components/AddPostForm'
import { BlogCard } from "./BlogCard"

export class Blog extends Component {
    state = {
        showBlog: true,
        showAddForm: false, 
        blogArr: []
    };

    likePost = (pos) => {
        const temp = [...this.state.blogArr];
        temp[pos].liked = !temp[pos].liked ;
        this.setState({
            blogArr : temp
        })
    }
deletePost = (pos) =>{
    if (window.confirm(`Удалить ${this.state.blogArr[pos].title}?`)){
        const temp = [...this.state.blogArr];
        temp.splice(pos, 1);
        this.setState({
            blogArr: temp
        })
    }
}
    componentDidMount(){
        axios.get('https://672749ef302d03037e707041.mockapi.io/Anom')
        .then((response) => {
            this.setState({
                blogArr: response.data
            })
        })
        .catch((err) =>{
            console.log(err)
        })
        window.addEventListener("keyup", this.handleEscape)
    }
     
    render() {
        const blogPosts = this.state.blogArr.map((item, pos) => {
            return(
                <BlogCard
                description = {item.description}
                key = {item.id}
                title = {item.title}
                
                liked = {item.liked}
                likePost= {() => this.likePost(pos)}
                deletePost = {() => this.deletePost(pos)}
                />
            )
        })
        return( blogPosts  )
    }
    
}