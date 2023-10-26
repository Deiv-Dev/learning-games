import React from "react";
import "./FeedbackMessageComponent.scss";
import wrong from "../../../Images/wrong.svg";
import correct from "../../../Images/correct.png";

const FeedbackMessageComponent = ({ isCorrect }) => {
    return (
        <div className="feedback-message">
            {isCorrect === true && <img src={correct} alt="correct" />}
            {isCorrect === false && (
                <img className="wrong-svg" src={wrong} alt="wrong" />
            )}
        </div>
    );
};

export default FeedbackMessageComponent;
