import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import {
    isArray
} from 'lodash/fp';
import CategoryItem from 'components/Tasks/CategoryBreakdown/CategoryItem';
import Placeholder from 'components/Placeholder';

function OverviewCategoryStatistics(props) {
    return (
        <div >
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '332px' ]} />
                    ),
                    Just: fields => (
                        <div style={{overflow: 'auto', flexWrap: 'wrap', display: 'flex', flexDirection: 'row'}}>
                            <div styleName="returning_subscribers" >
                                {isArray(fields) ? fields.map((field, index) => (
                                    <CategoryItem key={index} {...field} />
                                )) : null}
                            </div>
                        </div>
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
        </div>
    );
}

OverviewCategoryStatistics.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(OverviewCategoryStatistics, styles);
