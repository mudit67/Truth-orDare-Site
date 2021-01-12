import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes}  from '@fortawesome/free-solid-svg-icons';
// <i class="fas fa-window-close"></i>


function listNames(props){
    var Names = props.namesArr.map((name, index) => {
        // console.log(index);
        return(
            <div className="users-name" key = {index}>
                {name} <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={() => {props.removeUser(index);}}/>
            </div>
        );
    });
    return(
      <div className="names-container">
        {Names}
      </div>
    );
}
export default listNames;
