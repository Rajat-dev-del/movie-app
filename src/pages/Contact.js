import React from 'react'
import Header from "../includes/Header";
import Footer from "../includes/Footer";

export default function Contact() {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main bg-light">
                <div className="container">
                   <h1 className="text-center display-1">Contact us</h1>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
