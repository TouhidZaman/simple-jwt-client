// import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";
import auth from "../../../../firebase/firebase.init";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate();

    //Loading Products
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await axiosInstance.get(
                    `my-products?addedBy=${user?.email}`
                );
                setMyProducts(data);
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        };
        getProducts();
    }, [user, navigate]);
    return (
        <div className="my-8 w-2/3 mx-auto shadow-lg text-center p-8">
            <h3 className="text-3xl my-8">This is My Items Protected page</h3>
            <p className="text-xl text-green-500">
                My Total Products is: {myProducts.length}
            </p>
        </div>
    );
};

export default MyItems;
