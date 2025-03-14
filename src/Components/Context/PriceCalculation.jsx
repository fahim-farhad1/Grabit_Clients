import { createContext, useContext, useState, useEffect } from "react";
import useCarts from "../../Hooks/useCarts";
import useWishListProducts from "../../Hooks/useWishListProducts";

// Context তৈরি করুন
export const PriceContext = createContext();

// Custom Hook তৈরি করুন Context ব্যবহারের জন্য
export const usePriceContext = () => useContext(PriceContext);

// প্রোভাইডার কম্পোনেন্ট
export const PriceCalculation = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(totalPrice)
    const [, carts] = useCarts();

    useEffect(() => {
        const calculateTotalPrice = async () => {
            let total = 0;

            for (const productId of carts?.productId) {
                const [wishListProduct] = await useWishListProducts(productId, "cart");
                if (wishListProduct && wishListProduct?.price) {
                    total += wishListProduct?.price;
                }
            }
            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [carts?.productId]);

    // প্রাইস আপডেট করার ফাংশন
    const updateTotalPrice = (priceChange) => {
        setTotalPrice((prevTotal) => prevTotal + priceChange);
    };

    const priceInfo = {
        totalPrice,
        updateTotalPrice,
    };

    return (
        <PriceContext.Provider value={priceInfo}>{children}</PriceContext.Provider>
    );
};

export default PriceCalculation;