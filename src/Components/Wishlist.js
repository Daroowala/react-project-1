import React from "react";
import { useWishlist } from "./WishlistContext";


const Wishlist = () => {
    const { wishlist } = useWishlist();

    return (
        <div>
            <h1>Your Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>No items in your wishlist.</p>
            ) : (
                <ul>
                    {wishlist.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;
