import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Select from 'react-select';
import {
    compose,
    property
} from 'lodash/fp';

import styles from './styles.css';

const pValue = property('value');


function SelectBoxItem(props) {
    return (
        <div styleName='select_box' style={props.style ? props.style : {}}>
            <Select
                options={props.options}
                value={props.value.getOrElse(null)}
                onChange={compose(
                    props.onChange,
                    pValue
                )}
                // backspaceRemoves={true}
                // placeholder='Select Location'
                //  labelKey='name'
            />
        </div>
    );
}

SelectBoxItem.propTypes = {
    style: PropTypes.object,
    options: PropTypes.array.isRequired,
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CSSModules(SelectBoxItem, styles);
