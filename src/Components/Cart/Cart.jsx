import { useState, useEffect } from "react";
import useWishListProducts from "../../Hooks/useWishListProducts";
import ShimmerMiniCarts from "../Loading/ShimmerEffercts/ShimmerMiniCarts";
import deleteIcon from "../../assets/icons/delete.png";
import useUsers from "../../Hooks/useUsers";
import usePatchCart from "../../Hooks/usePatchCart";
import { usePriceContext } from "../Context/PriceCalculation";

const Cart = ({ id }) => {
    const [wishListProducts, isLoading] = useWishListProducts(id, "cart");
    const { name, price = 0, weight, images } = wishListProducts;

    const [users] = useUsers();
    const [removeProduct] = usePatchCart();
    const [count, setCount] = useState(1);

    const { updateTotalPrice } = usePriceContext();

    useEffect(() => {
        if (typeof price === 'number' && typeof count === 'number') {
            const total = price * count;
            updateTotalPrice(total);
    
            // ক্লিনআপ ফাংশন (যখন কম্পোনেন্ট আনমাউন্ট হয়)
            return () => {
                updateTotalPrice(-total);
            };
        }
    }, [count, price, updateTotalPrice]);

    const handleRemove = (id) => {
        const cartInfo = {
            productId: id,
            userEmail: users?.email,
        };
        removeProduct(cartInfo);
    };

    if (isLoading || !wishListProducts) {
        return <ShimmerMiniCarts />;
    }

    return (
        <div className="flex justify-between items-center border rounded bg-background">
            <img className="h-20 w-20" src={images[0]} alt="" />
            <div>
                <p className="text-secondary font-semibold">{name}</p>
                <span className="flex space-x-1">
                    <p className="text-secondary">Price: {price * count}</p> <p>x</p>
                    <p className="text-secondary">{weight}</p>
                </span>
                <div className="flex  gap-2 border bg-white rounded w-fit">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-primary text-white px-2 rounded"
                    >
                        +
                    </button>
                    <span>{count}</span>
                    <button
                        disabled={count <= 1}
                        onClick={() => setCount(count - 1)}
                        className="bg-primary text-white   px-2 rounded"
                    >
                        -
                    </button>
                </div>
            </div>
            <div>
                <button className="flex " onClick={() => handleRemove(id)}>
                    <img className="h-6 w-6" src={deleteIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Cart;