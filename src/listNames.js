import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose}  from '@fortawesome/free-solid-svg-icons';
// <i class="fas fa-window-close"></i>


function listNames(props){
    var Names = props.namesArr.map((name, index) => {
        return(
            <div key = {index}>
                {name} <FontAwesomeIcon icon={faWindowClose}/>
            </div>
        );
    });
    return(
      <div>
        {Names}
      </div>
    );
}
export default listNames;
