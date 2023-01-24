import React, { useEffect, useState } from "react"

function Search({fetchProfile}) {
    const [searchString, setSearchString] = useState('')
    
    // function handleSubmit(e) {
    //   e.preventDefault()
    //   console.log(searchString)
    //   fetchProfile(searchString)
    // }

    useEffect(() => {
        if (searchString.length < 1) return
        fetchProfile(searchString)
    }, [searchString])
  
    return (
      <form >
        <input value={searchString} onChange={(e) => setSearchString(e.target.value)} />
      </form>
    )
  }

export default Search