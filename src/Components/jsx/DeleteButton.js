import React from "react";
import { backendURL } from "../assets/data/data";

function DeleteButton(props) {
  const unpublish = async () => {  
   const confirmed = window.confirm("Are you sure you want to unpublish this post?");
    if (!confirmed) return;
    try {
      const res = await fetch(`${backendURL}/post`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:"include",
        body: JSON.stringify({id:props.blogId}),
      });
      if(!res.ok){
        alert(`${res.status+" "+res.statusText} Authorization Failed`)
        props.onAuthFail();
      }
      props.onDelete();
    } catch (err) {
      alert("Couldn't delete post at this time!");
    }
  };
  return (
    <div>
      <button id="deleteButton" onClick={unpublish}>Unpublish</button>
    </div>
  );
}

export default DeleteButton;
