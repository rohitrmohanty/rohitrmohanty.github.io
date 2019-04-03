import React, { Component } from 'react';

// Style Imports
import '../../assets/sass/base_styles/base_styles.scss';
import '../../assets/sass/module_styles/homepage_styles/homepage_styles.scss';

// Visual Component Imports
import Header from '../helpers/header/header';

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header/> */}
        <div className='homepage-container hasborder'>
          <section className='homepage-section homepage-section-1'></section>
          <section className='homepage-section homepage-section-2'>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h1>Where does it come from?</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
              This book is a treatise on the theory of ethics, very popular during the Renaissance. 
              The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <br/>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </section>
          <section className='homepage-section homepage-section-3'>Section 3</section>
        </div>
      </React.Fragment>
    )
  }
}

export default Homepage;