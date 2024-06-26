//Componente Header
const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course} </h1>
    </div>
  )
}

// Componente Content
const Content = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

//Componente Total
const Total = (props) => {
  console.log(props)
  return(
    <p>Number of exercises = {props.total}</p>
  )
}

//Componente APP
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    /*
    <div>
      <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
    */
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} exercises1 = {exercises1} 
               part2 = {part2} exercises2 = {exercises2} 
               part3 = {part3} exercises3 = {exercises3}/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>

  )

}




export default App

