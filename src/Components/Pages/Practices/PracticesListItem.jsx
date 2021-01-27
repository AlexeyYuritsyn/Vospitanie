import React from 'react';
import {NavLink} from "react-router-dom";
import dateIcon from "./icons/date.svg";
import schoolIcon from "./icons/school.svg";
//import authorIcon from "./icons/teacher.svg";
import thumbUp from "./icons/thumb-up.png";


function PracticesListItem(props) {

    const {event, isCity} = props;

    return (
        <>
            <NavLink to={isCity ? `/city-practices/${event.id}` : `/practices/${event.id}`}
                     className="practices-event-block fade-in">
                <div className="practices-event-type">{event.nomination_name}</div>
                <div className="practices-event-title">{event.title}</div>
                <div className="practices-event-desc" dangerouslySetInnerHTML={{__html: event.project_idea}}/>
                <div className="practices-event-stats">
                    {
                        event.school_name &&
                        <div className="practices-event-stats-item">
                            <img src={schoolIcon} alt="школа"/>
                            <div className="practices-event-stats-text">
                                {event.school_name}
                            </div>
                        </div>
                    }
                    {
                        event.date_change &&
                        <div className="practices-event-stats-item">
                            <img src={dateIcon} alt="дата"/>
                            <div className="practices-event-stats-text">
                                {event.date_change}
                            </div>
                        </div>
                    }
                    {/*{
                        event.fio &&
                        <div className="practices-event-stats-item">
                            <img src={authorIcon} alt="автор"/>
                            <div className="practices-event-stats-text">
                                {event.fio}
                            </div>
                        </div>
                    }*/}
                </div>
                {
                    !isCity &&
                    <div className="practices-event-rating-block">
                        <div className="practices-event-rating-item">
                            <img src={thumbUp} alt="лайки"/>
                            <div className="practices-event-rating-item-text">{event.likeCount}</div>
                        </div>
                        <div className="practices-event-rating-item-text">Рейтинг&nbsp;{event.rating}</div>
                    </div>
                }
            </NavLink>
        </>
    );
}

export default PracticesListItem;