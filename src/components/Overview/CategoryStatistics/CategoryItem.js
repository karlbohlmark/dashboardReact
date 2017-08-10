import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import {
    isArray
} from 'lodash/fp';
import CircularChartItem from 'components/CircularChart/OverviewCircularChartItem';

function CategoryItem(props) {
    return (
        <div styleName='container_category_item_stat'>
            <div styleName='container_header_sub'>
                {(props.name) ? props.name.toString().toUpperCase() : ''}
            </div>
            <div styleName='container_middle'
                 style={{
                     flexWrap: 'wrap',
                     justifyContent: 'center'
                 }}
            >
                {isArray(props.subCategories) ? props.subCategories.map((subCat, item) => (
                    <CircularChartItem
                        // className="install_decoder"
                        name={subCat.name}
                        percentage={parseFloat(subCat.value) + 1}
                        key={item}
                    />
                )) : null}
            </div>
        </div>
    );
}

CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    subCategories: PropTypes.array.isRequired
};

export default CSSModules(CategoryItem, styles);
