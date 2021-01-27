import './_algorithm.scss';
import React from 'react';
import PropTypes from "prop-types";


const AlgorithmStage = (props) => {

    const {
        date,
        // dateToParse,
        dateNextStage,
        stageItems,
    } = props;

    const actualTime = Date.now();
    // const stageTime = Date.parse(dateToParse);
    const nextStageTime = Date.parse(dateNextStage);

    return (
        <div
            className={actualTime >= nextStageTime
                ? "algorithm-stage past-stage-text"
                : "algorithm-stage"}
        >
            <div className="algorithm-stage-date algorithm-stage-date-desktop">
                {date}
            </div>
            <div className="algorithm-stage-widget">
                <div
                    className={actualTime >= nextStageTime
                        ? "algorithm-stage-widget-circle past-stage-circle"
                        : "algorithm-stage-widget-circle"}
                >
                </div>
                <div className="algorithm-stage-widget-line">
                </div>
            </div>
            <div className="algorithm-stage-content">
                <div className="algorithm-stage-date algorithm-stage-date-mobile">
                    {date}
                </div>
                {stageItems.map((item, id) =>
                    <div
                        key={id}
                        className="algorithm-stage-item"
                    >
                        <h3 className="algorithm-stage-title">
                            {item.title}
                        </h3>
                        <p
                            className="algorithm-stage-description"
                            dangerouslySetInnerHTML={{__html: item.description}}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

AlgorithmStage.propTypes = {
    date: PropTypes.string.isRequired,
    dateToParse: PropTypes.string.isRequired,
    dateNextStage: PropTypes.string.isRequired,
    stageItems: PropTypes.array.isRequired,
};

export default AlgorithmStage;