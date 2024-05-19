<!DOCTYPE html>
<html lang="en">
<head>
  <p align="center"> HELLO WORLD, I AM THE LAST WORST FAILURE ALIVE </p>
    <h3 align="center">
<p dir="auto"><a href="https://www.instagram.com/free_shaam/" rel="nofollow"><img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=000&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="instagram logo" alt="Instagram" data-canonical-src="https://img.shields.io/badge/Instagram-1877F2?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="https://digimopee.wordpress.com/" rel="nofollow"><img src="https://img.shields.io/static/v1?message=Website&logo=Website&label=&color=000&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="website logo" alt="Website" data-canonical-src="https://img.shields.io/badge/Website-0077B5?style=for-the-badge&amp;logo=Website&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="https://www.linkedin.com/in/mujahidopee/" rel="nofollow"><img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=000&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo" alt="Linkedin" data-canonical-src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" style="max-width: 100%;"></a>
<a href="https://discord.com/channels/@me/951617301818540093/1240266351105282079" rel="nofollow"><img src="https://img.shields.io/static/v1?message=Discord&logo=Discord&label=&color=000&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="Discord Logo" alt="Discord" data-canonical-src="https://img.shields.io/badge/Discord-0077B5?style=for-the-badge&amp;logo=Discord&amp;logoColor=white" style="max-width: 100%;"></a>
</p>
    <link rel="stylesheet" href="styles.css"> </h3>
</head>
<body> <p align="center"
    <div class="image-container">
        <img src="https://cdn.hero.page/pfp/f6335fbf-f981-4977-819d-9acce79d748c-tokyo-ghoul's-kaneki-ken-ultra-hd-anime-pfp-1.png" alt="Your Image" width="150" height="150">
        <div class="circle-border">></div>
    </div></p>
<script>
import React from "react"

export const PrintName = props => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>
        {props.name}
      </p>
    </div>
  )
}

export const ShowUser = props => {
  return <PrintName name="Ned" />
}

let username = "Cersei"
export const ShowStoredUser = props => {
  return <PrintName name={username} priority />
}

import { useState } from "react"

export const CounterExample = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
  </script>
</body>
</html>
