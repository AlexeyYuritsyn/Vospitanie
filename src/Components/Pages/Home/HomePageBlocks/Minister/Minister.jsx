import './_minister.scss';
import minister from './Molotkov.jpg';
import React, {useState} from "react";


const Minister = (props) => {

    // const {header} = props;

    const [isOpenDetails, setDetailsStatus] = useState(false);

    return (
        <div className="minister container">
            {/*<h3 className="home-page-block-header">{header}</h3>*/}
            <div className="minister-wrap">
                <p className="minister-text minister-text-margin">
                    Дорогие участники конкурса!
                </p>
                <p className="minister-text minister-text-margin">
                    Сейчас перед нами стоит целый ряд важнейших задач, решение которых предопределит наше будущее и&nbsp;будущее подрастающего поколения на&nbsp;многие годы вперёд. Особое внимание общества и&nbsp;государства обращено к&nbsp;созданию условий для воспитания гармоничной личности, осознающей свою причастность к&nbsp;великому прошлому нашей страны и&nbsp;способной своим созидательным отношением к&nbsp;вызовам настоящего строить её&nbsp;будущее. То&nbsp;будущее, в&nbsp;котором всем нам захочется жить и&nbsp;трудиться!
                </p>
                <p
                    className={isOpenDetails ? "minister-spoiler hide-spoiler" : "minister-spoiler"}
                    onClick={() => setDetailsStatus(!isOpenDetails)}
                >
                    Читать полностью
                </p>
                <details
                    className="minister-text-details"
                    open={isOpenDetails}
                >
                    <summary className="minister-text-summary hide-spoiler"></summary>
                    <div className="minister-container">
                        <p className="minister-text">
                            Сегодня в&nbsp;системе московского образования реализуется множество масштабных воспитательных проектов, конкурсов и&nbsp;олимпиад, созданы доступные каждому электронные платформы, помогающие школьникам знакомиться с&nbsp;легендарными страницами истории России, осознавать свою причастность к&nbsp;многообразию культур и&nbsp;традиций нашей большой Родины.
                        </p>
                        <p className="minister-text">
                            Но&nbsp;в&nbsp;каждой московской школе существуют свои уникальные воспитательные практики и&nbsp;яркие события, знакомство с&nbsp;которыми, бесспорно, будет полезно каждому.
                        </p>
                        <p className="minister-text">
                            Именно для этого мы&nbsp;и&nbsp;запускаем эту новую платформу и&nbsp;приглашаем образовательные организации Москвы к&nbsp;участию в&nbsp;конкурсе лучших воспитательных практик!
                        </p>
                        <p className="minister-text">
                            Уверен, что абсолютно все&nbsp;&mdash; участники, организаторы, профессиональные и&nbsp;общественные эксперты&nbsp;&mdash; смогут внести свой вклад в&nbsp;решение важнейшей задачи&nbsp;&mdash; развитие системы воспитания нашего города!
                        </p>
                    </div>
                </details>
                <p
                    className={isOpenDetails ? "minister-spoiler" : "minister-spoiler hide-spoiler"}
                    onClick={() => setDetailsStatus(!isOpenDetails)}
                >
                    Скрыть
                </p>
                <a
                    className="minister-signature"
                    href="https://www.mos.ru/donm/structure/person/103239093/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="minister-header-wrap">
                        <h3 className="minister-name">Молотков Александр Борисович</h3>
                        <h3 className="minister-position">Министр Правительства Москвы,<br/>руководитель Департамента образования<br/>и науки города Москвы</h3>
                    </div>
                    <img
                        className="minister-photo"
                        src={minister}
                        alt="Молотков Александр Борисович"
                    />
                </a>
            </div>
        </div>
    )
}

export default Minister;