import React, {useEffect, useState} from 'react';
import './_practicesItem.scss';
import thumbUp from "../icons/thumb-up.png";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import axios from "axios";
import api from "../../../../assets/api";


const PracticesCommentsAnswer = (props) => {

    const {
        item,
        isLogged,
        userData,
    } = props;

    const [likesClass, setLikesClass] = useState("practices-item-stats-rating");
    const [likesCount, setLikesCount] = useState(item.likeCommentsCount);
    const [isLikeAdded, setIsLikeAdded] = useState(false);

    const addCommentLikeHandler = (commentId) => {
        if (Object.keys(userData).length !== 0 && item.likeDisable === false) {
            const addLikeUrl = `${api.addLikeForCommentsUrl}?id=${commentId}`;

            const fetchData = async () => {
                const result = await axios(
                    addLikeUrl,
                );
                setLikesCount(result.data.likeCommentsCount);
            };
            fetchData();
            setLikesClass("practices-item-like-added");
            setIsLikeAdded(true);
        }
    }

    useEffect(() => {
        let mounted = true;

        if (mounted && item.likeDisable === false && Object.keys(userData).length !== 0 && isLikeAdded === false) {
            setLikesClass("practices-item-stats-rating active-rating");
        } else if (mounted && item.likeDisable === true && Object.keys(userData).length !== 0) {
            setLikesClass("practices-item-like-added");
        }
        return () => mounted = false;
    }, [item.likeDisable, userData, isLikeAdded]);


    return (
        <div className="practices-item-comments-answer-item">
            <div className="practices-item-comments-item-author">
                {item.fi}
            </div>
            <div className="practices-item-comments-item-text-block">
                <div className="practices-item-comments-item-text"
                     dangerouslySetInnerHTML={{__html: item.content}}/>
                <div className={likesClass}
                     onClick={() => addCommentLikeHandler(item.id)}>
                    <img className="practices-item-stats-rating-image" src={thumbUp} alt="лайки"/>
                    {
                        likesCount > 0 &&
                        <div className="practices-item-stats-rating-text">{likesCount}</div>
                    }
                </div>
            </div>
        </div>
    );
}

PracticesCommentsAnswer.propTypes = {
    item: PropTypes.object.isRequired,
};

const mapStateToProps = ({globalReducer}) => ({
    userData: globalReducer.userData,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PracticesCommentsAnswer);