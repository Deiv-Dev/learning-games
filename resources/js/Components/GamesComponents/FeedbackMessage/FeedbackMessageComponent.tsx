import React from "react";
import "./FeedbackMessageComponent.scss";
import wrong from "../../../Images/wrong.svg";
import correct from "../../../Images/correct.png";

interface FeedbackMessageProps {
    isCorrect: boolean | null;
}

const FeedbackMessageComponent: React.FC<FeedbackMessageProps> = ({
    isCorrect,
}) => {
    return (
        <div className="feedback__message">
            {isCorrect === true && <img src={correct} alt="correct" />}
            {isCorrect === false && (
                <img
                    className="feedback__message__wrong"
                    src={wrong}
                    alt="wrong"
                />
            )}
        </div>
    );
};

export default FeedbackMessageComponent;
