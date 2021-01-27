import './_practices.scss';
import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {
    setFilterShow,
    setScrollMode,
    setInitialPracticesData,
    uploadPracticesData,
} from '../../../actions/practicesAction';
import {setUserWidth,} from '../../../actions/globalAction';
import PracticesListItem from "./PracticesListItem";
import Pagination from "./Pagination/Pagination";
import InfiniteScroll from 'react-infinite-scroll-component';
import Preloader from "../../Preloader/Preloader";
import filterOpen from "./icons/filter-open.svg";
import {useMount} from "react-use";


export const PracticesResultList = (props) => {

    const {
        data,
        userWidth,
        pageSize,
        currentPage,
        totalItemsCount,
        setUserWidth,
        infiniteScroll,
        setFilterShow,
        setScrollMode,
        setInitialPracticesData,
        uploadPracticesData,
    } = props;

    const pageCount = Math.ceil(totalItemsCount / pageSize);


    useMount(() => {
        setInitialPracticesData();
    });

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            setUserWidth(document.documentElement.clientWidth);

            window.addEventListener("resize", function () {
                setUserWidth(document.documentElement.clientWidth);
            }, false);
        }
        return () => mounted = false;
    }, [setUserWidth]);

    useEffect(() => {
        let mounted = true;

        if (mounted && userWidth < 1080) {
            setScrollMode(true);
        }
        return () => mounted = false;
    }, [userWidth]);

    function loadMore() {
        uploadPracticesData();
    }

    return (
        <>
            <div className="practices-mobile-list-header">
                <img src={filterOpen} alt="настройка"
                     onClick={() => {
                         setFilterShow(true)
                     }}/>
            </div>
            {/*{
                totalItemsCount === 0 &&
                <div className="practices-list-no-events-block">По выбранным параметрам практик не найдено</div>

            }*/}
            {
                data.length > 0 &&
                <div className="practices-events-list">
                    {
                        infiniteScroll
                            ?
                            <InfiniteScroll
                                dataLength={data.length}
                                next={loadMore}
                                hasMore={totalItemsCount !== data.length}
                                loader={<Preloader/>}
                            >
                                <div className="events-load-block">
                                    {data.map(item => {
                                        return (
                                            <PracticesListItem
                                                key={item.id}
                                                event={item}
                                                disable={userWidth}
                                                isCity={false}/>
                                        );
                                    })}
                                </div>
                            </InfiniteScroll>
                            :
                            <div className="events-load-block">
                                {
                                    data.map(item => {
                                        return (
                                            <PracticesListItem
                                                key={item.id}
                                                event={item}
                                                disable={userWidth}
                                                isCity={false}/>
                                        );
                                    })}
                            </div>
                    }
                    {
                        totalItemsCount !== data.length && pageCount !== currentPage + 1 &&
                        <div className="see-more-container">
                            <div
                                onClick={loadMore}
                                className="practices-view-more"
                            >
                                загрузить еще
                            </div>
                        </div>
                    }
                    <Pagination
                        pageCount={pageCount}
                        userWidth={userWidth}
                    />
                </div>
            }
        </>
    )
};

PracticesResultList.propTypes = {
    data: PropTypes.array.isRequired,
    userWidth: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalItemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setUserWidth: PropTypes.func.isRequired,
    setFilterShow: PropTypes.func.isRequired,
    setScrollMode: PropTypes.func.isRequired,
};

const mapStateToProps = ({practicesReducer, globalReducer}) => ({
    data: practicesReducer.data,
    totalItemsCount: practicesReducer.totalItemsCount,
    userWidth: globalReducer.userWidth,
    pageSize: practicesReducer.pageSize,
    currentPage: practicesReducer.currentPage,
    infiniteScroll: practicesReducer.infiniteScroll,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setUserWidth,
    setFilterShow,
    setScrollMode,
    setInitialPracticesData,
    uploadPracticesData,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PracticesResultList);