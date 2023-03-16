import GetAvatar from "./GetAvatar";
import { useState } from 'react';

function Button({ htmlFor, text, avatar, updateAvatar, project, updateProject }) {

  return (

    <GetAvatar htmlFor={htmlFor} text={text}
      avatar={avatar} updateAvatar={updateAvatar}
    // project={project} updateProject={updateProject}
    ></GetAvatar>

  )
}

export default Button;


