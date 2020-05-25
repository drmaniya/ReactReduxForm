import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addData } from '../action';


const emailRegEx = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const validUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const DataForm = (props) => {
    const data = {
        name: '',
        email: '',
        date: '',
        link: '',
        gender: '',
        hobbies: [],
        skills: [],
        formError: {
            name: "",
            email: "",
            date: "",
            link: "",
            gender: "",
            hobbies: "",
            skills: "",
        }
    };

    const [state, setState] = useState(data);


    const handleChange = (event) => {

        const { name, value } = event.target
        let formError = state.formError;

        switch (name) {
            case "name":
                formError.name = value.length < 3 ? "Minimum 2 Letter" : "";
                break;
            case "email":
                formError.email = emailRegEx.test(value) ? "" : "Enter Valid Email Id";
                break;
            case "link":
                formError.link = validUrl.test(value) ? "" : "Enter valid link";
                break;
            default:
                break;
        }
        setState({ ...state, [name]: value });
    }
    const formValid = (ferror) => {
        let valid = true;
        Object.values(ferror).forEach(element => {
            element.length > 0 && (valid = false);
        });

        return valid;
    }

    const handleHChange = (event) => {
        const target = event.target;
        var value = target.value;
        if (target.checked) {
            state.hobbies.push(value);
        } else {
            state.hobbies.splice(value, 1);
        }
    }
    const handleSChange = (event) => {
        const target = event.target;
        var value = target.value;
        if (target.checked) {
            state.skills.push(value);

        } else {
            state.skills.splice(value, 1);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((document.getElementById('php').checked == false) && (document.getElementById('front').checked == false) && (document.getElementById('leader').checked == false)) {
            document.getElementById('fillform').innerHTML = "Please Select skills"
            if ((document.getElementById('cricket').checked == false) && (document.getElementById('reading').checked == false) && (document.getElementById('design').checked == false)) {
                document.getElementById('fillform').innerHTML = "Please Select hobbies"
                if ((document.getElementById('male').checked == false) && (document.getElementById('female').checked == false)) {
                    document.getElementById('fillform').innerHTML = "Please Select Gender"
                    if (e.target.link.value == "") {
                        document.getElementById('fillform').innerHTML = "Link Required"
                        if (e.target.date.value == "") {
                            document.getElementById('fillform').innerHTML = "Date Required"
                            if (e.target.email.value == "") {
                                document.getElementById('fillform').innerHTML = "Email Required"
                                if (e.target.name.value == "") {
                                    document.getElementById('fillform').innerHTML = "Please fill form , All fileds are Mandatory"
                                }
                            }
                        }
                    }
                }
            }
        }
        else if (formValid(state.formError)) {
            let formdata = {
                name: state.name,
                email: state.email,
                date: state.date,
                link: state.link,
                gender: state.gender,
                hobbies: state.hobbies.join(),
                skills: state.skills.join(),
            };
            var group = document.formvalidation.gender;
            for (var i = 0; i < group.length; i++) {
                if (group[i].checked)
                    break;
            }
            if (i == group.length) {
                document.getElementById('genderCheck').innerHTML = "Please Select anyone";
            }

            var group = document.formvalidation.hobbies;
            for (var i = 0; i < group.length; i++) {
                if (group[i].checked)
                    break;
            }
            if (i == group.length) {
                document.getElementById('hobbieCheck').innerHTML = "Please Select anyone";
            }

            var group = document.formvalidation.skills;
            for (var i = 0; i < group.length; i++) {
                if (group[i].checked)
                    break;
            }
            if (i == group.length) {
                document.getElementById('skillCheck').innerHTML = "Please Select anyone";
            }
            props.addData(formdata);
            setState(data)

        } else {
            console.log("invalid");
        }
    }

    return (
        <div className="col-md-4 offset-md-4">
            <form name="formvalidation" onSubmit={handleSubmit}>

                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    value={state.name}

                />
                {state.formError.name.length > 0 && (
                    <span>{state.formError.name}</span>
                )}<br />

                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}

                />
                {state.formError.email.length > 0 && (
                    <span>{state.formError.email}</span>
                )}<br />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    placeholder="date"
                    onChange={handleChange}
                    value={state.date}

                />
                {state.formError.date.length > 0 && (
                    <span>{state.formError.date}</span>
                )}<br />

                <label>Link</label>
                <input
                    type="text"
                    name="link"
                    placeholder="link"
                    onChange={handleChange}
                    value={state.link}

                />
                {state.formError.link.length > 0 && (
                    <span>{state.formError.link}</span>
                )}<br />

                <label>Gender</label>
                <input type="radio" id="male" name="gender" value="male" checked={state.gender == 'male'} onChange={handleChange} />
                <label>Male</label>
                <input type="radio" id="female" name="gender" value="female" checked={state.gender == "female"} onChange={handleChange} />
                <label>Female</label>
                <span id="genderCheck"></span>
                <br />


                <label>Hobbies</label><br />
                <input type="checkbox" name="hobbies" id="cricket" value="cricket" onChange={handleHChange} />
                <label>Cricket</label>
                <input type="checkbox" name="hobbies" id="reading" value="reading" onChange={handleHChange} />
                <label>Reading</label>
                <input type="checkbox" name="hobbies" id="design" value="designing" onChange={handleHChange} />
                <label>Desiging</label>
                <span id="hobbieCheck"></span>
                <br />


                <label>Skills :</label><br />
                <input type="checkbox" name="skills" id="php" value="php" onChange={handleSChange} />
                <label>php</label>
                <input type="checkbox" name="skills" id="front" value="Frontend" onChange={handleSChange} />
                <label>Frontend</label>
                <input type="checkbox" name="skills" id="leader" value="Leadership" onChange={handleSChange} />
                <label>Leadership</label>
                <span id="skillCheck"></span>

                <button>Submit</button>
                <span id="fillform"></span>

            </form>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        addData: (data) => {
            addData(data, dispatch)
        }
    }
}

export default connect(null, mapDispatchToProps)(DataForm)