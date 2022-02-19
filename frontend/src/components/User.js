import React from 'react'


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                {user.is_staff}
            </td>
            <td>
                {user.is_active}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <th>
                Username
            </th>
            <th>
                First name
            </th>
            <th>
                Last Name
            </th>
            <th>
                E-mail
            </th>
            <th>
                Is staff
            </th>
            <th>
                Is active
            </th>
            {users.map((user) => <UserItem user={user}/>)}
        </table>
    )
}


export default UserList
