import './_objectives.scss';
import React from "react";


const ObjectivesItem = (props) => {

    const {header, text, icon} = props;

    const ObjectivesList = (props) => {

        const {text} = props;

        return (
            <ol className="objectives-item-list">
                {text.map((item, id) =>
                    <li
                        key={id}
                        className="objectives-item-list-item"
                    >
                        {item}
                    </li>
                )}
            </ol>
        )
    }

    const ObjectivesSingleItem = (props) => {

        const {text} = props;

        return (
            <p className="objectives-single-item">
                {text}
            </p>
        )
    }

    return (
        <div className="objectives-item">
            <img
                className="objectives-item-icon"
                src={icon}
                alt={header}
            />
            <div className="objectives-item-wrap">
                <h3 className="objectives-item-header">{header}</h3>
                {
                    text.length > 1
                        ? <ObjectivesList text={text} />
                        : <ObjectivesSingleItem text={text} />
                }
            </div>

        </div>
    )
}

export default ObjectivesItem;