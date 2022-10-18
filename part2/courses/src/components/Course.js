const Heade = ({name}) => <h2>{name}</h2>

const Pa = ({name, exercises}) => <p>{name} {exercises}</p>

const Conte = ({parts}) => (
  <div>
    {parts.map(({id, name, exercises}) =>
      <Pa key={id} name={name} exercises={exercises} />
    )}
  </div>
)

const Sum = ({parts}) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)

  return (
    <b>Number of exercises {total}</b>
  )
}

const Cours = ({course}) => {
  return (
    <div>
      <Heade name={course.name} />
      <Conte parts={course.parts}/>
      <Sum parts={course.parts} />
    </div>
  )
}

export default Cours