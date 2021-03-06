import React, {useEffect, useState} from 'react';
import './_practicesItem.scss';
import thumbUp from "../icons/thumb-up.png";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import filterAcc from "../icons/filter-acc.svg";
import axios from "axios";
import api from "../../../../assets/api";
import PracticesCommentsAnswer from "./PracticesCommentsAnswer";


const PracticesCommentsItem = (props) => {

    const {
        item,
        practiceId,
        isLogged,
        userData,
    } = props;

    const [answersList, setAnswersList] = useState([]);
    const [likesClass, setLikesClass] = useState("practices-item-stats-rating");
    const [likesCount, setLikesCount] = useState(item.likeCommentsCount);
    const [isLikeAdded, setIsLikeAdded] = useState(false);

    const answerHandler = () => {
        if (answersList.length === 0) {
            const fetchData = async () => {
                const result = await axios(
                    `${api.practicesComments}?id=${practiceId}&parent_id=${item.id}`,
                );
                setAnswersList(result.data);
            };
            fetchData();
        }
    }

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
        <div className="practices-item-comments-item">
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
            {
                item.answerCount >= 1 &&
                <Accordion className="comment-answers-accordion"
                           allowZeroExpanded={true}
                           onChange={answerHandler}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="comment-answers-accordion__button">
                                <span className="comment-answers-title-text">Ответы ({item.answerCount})</span>
                                <img className="comment-answers-acc-img" src={filterAcc} alt="+"/>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        {
                            answersList.length !== 0 &&
                            <AccordionItemPanel className="comment-answers-accordion__panel">
                                <div className="practices-item-comments-answers-list">
                                    {
                                        answersList.map(item =>
                                            <PracticesCommentsAnswer
                                                key={item.id}
                                                item={item}
                                                isLogged={isLogged}/>
                                        )
                                    }
                                </div>
                            </AccordionItemPanel>
                        }
                    </AccordionItem>
                </Accordion>
            }
        </div>
    );
}

PracticesCommentsItem.propTypes = {
    item: PropTypes.object.isRequired,
    practiceId: PropTypes.number.isRequired,
};

const mapStateToProps = ({globalReducer}) => ({
    userData: globalReducer.userData,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PracticesCommentsItem);