import './_objectives.scss';
import lamp from './images/lamp.svg';
import puzzle from './images/puzzle.svg';
import target from './images/target.svg';
import chevron from '../../../../Header/MenuDesktop/DropdownProfile/chevron.svg';
import React, {useState} from "react";
import ObjectivesItem from "./ObjectivesItem";


const objectivesItems = [
    {
        header: 'Идея',
        text: ['Школы и колледжи представляют на конкурс уникальные воспитательные проекты, востребованные среди обучающихся, родителей и педагогов этих образовательных организаций'],
        icon: lamp
    },
    {
        header: 'Цель',
        text: ['Выявление и тиражирование лучших воспитательных практик, распространение инновационного опыта педагогических коллективов московских школ и колледжей в контексте вступления в силу с 01.09.2020 изменений в 273-ФЗ «Закон об образовании» по вопросам воспитания обучающихся'],
        icon: target
    },
    {
        header: 'Задачи',
        text: [
            'Мотивировать образовательные организации тиражировать лучшие практики воспитательной работы',
            'Сформировать пул новых уникальных мероприятий для включения в систему общегородских событий',
            'Выявить образовательные организации, способные выступить в роли школ-консультантов по вопросам совершенствования воспитательной работы'
        ],
        icon: puzzle
    },
];

const Objectives = (props) => {

    const {header} = props;

    const [isOpenDetails, setDetailsStatus] = useState(false);

    return (
        <div className="objectives container">
            <h3 className="home-page-block-header">{header}</h3>
            <div
                className={isOpenDetails ? "objectives-spoiler hide-spoiler" : "objectives-spoiler"}
                onClick={() => setDetailsStatus(!isOpenDetails)}
            >
                <p className="objectives-spoiler-text">Показать информацию о конкурсе</p>
                <img
                    className="objectives-spoiler-chevron"
                    src={chevron}
                    alt="chevron"
                />
            </div>
            <details
                className="objectives-text-details"
                open={isOpenDetails}
            >
                <summary className="objectives-text-summary hide-spoiler"></summary>
                <div className="objectives-items-container">
                    {objectivesItems.map((item, id) =>
                        <ObjectivesItem
                            key={id}
                            header={item.header}
                            text={item.text}
                            icon={item.icon}
                        />
                    )}
                </div>
            </details>
            <p
                className={isOpenDetails ? "objectives-spoiler" : "objectives-spoiler hide-spoiler"}
                onClick={() => setDetailsStatus(!isOpenDetails)}
            >
                Скрыть
            </p>
        </div>
    )
}

export default Objectives;