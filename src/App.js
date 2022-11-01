import './App.css';
import { useQuery, gql, } from "@apollo/client";

function App() {
  const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
    code
    name
    continent {name}
          }
        }
    `;

  const { loading, error, data } = useQuery(GET_COUNTRIES);


  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Error...</p>
  else {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr><th>Code</th><th>Country</th><th>Continent</th></tr>
            {data.countries.map((data, index) =>
              <tr key={index}>
                <td>{data.code}</td>
                <td>{data.name}</td>
                <td>{data.continent.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
