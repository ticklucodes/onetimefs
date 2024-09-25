import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">CONTACT</h2>

      // Map Integration from Google Maps.

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2227808155308!2d77.7129837!3d13.0214804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11eba74700f3%3A0xb4562b4cd01b3f58!2sOn%20Time%20FS!5e0!3m2!1sen!2sin!4v1727247502546!5m2!1sen!2sin"




        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xvongwno"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Please submit your queries here and send your resume to hr@ontimefs.in"
              autoComplete="off"
              required> 
              </textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
