import React from 'react'
import Image from 'next/image'



function page() {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>

        {/* Header */}
        <div style={styles.header}>
         <Image
          src="/download.png"
          alt="Image 1"
          width={200}
          height={100}
        />

        <Image
          src="/images.jfif"
          alt="Image 2"
          width={600}
          height={300}
        />
      
        </div>

        {/* Menu */}
        <div style={styles.menu}>
          <a href="#" style={styles.menuLink}>Home</a>
          <a href="#" style={styles.menuLink}>About Us</a>
          <a href="#" style={styles.menuLink}>Products</a>
          <a href="#" style={styles.menuLink}>Contact Us</a>
        </div>

        {/* Content */}
        <div style={styles.container}>
          <div style={styles.left}>
            <h3>Left Section</h3>
            <p>Sidebar Content</p>
          </div>

          <div style={styles.right}>
            <h3>Right Section</h3>
            <p>Main Content Area</p>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          Footer Section
        </div>

      </div>
    </div>
  )
}

export default page

// Styles Object
const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial',
    backgroundColor: 'red',
    padding: '10px'
  },

  wrapper: {
    width: '90%',
    margin: 'auto',
    backgroundColor: 'white'
  },

  header: {
    height: '120px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px'
  },

  headerImg: {
    height: '90px'
  },

  menu: {
    backgroundColor: 'black',
    padding: '10px',
    textAlign: 'left'
  },

  menuLink: {
    color: 'white',
    margin: '15px',
    textDecoration: 'none'
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '400px'
  },

  left: {
    width: '30%',
    backgroundColor: 'green',
    color: 'white',
    padding: '10px'
  },

  right: {
    width: '70%',
    backgroundColor: 'orange',
    padding: '20px'
  },

  footer: {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'left',
    padding: '35px'
  }
}
