import React, {useEffect, useState} from 'react';
import './_practicesItem.scss';
import thumbUp from "../icons/thumb-up.png";
import commentsImg from "../icons/chat1.svg"
import Gallery from "../../../Gallery/Gallery";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import {
    setInitialPracticesItemContent,
    addPracticeLike,
    toggleIsLikeAdded,
} from '../../../../actions/practicesItemAction';
import {useMount} from "react-use";
import Error404 from "../../Error404/Error404";
import PracticesComments from "./PracticesComments";
import YouTube from 'react-youtube';


const PracticesItem = (props) => {

    const {
        practicesItemContent,
        comments,
        likesCount,
        isSuccessful,
        userData,
        isLikeAdded,
        setInitialPracticesItemContent,
        addPracticeLike,
    } = props;

    const itemId = parseInt(props.match.params.id, 10);
    const itemPath = props.match.path;

    const [likesClass, setLikesClass] = useState("practices-item-stats-rating");
    const [isLogged, setIsLogged] = useState(false);

    useMount(() => {
        setInitialPracticesItemContent(itemId, itemPath);
    });

    useEffect(() => {
        let mounted = true;

        if (mounted && Object.keys(userData).length !== 0) {
            setIsLogged(true);
        }
        return () => mounted = false;
    }, [userData]);

    useEffect(() => {
        let mounted = true;

        if (mounted && practicesItemContent.likeDisable === false && Object.keys(userData).length !== 0 && isLikeAdded === false) {
            setLikesClass("practices-item-stats-rating active-rating");
        } else if (mounted && practicesItemContent.likeDisable === true && Object.keys(userData).length !== 0) {
            setLikesClass("practices-item-like-added");
        }
        return () => mounted = false;
    }, [practicesItemContent.likeDisable, userData, isLikeAdded]);

    const addPracticeLikeHandler = (itemId) => {
        if (Object.keys(userData).length !== 0 && practicesItemContent.likeDisable === false) {
            addPracticeLike(itemId);
            toggleIsLikeAdded(true);
            setLikesClass("practices-item-like-added");
        }
    }

    const commentsBlock = () => {
        if (practicesItemContent.type === 1 && practicesItemContent.commentsCount >= 1) {
            return <a href="#comments"
                      className="practices-item-stats-rating active-rating">
                <img className="practices-item-stats-rating-image" src={commentsImg}
                     alt="комментарии"/>
                <div
                    className="practices-item-stats-rating-text">{practicesItemContent.commentsCount}</div>
            </a>
        } else if (practicesItemContent.type === 1 && practicesItemContent.commentsCount < 1) {
            return <div className="practices-item-stats-rating">
                <img className="practices-item-stats-rating-image" src={commentsImg}
                     alt="комментарии"/>
                <div
                    className="practices-item-stats-rating-text">{practicesItemContent.commentsCount}</div>
            </div>
        }
    }

    return isSuccessful
        ?
        <Error404/>
        :
        <>
            <div className="practices-item-main-wrap container">
                <div className="practices-item-content-wrap">
                    <div className="practices-item-content-block">
                        <h3 className="practices-item-category">{practicesItemContent.nomination_name}</h3>
                        <h3 className="practices-item-title">{practicesItemContent.title}</h3>
                        {
                            practicesItemContent.project_idea.length !== 0 &&
                            <div className="practices-item-section">
                                <div className="practices-item-block-header">Оригинальная идея проекта</div>
                                <div className="practices-item-desc"
                                     dangerouslySetInnerHTML={{__html: practicesItemContent.project_idea}}/>
                            </div>
                        }
                        {
                            practicesItemContent.implementation_project.length !== 0 &&
                            <div className="practices-item-section">
                                <div className="practices-item-block-header">От задумки – до результата</div>
                                <div className="practices-item-desc"
                                     dangerouslySetInnerHTML={{__html: practicesItemContent.implementation_project}}/>
                            </div>
                        }
                        {
                            practicesItemContent.benefit.length !== 0 &&
                            <div className="practices-item-section">
                                <div className="practices-item-block-header">Полезные эффекты от реализации проекта
                                </div>
                                <div className="practices-item-desc"
                                     dangerouslySetInnerHTML={{__html: practicesItemContent.benefit}}/>
                            </div>
                        }
                        {
                            practicesItemContent.educational_practices_file.length !== 0 &&
                            <div className="practices-item-section">
                                <div className="practices-item-block-header">Файлы</div>
                                <div className="practices-item-files-wrap">
                                    {practicesItemContent.educational_practices_file.map((item) =>
                                        <a className="practices-item-files-item"
                                           key={item.id}
                                           href={item.url}
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            </div>
                        }
                        {
                            practicesItemContent.educational_practices_gallery.length !== 0 &&
                            <div className="practices-item-section">
                                <div className="practices-item-block-header">Галерея</div>
                                <Gallery
                                    galleryItems={practicesItemContent.educational_practices_gallery}/>
                            </div>
                        }
                        {
                            practicesItemContent.educational_practices_video.length !== 0 &&
                            <div className="practices-item-section">
                                <div className="practices-item-block-header">Видео</div>
                                {practicesItemContent.educational_practices_video.map((item, index) =>
                                    <div className="practices-item-video-wrap"
                                         key={index}>
                                        <YouTube className="practices-item-video"
                                                 videoId={item.replace(/.*\/+/gim, '')}/>
                                    </div>
                                )}
                            </div>
                        }
                        {
                            practicesItemContent.links.length !== 0 &&
                            <div className="practices-item-section">
                                <div className="practices-item-block-header">Ссылки</div>
                                <div className="practices-item-links-block"
                                     dangerouslySetInnerHTML={{__html: practicesItemContent.links}}/>
                            </div>
                        }
                        <div className="practices-item-stats-mobile-wrap">
                            <div className="practices-item-stats-mobile-block">
                                {
                                    practicesItemContent.school_name &&
                                    <h3 className="practices-item-stats-text">{practicesItemContent.school_name}</h3>
                                }
                                {
                                    practicesItemContent.date_change &&
                                    <h3 className="practices-item-stats-text">{practicesItemContent.date_change}</h3>
                                }
                                {
                                    practicesItemContent.rating && practicesItemContent.type === 1 &&
                                    <h3 className="practices-item-stats-text">Рейтинг&nbsp;
                                        <span
                                            className="practices-item-rating-text">{practicesItemContent.rating}</span>
                                    </h3>
                                }
                            </div>
                            {
                                practicesItemContent.type === 1 &&
                                <div className="practices-item-stats-rating-block">
                                    <div className={likesClass}
                                         onClick={() => addPracticeLikeHandler(itemId)}>
                                        <img className="practices-item-stats-rating-image" src={thumbUp} alt="лайки"/>
                                        <div className="practices-item-stats-rating-text">{likesCount}</div>
                                    </div>
                                    <div className="practices-item-stats-rating">
                                        <img className="practices-item-stats-rating-image" src={commentsImg}
                                             alt="комментарии"/>
                                        <div
                                            className="practices-item-stats-rating-text">{practicesItemContent.commentsCount}</div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    {
                        practicesItemContent.type === 1 &&
                        <PracticesComments
                            comments={comments}
                            practiceId={itemId}
                            isLogged={isLogged}/>
                    }
                </div>
                <div className="practices-item-stats-wrap">
                    <div className="practices-item-stats-block">
                        {
                            practicesItemContent.school_name &&
                            <h3 className="practices-item-stats-text">{practicesItemContent.school_name}</h3>
                        }
                        {
                            practicesItemContent.date_change &&
                            <h3 className="practices-item-stats-text">{practicesItemContent.date_change}</h3>
                        }
                        {
                            practicesItemContent.rating && practicesItemContent.type === 1 &&
                            <h3 className="practices-item-stats-text">Рейтинг&nbsp;
                                <span className="practices-item-rating-text">{practicesItemContent.rating}</span></h3>
                        }
                        {
                            practicesItemContent.type === 1 &&
                            <div className="practices-item-stats-rating-block">
                                <div className={likesClass}
                                     onClick={() => addPracticeLikeHandler(itemId)}>
                                    <img className="practices-item-stats-rating-image" src={thumbUp} alt="лайки"/>
                                    <div className="practices-item-stats-rating-text">{likesCount}</div>
                                </div>
                                {
                                    commentsBlock()
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
}

PracticesItem.propTypes = {
    practicesItemContent: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    likesCount: PropTypes.number.isRequired,
    userData: PropTypes.object.isRequired,
    isSuccessful: PropTypes.bool.isRequired,
    isLikeAdded: PropTypes.bool.isRequired,
    setInitialPracticesItemContent: PropTypes.func.isRequired,
    addPracticeLike: PropTypes.func.isRequired,
    toggleIsLikeAdded: PropTypes.func.isRequired,
};

const mapStateToProps = ({practicesItemReducer, globalReducer}) => ({
    practicesItemContent: practicesItemReducer.practicesItemContent,
    comments: practicesItemReducer.comments,
    likesCount: practicesItemReducer.likesCount,
    isLikeAdded: practicesItemReducer.isLikeAdded,
    isSuccessful: practicesItemReducer.isSuccessful,
    userData: globalReducer.userData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setInitialPracticesItemContent,
    addPracticeLike,
    toggleIsLikeAdded,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PracticesItem);