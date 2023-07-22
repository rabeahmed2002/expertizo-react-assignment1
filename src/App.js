import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Hello World";

  const obj = { message: "Welcome to expertizo" }

  const data = ['We', 'are', 'United']

  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Render this using the map function

  const complex = [{company: 'XYZ', jobs: ['JavaScript,', 'React']}, {company: 'ABC', jobs: ['Angular', 'Ionic']}] //Show these in a Table

  return (
    <div className="App">
            <header className="App-header">

      <h1>{name}</h1>

      <h1>{obj.message}</h1>

      <h1>{data[0]}</h1>
      <h1>{data[1]}</h1>
      <h1>{data[2]}</h1>

      {list.map((item,index)=>{
        return <h1>{item.name}</h1>
      })}


<table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Jobs</th>
          </tr>
        </thead>
        <tbody>
          {complex.map((item, index) => (
            <tr key={index}>
              <td>{item.company}</td>
              <td>{item.jobs.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </header>
    </div>
  );
}

export default App;
