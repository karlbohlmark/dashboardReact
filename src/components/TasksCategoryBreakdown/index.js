import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    isArray
} from 'lodash/fp';
import CircularChart from 'components/CircularChart';
import Placeholder from 'components/Placeholder';


function TasksCategoryBreakdown(props) {
    return (
        <div>
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '332px' ]} />
                    ),
                    Just: fields => (
                        <div styleName="returning_subscribers">
                            <div styleName="reparate_item_col" style={{
                                textAlign: 'center',
                                height: '72px',
                                display: 'flex',
                                width: '10%',
                                flexDirection: 'column',
                                alignSelf: 'flex-end',
                                backgroundColor: '#8f9092'
                            }}>
                                <div styleName="small_text_panel">REPORTED</div>
                                <div styleName="small_text_panel">COMPLETED</div>
                            </div>
                            {isArray(fields) ? fields.map((field, index) => (
                                <div style={{
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    width: '50%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative'
                                }}
                                     key={index}>
                                    <div styleName='container_header_sub'>
                                        {(field.category && field.category.name) ?
                                            field.category.name.toString().toUpperCase() : ''}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        zIndex: 1
                                    }}>
                                        {isArray(field.subCategories) ? field.subCategories.map((subCat, item) => (
                                            <CircularChart
                                                key={item}
                                                className={(subCat.category && subCat.category.shortStyle) ?
                                                    subCat.category.shortStyle : null}
                                                percentage={subCat.percentage ? subCat.percentage : 0}
                                                strokeWidth={5}
                                                upder={
                                                    <div styleName="reparate_item_col"
                                                         style={{width: '100%', backgroundColor: '#58585a'}}>
                                                        <div styleName="small_text_panel">
                                                            {subCat.reported ?
                                                                subCat.reported.toString().toUpperCase() : ''
                                                            }
                                                        </div>
                                                        <div styleName="small_text_panel">
                                                            {subCat.completed ?
                                                                subCat.completed.toString().toUpperCase() : ''
                                                            }
                                                        </div>
                                                    </div>
                                                }
                                            >
                                                <div styleName={(subCat.category && subCat.category.style) ?
                                                        subCat.category.style : 'new-installation-decoder'
                                                } />
                                                <div styleName="small_text">
                                                    {(subCat.category && subCat.category.shortName) ?
                                                        subCat.category.shortName.toString().toUpperCase() : ''
                                                    }
                                                </div>
                                            </CircularChart>
                                        )) : null}
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        zIndex: 0,
                                        left: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgb(88, 88, 90)',
                                        height: '72px'}}>
                                    </div>
                                </div>
                            )) : null}
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

TasksCategoryBreakdown.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(TasksCategoryBreakdown, styles);
