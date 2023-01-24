import React, { useEffect } from "react"

const boxStyles = {
    border: "1px dotted black",
    width: "500px",
    height: "300px",
    borderRadius: '15px',
    margin: '20px 0 0 0'
}

const profileStyles = {
    width: '50px',
    height: '50px',
    objectFit: 'cover'
}

function ProfileBox({profiles}) {

if (profiles.items && profiles.items.length > 1) {
    return 'Too many results'

} else if (profiles.items) {
    return (
        <div style={boxStyles}>
            <img src={profiles.items[0]['avatar_url']}style={profileStyles}/>
            <p>{profiles.items[0]['login']}</p>
        </div>
      )
}

  
}

export default ProfileBox