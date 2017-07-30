import React, { PropTypes, Component } from 'react';
import CircularChart from 'components/CircularChart';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class CircularChartItem extends Component {
    render() {
        return (
            <CircularChart
                className={(this.props.category && this.props.category.shortStyle) ?
                    this.props.category.shortStyle : null}
                percentage={this.props.percentage ? this.props.percentage : 0}
                strokeWidth={5}
                upder={
                    <div styleName="reparate_item_col"
                         style={{width: '100%', backgroundColor: '#58585a'}}>
                        <div styleName="small_text_panel">
                            {this.props.reported ?
                                this.props.reported.toString().toUpperCase() : ''
                            }
                        </div>
                        <div styleName="small_text_panel">
                            {this.props.completed ?
                                this.props.completed.toString().toUpperCase() : ''
                            }
                        </div>
                    </div>
                }
            >
                <div styleName={(this.props.category && this.props.category.style) ?
                    this.props.category.style : 'new-installation-decoder'
                } />
                <div styleName="small_text">
                    {(this.props.category && this.props.category.shortName) ?
                        this.props.category.shortName.toString().toUpperCase() : ''
                    }
                </div>
            </CircularChart>
        );
    }
}
CircularChartItem.propTypes = {
    category: PropTypes.object.isRequired,
    percentage: PropTypes.number.isRequired,
    completed: PropTypes.string.isRequired,
    reported: PropTypes.string.isRequired
};
export default CSSModules(CircularChartItem, styles);
