import React from 'react';
import { render } from 'react-dom';
//const data = require('../db');

//REQUIRE AXIOS- .get on express route to my api in componentDidMount, update state with my data

//App is a stateless component (function component, can pass in props)
const  StudentProfiles = (props) => {
    const profiles = props.data

    return (
        <table>
            <tbody>
              <tr>
                <th>Student Name</th>
              </tr>
              {studentProfiles.map((student) => (
                <StudentRow
                    key={student.id}
                    student={student}
                    selectStudent={selectStudent}
                />
            ))}
            </tbody>
        </table>
    )
};

const StudentRow = (props) => {
    const { student, selectStudent } = props;
    const { id, name, phone, email, sports, awards, grade } = student;
  
    return (
      <tr onClick={() => selectStudent(id)}>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{sports}</td>
        <td>{awards}</td>
        <td>{grade}</td>
      </tr>
    );
};

const SingleStudent = (props) => {
    const { selectedStudent, selectStudent } = props;
    const { name, phone, email, sports, awards, grade } = selectedContact;
  
    return (
      <div id="single-contact">
        <img src={imageUrl} />
        <div id="contact-info">
          <p>StudentName: {name}</p>
          <p>Email Address: {email}</p>
          <p>Phone Number: {phone}</p>
          <p>Sports Participation: {sports}</p>
          <p>Awards Achieved: {awards}</p>
          <p>Grade: {grade}</p>
        </div>
      </div>
    );
  }


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            studentProfiles: [],
            selectedStudent: {}
        }
        this.selectStudent = this.selectStudent.bind(this);
    }

    async componentDidMount() {
        try {
          const res = await axios.get('/api/studentProfiles');
          const studentProfiles = res.data;
          this.setState({ studentProfiles });
        } catch (err) {
          console.log(err);
        }
      }

      async selectStudent(studentId) {
        try {
          const res = await axios.get(`/api/studentProfiles/${studentId}`);
          const selectedStudent = res.data;
          this.setState({ selectedStudent });
        } catch (err) {
          console.log(err);
        }
      }

    render() {
        //returning JSX (not html) differece: can use {} to evaluate javascript
        //what is actually being mounted in the div id="app"
        //where creating structure of whole page
        return (
            <div id='app'>
                <div>Student Profiles</div>
                <div id='container'>
                    {this.state.selectedStudent.id ? (
                            <SingleStudent
                            selectedStudent = {this.state.selectedStudent}
                            selectStudent = {this.selectStudent}
                            />
                    )   :   (   
                        
                        <StudentProfiles
                        studentProfiles = {this.state.studentProfiles}
                        selectStudent = {this.selectStudent}
                        /> 
                    )}
                </div>
            </div>
        );
    }
}

const app = document.querySelector('#app');


//mounting the App component onto the #app
render(<App />, app);