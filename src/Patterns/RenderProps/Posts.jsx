import React from 'react';
import Wrapper from './Wrapper';

class Posts extends React.Component{
    render() {
        return (
            <Wrapper
                link="https://jsonplaceholder.typicode.com/posts"
                render={({ data, error, isLoading }) => (
                    <div>
                        <h2>User Post</h2>
                        {error && <p>{error.message}</p>}
                        {isLoading ? (
                            <h5>Loading....</h5>) : (
                            <ul>
                                {data.map(post => post)}
                            </ul>
                        )}
                    </div>
                )}
            />
        );
    }
};

export default Posts;
