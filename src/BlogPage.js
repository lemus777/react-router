import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPage() {
    return (
        <>
            <h1>Blog</h1>
            
            <Outlet />

            <ul>
                {blogdata.map(post => (
                    <BlogLink key={post.slog} post={post} />
                ))}
            </ul>
        </>
    );
}

function BlogLink({ post }) {
    return(
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}

export { BlogPage };

// El outlet usado aquí marca el lugar en el que vamos a situar el componente anidado, en esta caso el post (BlogPost)