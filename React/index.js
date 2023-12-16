import React from "react"

const page = (
    <div>
        <h1 classname = "page">Example page</h1>
        <p> This is paragraph </p>
    </div>
)

document.getElementById("root").append(JSON.stringify(page))
