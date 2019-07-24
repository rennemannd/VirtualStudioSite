import React from 'react';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return (
                <body>
                    <div style={{"textAlign": "center", "color": "white"}}>
                        Not Found
                    </div>
                </body>
        )
    }
}

export default NotFound;
