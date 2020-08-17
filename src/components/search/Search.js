import React from "react"; 


export default function Search({ handleSearch }) {
	return (
		<>
			<input className="search" type="text" placeholder="Search game by title" onChange={event => handleSearch(event)} />
		</>
	)
}