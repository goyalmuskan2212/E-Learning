import React from 'react';
import "./testimonials.css";

const Testimonials = () => {
    const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      position: "Student",
      message:
        "This platform helped me learn concepts more effectively and significantly improved my understanding and confidence.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://www.skillmanvideogroup.com/wp-content/uploads/2024/04/happy-customer-filming-a-testimonial-1024x574.png",
    },
    {
      id: 3,
      name: "Vihaan Jain",
      position: "Student",
      message:
        "The courses are amazing, and the instructors are top-notch, making the learning experience truly valuable and engaging.",
      image:
        "https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=",
    },
  ];
  return (
    <section className="testimonials">
        <h2>What our students say</h2>
        <div className="testimonials-cards">
            {
                testimonialsData.map((e)=>(
                    <div className="testimonial-cards" key={e.id}>
                        <div className="student-image">
                            <img src={e.image} alt="" />
                        </div>
                        <p className="message">{e.message}</p>
                        <div className="info">
                            <p className="name">{e.name}</p>
                            <p className="position">{e.position}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Testimonials