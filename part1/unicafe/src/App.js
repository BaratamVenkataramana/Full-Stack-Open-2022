import { useState } from 'react'

const Option = ({text, onClick}) => 
  <button onClick={onClick}>{text}</button>

const Statistics = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Stat = ({good, neutral, bad}) => {
  const al = good + neutral + bad
  const posit = good / al * 100
  const aver = (good - bad) / (good + bad + neutral)

  if (al === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="all" value={good+neutral+bad} />
          <Statistics text="average" value={aver} />
          <Statistics text="positive" value={posit + " %"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Option text="good" onClick={() => setGood(good+1)} />
      <Option text="neutral" onClick={() => setNeutral(neutral+1)} />
      <Option text="bad" onClick={() => setBad(bad+1)} />

      <Stat good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App