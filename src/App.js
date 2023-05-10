
import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'



import avatar from './images/numanAvatar.png'

import devices from './images/hero-devices.svg'



import React, { memo } from 'react'
import { useState } from 'react'
// import avatar from './contactimages/avatar.svg'
// import logo from './contactimages/logo.svg'
import axios from 'axios'


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const saveMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/messages", {
        name,
        email,
        subject,
        message,
      });
      alert("Message Sent!");
    } catch (error) {
      alert("Message Not Sent!");
      console.log(error);
    }
  };




  return (
    <>

      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Contact />

      <div class="is-form-page animate-fadeUp my-5 py-5 " id="sayHello">
        <section class="is-white has-text-centered">
          <div class="container">
            <div class="columns is-centered">

              <div class="column is-8">
                {/* <img class="avatar" src={avatar} /> */}
                <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Questions, comments, or just want to say hello? Drop me a line!</h1>
              </div>
            </div>
          </div>
        </section>
        <section class="is-white">
          <div class="container">
            <form id="form" accept-charset="UTF-8" action="https://usebasin.com/f/fc77d50a35ad" method="POST" onSubmit={saveMessage}>
              <div class="columns is-centered">
                <div class="column is-half">
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control is-expanded">
                      <input class="input is-large" name="name" type="text" value={name}
                        onChange={(e) => setName(e.target.value)} required />
                    </div>
                  </div>
                </div>
                <div class="column is-half">
                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control is-expanded">
                      <input class="input is-large" name="email" type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns is-centered">
                <div class="column">
                  <div class="field">
                    <label class="label">Subject</label>
                    <div class="control is-expanded">
                      <input class="input is-large" type="text" name="subject" value={subject}
                        onChange={(e) => setSubject(e.target.value)} required></input>
                    </div>
                  </div>
                  <div class="field is-hidden">
                    <label class="is-hidden"></label>
                    <div class="control is-expanded is-hidden">
                      <input class="is-hidden" name="_gotcha" type="hidden" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="columns is-centered">
                <div class="column">
                  <div class="field">
                    <label class="label">Additional details</label>
                    <div class="control is-expanded">
                      <textarea class="textarea is-large" name="details" rows="5" value={message}
                        onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                  </div>
                  <div class="field is-hidden">
                    <label class="is-hidden"></label>
                    <div class="control is-expanded is-hidden">
                      <input class="is-hidden" name="_gotcha" type="hidden" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns is-centered">
                <div class="column is-one-third">
                  <div class="field">
                    <div class="control">
                      <button class="button is-primary is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
