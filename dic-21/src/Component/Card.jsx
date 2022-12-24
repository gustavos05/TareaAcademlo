import { useState } from "react"
import users from "./users.json"
const Card = ({usersData})=>{
const {name,location,email,picture,phone}=usersData
return(
    <div className="card">
    <h1>{`${name.title} ${name.first} ${name.last}`}</h1>
    <img src={picture.large} alt="" />
    <h2><i class="fa-solid fa-envelope"></i> {email}</h2>
    <h2><i class="fa-solid fa-phone"></i> {phone}</h2>
    <h2><i class="fa-solid fa-location-dot"></i> {`${location.country} ${location.state} ${location.city}`}</h2>
    </div>
)}
export default Card