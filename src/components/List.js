import React from 'react';
import { connect } from 'react-redux';

const List = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Link</th>
                    <th>Gender</th>
                    <th>Hobbies</th>
                    <th>Skills</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((val, index) => {
                        return (
                            <tr key={index}>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.date}</td>
                                <td>{val.link}</td>
                                <td>{val.gender}</td>
                                <td>{val.hobbies}</td>
                                <td>{val.skills}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

function mapStateToProps(state) {
    console.log('stateeee', state);
    return {
        data: state
    };
}

export default connect(mapStateToProps, null)(List);