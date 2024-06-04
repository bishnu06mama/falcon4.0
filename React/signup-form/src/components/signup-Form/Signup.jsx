import React, { useState } from 'react';

const Signup = () => {
 
  const[name, setName] = useState("");//useState is used to store the values of the variables 
  console.log("bishnupriya");
  const[age, setAge] = useState("");
  console.log(23);
  const[study, setStudy] = useState("");
  console.log("MCA");
  const[grade, setGrade] = useState("");
  console.log("A+");
  const[email, setEmail] = useState("");
  console.log("bishnu06mama@gmail.com");
  const[place, setPlace] = useState("");
  console.log("Bhubaneswar");
  const[village, setVillage] = useState("");
  console.log("palia");
  const[phoneno, setPhone] = useState("");
  console.log(9938397439);
  const[animal, setAnimal] = useState("");
  console.log("tiger");
  const[location, setLocation] = useState("");
  console.log("MB-47,G.G.P Colony");
  const[bird, setBird] = useState("");
  console.log("peacock");
  const[species, setSpecies] = useState("");
  console.log("Homosapien");
  const[town, setTown] = useState("");
  console.log("Bhadrak");
  const[tree, setTree] = useState("");
  console.log("Banyan");
  const[flower, setFlower] = useState("");
  console.log("marigold");
 const[cgpa, setCgpa] = useState("");
 console.log(8.91);
  const[travel, setTravel] = useState("");
  console.log("banaras");
   const[god, setGod] = useState("");
   console.log("jagannath");

  return (
    <>
     <form>
            <label>Username:</label><br />
            <input type="text" placeholder='Add Username' />
            <label>Useremail:</label>
            <br />
            <input type="email" placeholder='Add Useremail' />
            <label>Userpassword:</label>
            <br />
            <input type="password" placeholder='Add Userpassword' />
            <button>Sign Up</button>
            <br />
        </form>
        </>
    
  )
}

export default Signup