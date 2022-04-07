const Info = (props) => {
console.log(props.name, props.age, props.email)


let thanks

  if (props.name && props.age && props.email) {
    thanks = <button onClick={props.incrementPage}>Next</button>
  }

  return (
    <div className="info">
      <h1>Information Form</h1>
      <h4>Please enter your info below...</h4>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your
           Name"
          value={props.name}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={props.email}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="age"
          placeholder="Your Age"
          value={props.age}
          onChange={props.handleChange}
        />
      </form>
      <br></br>
      <div>
        <button>Back</button>
        {thanks}
      </div>
    
    </div>
  )
}

export default Info
