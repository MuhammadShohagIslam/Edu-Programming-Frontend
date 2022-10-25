import React from "react";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";
import useFetch from "./../../hooks/useFetch";
import ReviewItems from "../../components/shared/ReviewItem/ReviewItems";
import toast from "react-hot-toast";

const Cart = () => {
    const { id } = useParams();
    const { data, loading } = useFetch("http://localhost:5000/courses", id);
    const handleAccessItem = () => {
        toast.success("Course Access Successfully!")
    };
    
    return (
        <Layout>
            {loading ? (
                <h2 className="text-center text-white">Loading...</h2>
            ) : (
                <ReviewItems
                    course={data}
                    handleAccessItem={handleAccessItem}
                />
            )}
        </Layout>
    );
};

export default Cart;
