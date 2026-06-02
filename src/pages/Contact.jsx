import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

function Contact() {
    const [status, setStatus] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("sending");
        const formData = new FormData(event.target);

        formData.append("access_key", "8445a82c-2d84-4b28-9d5e-0fed43729f74");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                event.target.reset();
            } else {
                console.log("Error", data);
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }


        setTimeout(() => {
            setStatus("");
        }, 5000);
    };

    return (
        <section id="contact" className="contact-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">
                        Contact <span className="accent">Me</span>
                    </h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-5 mb-4">
                        <div className="contact-info p-4 rounded shadow-sm h-100">
                            <h3 className="mb-4" style={{ fontSize: "1.4rem", fontWeight: "700" }}>Get In Touch</h3>
                            <p className="text-muted mb-4">
                                Feel free to reach out to me for any questions or opportunities! I'll get back to you as soon as possible.
                            </p>

                            <div className="d-flex align-items-center mb-4">
                                <div className="contact-icon me-3">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h5 className="mb-1" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Email</h5>
                                    <a href="mailto:shelkerohan555@gmail.com" className="text-muted text-decoration-none">shelkerohan555@gmail.com</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="contact-icon me-3">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h5 className="mb-1" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Location</h5>
                                    <p className="mb-0 text-muted">Pune, India - 411001</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="contact-icon me-3">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h5 className="mb-1" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Phone</h5>
                                    <p className="mb-0 text-muted">+91 XXXXXXXXXX</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <form className="contact-form p-4 rounded shadow-sm h-100" onSubmit={onSubmit}>
                            <h3 className="mb-4" style={{ fontSize: "1.4rem", fontWeight: "700" }}>Send a Message</h3>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                            </div>
                            <div className="mb-3">
                                <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
                            </div>

                            <button type="submit" className="btn send-btn w-100 text-white mb-3" disabled={status === "sending"}>
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <div className="alert alert-success d-flex align-items-center" role="alert">
                                    <FaCheckCircle className="me-2" /> Message sent successfully! I will get back to you soon.
                                </div>
                            )}
                            {status === "error" && (
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <FaExclamationCircle className="me-2" /> Something went wrong. Please try again later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
