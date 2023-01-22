import React from 'react'

const Event = ({event, dispatch}) => 
{
      const id = event.id
      const handleClickDeleteButton = () => {
        dispatch({ type: 'DELETE_EVENT', id})
      }
      return (
        <tr>
          <th>{id}</th>
          <th>{event.title}</th>
          <th>{event.body}</th>
          <th><button className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></th>
        </tr>
      )
  }

  export default Event