import React from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import Footer from '../Footer/Footer'
import Education from '../Education/Education'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Contact from '../Contact/Contact'

export default function Layout() {
  return <>
      <Navbar/>
      <section id="home"><Home/></section>
      <section id="about"><About/></section>
      <section id="education"><Education/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Projects/></section>
      <section id="contact"><Contact/></section>
      <Footer/>
  </>
}
