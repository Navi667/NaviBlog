import React from 'react';
import Category from '../../category/category';

export default function Categories() {
    const tags = ["react", "js", "css", "else"];
 
    return (
        <>
            {tags.map((tag, index) => {
                return <Category tagName={tag} key={index} ></Category>
            })}
        </>
    )
}