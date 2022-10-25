import React from "react";
import { Button } from "react-bootstrap";
import { SiBuymeacoffee } from "react-icons/si";
import classes from "./ReviewItems.module.css";

const ReviewItems = ({ course, handleAccessItem }) => {
    const { img, name } = course;
    return (
        <div className={classes.reviewItem}>
            <div>
                <img className={classes.reviewItemImg} src={img} alt={name} />
            </div>
            <div className={classes.reviewDetailsContainer}>
                <div className="py-2 me-3">
                    <p className={classes.reviewDetailsName}>{name}</p>
                </div>
                <div className={`${classes.deleteContainer} pe-2`}>
                    <Button
                        onClick={handleAccessItem}
                        className={classes.btnBuy}
                    >
                        <SiBuymeacoffee className="deleteIcon" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;
