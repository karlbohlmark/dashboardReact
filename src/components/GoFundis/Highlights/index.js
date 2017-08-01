import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import ListRow from 'components/ListItem/ListRow';
import IconLoop from 'components/IconLoop';
import Placeholder from 'components/Placeholder';

function GoFundisHighlights(props) {
    return (
        <div styleName="reparate_item">
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder
                            style={{ width: 274, height: 279}}
                            busy={props.data.busy}
                            size={[ '100%', '100%' ]} />
                    ),
                    Just: fields => (
                        <div styleName="list_column" style={{marginLeft: 20}}>
                            <ListRow
                                style={{marginTop: '7px', marginBottom: '7px'}}
                                leftItem={<IconLoop number={
                                    Math.floor(fields.avgFundiRating ? parseFloat(fields.avgFundiRating).toFixed(2) : 0)
                                } name={'star'} />}
                                item={'AVERAGE GOFUNDI RATING'}
                            />
                            <ListRow
                                style={{marginTop: '7px', marginBottom: '7px'}}
                                leftItem={fields.activeFundi ? fields.activeFundi : '0'}
                                item={'ACTIVE GOFUNDIS'}
                                subItem={'(IN AVERAGE PER DAY)'}
                            />
                            <ListRow
                                style={{marginTop: '7px', marginBottom: '7px'}}
                                leftItem={fields.avgFundiAge ? fields.avgFundiAge : '0'}
                                item={'AVERAGE GOFUNDIS AGE'}
                            />
                            <ListRow
                                style={{marginTop: '7px', marginBottom: '7px'}}
                                leftItem={fields.fundiFollowUpJob ? fields.fundiFollowUpJob : '0'}
                                item={'GOFUNDIS WITH FOLLOW UP JOBS'}
                                subItem={'(SAME CUSTOMER & SAME CATEGORY TYPE)'}
                            />
                            <ListRow
                                style={{marginTop: '7px', marginBottom: '7px'}}
                                leftItem={fields.fundiFollowUpJobDiff ? fields.fundiFollowUpJobDiff : '0'}
                                item={'GOFUNDIS WITH FOLLOW UP JOBS'}
                                subItem={'(SAME CUSTOMER & DIFFERENT CATEGORY TYPE)'}
                            />
                            <ListRow
                                style={{marginTop: '7px', marginBottom: '7px'}}
                                styleLeftItem={{color: '#ed1967'}}
                                leftItem={fields.avgTimeCompletion ? fields.avgTimeCompletion : '0'}
                                item={'AVERAGE TIME OF COMPLETION'}
                                subItem={'(FROM ACCEPTED TO COMPLETED)'}
                            />
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

GoFundisHighlights.propTypes = {
    data: PropTypes.object.isRequired
};

export default CSSModules(GoFundisHighlights, styles);
