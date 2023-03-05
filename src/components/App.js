import React, {useReducer, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event'
import reducer from '../reducers'
import { CREATE_EVENT, DERETE_ALL_EVENT} from '../actions'

const App = () => {
  const[state, dispatch] = useReducer(reducer, [])
  const[title, setTitle] = useState('')
  const[body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({type: CREATE_EVENT,
      title,
      body
    })
  }

  const delete_all_events = e => {
    e.preventDefault()
    dispatch({type: DERETE_ALL_EVENT})
  }

  const renderEvents = () => {
    console.log(state)
    return 
  }

  const is_create = title ==='' || body ===''

  return (
    <div className="container-fluid">
      <h4>イベントフォーム作成</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="formBodyTitle">ボディ</label>
          <textarea className="form-control" id= "formBodyTitle" value={body} onChange={e => setBody(e.target.value)}/>
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={is_create}>イベントを作成する</button>
        <button className="btn btn-danger" disabled={state.length === 0}>全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
