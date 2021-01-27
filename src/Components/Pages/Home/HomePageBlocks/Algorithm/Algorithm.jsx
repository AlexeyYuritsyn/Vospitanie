import './_algorithm.scss';
import chevron from '../../../../Header/MenuDesktop/DropdownProfile/chevron.svg';
import React, {useState} from 'react';
import PropTypes from "prop-types";
import AlgorithmStage from "./AlgorithmStage";


const stages = [
    {
        date: '2 ноября 2020 года',
        dateToParse: '2020-11-02',
        dateNextStage: '2020-11-19',
        stageItems: [
            {
                title: 'Анонс мероприятия',
                description: 'Представление концепции Городского конкурса на заседании Палаты МРСД'
            }
        ]
    },
    {
        date: '19 ноября 2020 года',
        dateToParse: '2020-11-19',
        dateNextStage: '2020-11-25',
        stageItems: [
            {
                title: 'Регистрация',
                description: 'Объявление о начале приёма заявок на Городском семинаре управленческой навигации. Директор образовательной организации регистрируется на сайте <span>vospitanie.mosmetod.ru</span> и регистрирует трёх экспертов'
            },
            {
                title: 'Начало приёма заявок',
                description: 'Образовательные организации размещают свои проекты на краудсорсинговой платформе <span>vospitanie.mosmetod.ru</span>, участвуют в дискуссиях с экспертами, совершенствуют свои воспитательные практики'
            }
        ]
    },
    {
        date: '25 ноября 2020 года',
        dateToParse: '2020-11-25',
        dateNextStage: '2020-12',
        stageItems: [
            {
                title: 'Презентация конкурса',
                description: 'Презентация Городского конкурса лучших воспитательных практик на площадке проекта <a href="http://class.mosmetod.ru/" target="_blank" rel="noopener noreferrer">«Классный руководитель онлайн»</a>'
            }
        ]
    },
    {
        date: 'декабрь 2020 года',
        dateToParse: '2020-12',
        dateNextStage: '2021-01-01',
        stageItems: [
            {
                title: 'Онлайн-консультации',
                description: 'Городской методический центр проведёт цикл онлайн-консультаций в рамках проекта <a href="http://class.mosmetod.ru/" target="_blank" rel="noopener noreferrer">«Классный руководитель онлайн»</a>, посвящённых вопросам участия образовательных организаций в Городском конкурсе лучших воспитательных практик и осуществлению экспертной оценки проектов'
            }
        ]
    },
    {
        date: 'до 19 февраля 2021 года',
        dateToParse: '2021-02-01',
        dateNextStage: '2021-02-19',
        stageItems: [
            {
                title: 'Оценка проектов экспертами',
                description: 'На краудсорсинговой платформе <span>vospitanie.mosmetod.ru</span> профессиональные и общественные эксперты на протяжении трёх месяцев оценивают и комментируют проекты образовательных организаций, выставляют баллы, из которых формируется рейтинг участников Городского конкурса лучших воспитательных практик'
            }
        ]
    },
    {
        date: '3 марта 2021 года',
        dateToParse: '2021-03-03',
        dateNextStage: '2021-03-05',
        stageItems: [
            {
                title: 'Подведение итогов',
                description: 'Образовательные организации, набравшие наибольшее количество баллов, представляют свои проекты на Городском форуме (стратегической сессии) по вопросам совершенствования подходов к организации воспитательной работы'
            }
        ]
    },
]

const Algorithm = (props) => {

    const {header} = props;

    const [isOpenDetails, setDetailsStatus] = useState(false);

    return (
        <div className="algorithm container">
            <h3 className="home-page-block-header">{header}</h3>
            <div
                className={isOpenDetails ? "algorithm-spoiler hide-spoiler" : "algorithm-spoiler"}
                onClick={() => setDetailsStatus(!isOpenDetails)}
            >
                <p className="algorithm-spoiler-text">Показать алгоритм</p>
                <img
                    className="algorithm-spoiler-chevron"
                    src={chevron}
                    alt="chevron"
                />
            </div>
            <details
                className="algorithm-text-details"
                open={isOpenDetails}
            >
                <summary className="algorithm-text-summary hide-spoiler"></summary>
                <div className="algorithm-container">
                    {stages.map((item, id) =>
                        <AlgorithmStage
                            key={id}
                            date={item.date}
                            dateToParse={item.dateToParse}
                            dateNextStage={item.dateNextStage}
                            stageItems={item.stageItems}
                        />
                    )}
                </div>
            </details>
            <p
                className={isOpenDetails ? "algorithm-spoiler" : "algorithm-spoiler hide-spoiler"}
                onClick={() => setDetailsStatus(!isOpenDetails)}
            >
                Скрыть алгоритм
            </p>
        </div>
    )
}

Algorithm.propTypes = {
    header: PropTypes.string.isRequired,
};

export default Algorithm;