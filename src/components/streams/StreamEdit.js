import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fetchStream } from '../../actions';
import { useSelector } from "react-redux";
import { connect } from 'react-redux'

function StreamEdit(props) {
    const { id } = useParams();

    useEffect(() => {
        props.fetchStream(id);
    }, []);

    // const hshs = props.fetchStream(id);
    console.log("mampakha", props);
    // useSelector(state => console.log(state.streams[id]));
    return (
        <div>
            <h1>Stream Edit</h1>
        </div>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     // console.log("asdasdwtf", state.streams[ownProps.match.params.id]);
//     return {
//         stream: state.streams
//     }
// }


export default connect(null, { fetchStream })(StreamEdit);

