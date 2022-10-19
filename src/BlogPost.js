import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPost() {
    const { slug } = useParams(); // useParams es un reactHook que ya existe predefinido

    const blogpost = blogdata.find(post => post.slug === slug);

    return (
        <>
            <h2>{blogpost.title}</h2>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    );
}

export { BlogPost };