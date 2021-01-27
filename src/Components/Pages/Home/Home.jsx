import './_home.scss';
import React from 'react';
import Organizers from "./HomePageBlocks/Organizers/Organizers";
import Minister from "./HomePageBlocks/Minister/Minister";
import Button from "../../Button/Button";
import Objectives from "./HomePageBlocks/Objectives/Objectives";
// import Nominations from "./HomePageBlocks/Nominations/Nominations";
import Partners from "./HomePageBlocks/Partners/Partners";
import Rating from "./HomePageBlocks/Rating/Rating";
import ProvisionRegistration from "./HomePageBlocks/ProvisionRegistration/ProvisionRegistration";
import NewsHomePage from "./HomePageBlocks/LastNews/LastNews";
import Algorithm from "./HomePageBlocks/Algorithm/Algorithm";


const homePageItems = [
    <Minister header={'Обращение Министра образования и науки города Москвы А.Б.\u00A0Молоткова'} />,
    <Button
        link={'/practices'}
        value={'Смотреть все конкурсные проекты'}
        internal={true}
    />,
    <Organizers header={'Организаторы конкурса'} />,
    <Rating header={'Рейтинг участников конкурса'} />,
    <NewsHomePage header={'Новости конкурса'} />,
    <Objectives header={'О конкурсе'} />,
    <Algorithm header={'Алгоритм проведения конкурса'} />,
    <ProvisionRegistration />,
    <Partners header={'Партнёры конкурса'} />,
]

const Home = () => {

    return (
        <div className="home-page">
            {homePageItems.map((item, id) =>
                <div
                    className={
                        id % 2 === 1
                        ? "home-page-block-wrap dark-colored-block"
                        : "home-page-block-wrap light-colored-block"}
                    key={id}
                >
                   {item}
                </div>
            )}
        </div>
    )
}

export default Home;