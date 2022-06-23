

function App() {
  const listStudent = [
    {id : 1, name : 'Trieu Huy Hoang', age : 22, address : 'Nam Dinh'},
    {id : 2, name : 'Trieu Huy Hoang 2', age : 22, address : 'Ha Noi'}
  ];
  return (
    <>
    <Table listStudent={listStudent}/>
    </>
  );
}

const Table = ({listStudent}) =>{
  return (<div>
    <table>
      <thead>
        <tr>
          <td>
            Id
          </td>
          <td>
            Name
          </td>
          <td>Age</td>
          <td>
            Address
          </td>
        </tr>
      </thead>
      <tbody>
{
  listStudent.map((student)=>{
    return <Row id={student.id} name={student.name} age={student.age} address={student.address} />
  })
}
      </tbody>
    </table>
  </div>)
}

const Row = ({id, name, age, address})=>{
  return (<tr>
    <td>
      {id}
    </td>
    <td>
      {name}
    </td>
    <td>
      {age}
    </td>
    <td>
      {address}
    </td>
  </tr>)
}

export default App;
