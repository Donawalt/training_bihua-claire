import React, { useRef, useEffect, useState } from 'react';
import logo from './image/img.png';

export default function Image() {
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!scrolling) {
        setScrolling(true);
        const direction = event.deltaY > 0 ? 1 : -1;
        scrollToSection(currentSection + direction);
        setTimeout(() => {
          setScrolling(false);
        }, 800); // Réglez la durée du défilement ici (plus grand = plus lent)
      }
    };

    const scrollToSection = (index) => {
      if (index >= 0 && index < sectionsRef.current.length) {
        sectionsRef.current.forEach((section, i) => {
          section.style.display = i === index ? 'block' : 'none';
        });
        setCurrentSection(index);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection, scrolling]);

  return (
    <div className='container'>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="#simple-list-item-1"><img src={logo} alt="Logo" className='w-25' /></a>
            </td>

            <td>
              <div className='scrollContainer'>
                <div ref={(el) => (sectionsRef.current[0] = el)} className='section'>
                  <h1 id="simple-list-item-1">Un parcours complet</h1>
                  <p>
                    En suivant l’un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. Avec Tertia Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires, et inspirants, capables de réussir des changements majeurs et impactant pour vos activités et vos équipes.
                  </p>
                  <button> 
                    Découvrir nos parcours
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </button>
                </div>

                <div ref={(el) => (sectionsRef.current[1] = el)} className='section'>
                  <h1 id="simple-list-item-2">Un processus de transformation pour vous et votre activité</h1>
                  <p>
                    La finalité de nos programmes c’est de vous donner toutes les clés pour transformer votre organisation. Nous
                    partons de votre projet et concrétisons sa transformation avec vous. Voilà pourquoi, pour accéder à notre
                    enseignement, il est nécessaire d’avoir une situation professionnelle valide et concrète.
                  </p>
                  <button> 
                    Découvrir nos parcours
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </button>
                </div>

                <div ref={(el) => (sectionsRef.current[2] = el)} className='section'>
                  <h1 id="simple-list-item-3">Une expérience immersive et stimulante</h1>
                  <p>
                    En suivant l’un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. 
                    Avec Tertia Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires, et inspirants, capables de réussir des changements majeurs et impactant pour vos activités et vos équipes.
                  </p>
                  <button> 
                    Découvrir nos parcours
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}