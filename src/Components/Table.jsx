import { Component } from "react";
import "../Styles/style.css"
export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: "Deepak",
      count: 100,
      eage: 21,
      tHead: [],
      tBody: []
    };
  }

  

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((y) => y.json()).then((x) => {
        this.setState({ tHead: Object.keys(x[0]).slice(0,4)});
        this.setState({ tBody: x });
      }).catch((err) => console.log(err))
  }

  render() {
    return (
      <>
        <table border = "2">  
          <thead>
          <tr>
            {
              this.state.tHead.map( (x,y) =><th key={y}>{x}</th>)}
          </tr>
          </thead>
          <tbody>
          {this.state.tBody.slice(0.5).map((x) => {
              return(
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.username}</td>
                    <td>{x.email}</td>
                  </tr>
          )}
          )}
          </tbody>
        </table>
      </>
    );
  }
}
