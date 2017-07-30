import React, { PropTypes, Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class CircularChart extends Component {
    render() {
        return (
            <div>
                <div styleName="outer" className={this.props.className ? this.props.className : 'install_decoder'} >
                    <CircularProgressbar
                        initialAnimation
                        percentage={this.props.percentage ? this.props.percentage : 0}
                        textForPercentage={() => ''}
                        strokeWidth={this.props.strokeWidth ? this.props.strokeWidth : 5}
                    />
                    <div styleName="inner">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div styleName="under_spinner">
                    <strong>{`${this.props.percentage}%`}</strong>
                </div>
                {
                    this.props.upder ? this.props.upder : null
                }
            </div>
        );
    }
}
CircularChart.propTypes = {
    children: PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array,
        React.PropTypes.object
    ]),
    upder: PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.array,
        React.PropTypes.object
    ]),
    className: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number

};
export default CSSModules(CircularChart, styles);
