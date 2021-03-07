import React, { Component, useState } from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import {Card,Button, Modal} from "react-bootstrap"
 
export default function Home() {
 
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    return (
      <div className="wrapper">
        <Header />
        <main className="main bg-light">
          <div className="container mb-5">
            <Hero />
          </div>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <MovieCard />
                </div>

                <div className="col-lg-12 d-flex justify-content-center">
                <Button variant="primary" onClick={showModal}>
                    About this App
                </Button>
                </div>
              </div>
            </div>
          </section>

          {/* modal popup here  */}

          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>About This App</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
              <div className="alert alert-info">
                  Made by Pulkit Singh
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
          
            </Modal.Footer>
          </Modal>
        </main>
        <Footer />
      </div>
    );
  
}
