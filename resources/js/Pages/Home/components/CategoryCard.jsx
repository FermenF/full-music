import { Link } from "@inertiajs/react";
import React from "react";

const CategoryCard = ({ category }) => {
    const { id, name, picture_medium } = category;
    return (
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter hover:grayscale">
            <Link href={`/genre/${ id }/${ name.replace('/', '_&_') }/artists`}>
                <img className="rounded-lg" src={ picture_medium } alt="image description" />
            </Link>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <strong className="break-words">{ name.replace('/', ' / ') }</strong>
            </figcaption>
        </figure>
    );
}

export default CategoryCard;
