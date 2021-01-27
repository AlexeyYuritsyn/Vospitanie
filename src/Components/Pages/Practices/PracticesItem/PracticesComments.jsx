import React from 'react';
import './_practicesItem.scss';
import thumbUp from "../icons/thumb-up.png";
import commentsImg from "../icons/chat1.svg"
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import PracticesCommentsItem from "./PracticesCommentsItem";


const PracticesComments = (props) => {

    const {
        comments,
        practiceId,
        user,
    } = props;

    return (
        <>
            {
                comments.length !== 0 &&
                <div id="comments" className="practices-item-comments-wrap">
                    <div className="practices-item-comments-block-header">Комментарии</div>
                    <div className="practices-item-comments-list">
                        {
                            comments.map(item =>
                                <PracticesCommentsItem
                                    key={item.id}
                                    practiceId={practiceId}
                                    item={item}/>
                            )
                        }
                    </div>
                </div>
            }
        </>
    );
}

PracticesComments.propTypes = {
    comments: PropTypes.array.isRequired,
    practiceId: PropTypes.number.isRequired,
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PracticesComments);