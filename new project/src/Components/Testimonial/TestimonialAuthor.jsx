import React from "react";

export default function TestimonialAuthor({name, location}) {
    return (
        <div className="testimonial-author">
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-location">{location}</p>
        </div>
    ) 
}