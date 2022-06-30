import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const SideBar = () => {


    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout())
    }

    const { name } = useSelector( state => state.auth );
    
    const handleAddNote = () => {
        dispatch( startNewNote() );
    }


  return (
    <aside className='journal__sidebar'>
        
        <div className='journal__sidebar-navbar'>
            <h3 className='mt-5'>
                <i className='far fa-moon'></i>
                <span> {name} </span>
            </h3>

            <button className='btn' onClick={ handleLogout }>
                logout
            </button>

        </div>

        <div className='journal__new-entry'
             onClick={ handleAddNote }
        >
            <i className="fa-regular fa-calendar-plus fa-xl fa-beat" ></i>
            <p className='mt-5'>
                New Entry
            </p>
        </div>

    <JournalEntries />

    </aside>
  )
}
