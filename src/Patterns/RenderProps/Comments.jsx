import React from 'react';
import Wrapper from './Wrapper';

class Comments extends React.Component{
    render() {
        return (
            <Wrapper
                link={this.props.link}
                render={({ data, error, isLoading }) => (
                    <div>
                        <h4>Comment</h4>
                        {error && <p>{error.message}</p>}
                        {isLoading ? (
                            <h5>Loading....</h5>) : (
                            <div>
                                <p className="comment">{data.body}</p>
                                <div>
                                <span className="by">Commented By:</span>
                                <span className="name">{data.name}</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            />
        );
    }
}

export default Comments;