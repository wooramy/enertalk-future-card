import React, {Component} from 'react';
import './RealtimeLabel.css';

class RealtimeLabel extends Component {
    render() {
        return (
            <div className="realtime-label">
                <span className="value">{this.props.usage}W</span>
            </div>
        );
    }
}

RealtimeLabel.propTypes = {
    usage: React.PropTypes.number.isRequired
}

RealtimeLabel.defaultProps = {
    usage: 0
}

export default RealtimeLabel;