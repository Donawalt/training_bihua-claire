import React, { useRef, useEffect, useState } from 'react';
import logo from './image/img.png';

export default function Image() {
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      scrollToSection(currentSection + direction);
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
  }, [currentSection]);

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
                <div ref={(el) => (sectionsRef.current[0] = el)}>
                  <h1 id="simple-list-item-1">Un parcours complet</h1>
                  <p>
                    En suivant l’un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. Avec Tertia Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires, et inspirants, capables de réussir des changements majeurs et impactant pour vos activités et vos équipes.
                  </p>
                  <button>Découvrir nos parcours<i className="bi bi-arrow-right"></i></button>
                </div>

                <div ref={(el) => (sectionsRef.current[1] = el)}>
                  <h1 id="simple-list-item-2">Une expérience immersive et stimulante</h1>
                  <p>
                    En suivant l’un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. Avec Tertia Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires, et inspirants, capables de réussir des changements majeurs et impactant pour vos activités et vos équipes.
                  </p>
                  <button>Découvrir nos parcours<i className="bi bi-arrow-right"></i></button>
                </div>

                <div ref={(el) => (sectionsRef.current[2] = el)}>
                  <h1 id="simple-list-item-3">Une expérience immersive et stimulante</h1>
                  <p>
                    En suivant l’un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. Avec Tertia Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires, et inspirants, capables de réussir des changements majeurs et impactant pour vos activités et vos équipes.
                  </p>
                  <button>Découvrir nos parcours<i className="bi bi-arrow-right"></i></button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}