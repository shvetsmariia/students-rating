import React, { useState } from 'react';

function App() {
  const [students, setStudents] = useState([
    {
      name: 'Андрій',
      score: 200
    },
    {
      name: 'Світлана',
      score: 100
    },
    {
      name: 'Людмила',
      score: 200
    },
    {
      name: 'Іван',
      score: 200
    }
]); 
  const [averageScore, setAvegareScore] = useState(175); 

  function handleChange(event, index) {
    const updatedStudents = [...students];
    updatedStudents[index].score = Number(event.target.value); 
    updatedStudents.sort((a, b) => b.score - a.score);

    const totalScores = updatedStudents.reduce((total, student) => total + student.score, 0);
    const average = totalScores / updatedStudents.length;

    setStudents(updatedStudents);
    setAvegareScore(average);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
      <h1>Рейтинг студентів</h1>
      <h2>Середній бал: {averageScore} балів</h2>
      <table>
          {students.map((student, i) => (
            <tr key={i}>
              <td>{student.name}</td>
              <td><input type="text" value={student.score} onChange={(event) => handleChange(event, i)}></input></td> 
            </tr>
          ))}
      </table>
    </div>
  );
}

export default App; 