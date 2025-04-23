import React from 'react'

function page() {
  return (
    <div>
      Gallery
    </div>
  )
}

export default page




/* styles.css */
.gallery-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery img {
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.gallery img:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}