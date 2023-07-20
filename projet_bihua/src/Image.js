import logo from './image/img.png'

export default function Image() {

  return (
    <div className='container'>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="#simple-list-item-1"><img src={logo} alt="Logo" className='w-25' /></a>
            </td>
            
            <td data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                <div className='scollContainer'>              
                <div data-bs-spy="scroll">
                    <h1 id="simple-list-item-1">Un parcours complet</h1>
                    <p>
                    En suivant l’un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. Avec Tertia
                    Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires, et
                    inspirants, capables de réussir des changements majeurs et impactant pour vos activité et vos équipes.
                    </p>
                    <button>Découvrir nos parcours<i className="bi bi-arrow-right"></i></button>
                    <div >
                        <h1 id="simple-list-item-2">Une expérience immersive et stimulante</h1>
                        <p>
                        En suivant l’un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. Avec Tertia
                        Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires, et
                        inspirants, capables de réussir des changements majeurs et impactant pour vos activité et vos équipes.
                        </p>
                        <button>Découvrir nos parcours<i className="bi bi-arrow-right"></i></button>
                    </div>
                    
                    <h1 id="simple-list-item-3">Une expérience immersive et stimulante</h1>
                    <p>
                    En suivant l’un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. Avec Tertia
                    Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires, et
                    inspirants, capables de réussir des changements majeurs et impactant pour vos activité et vos équipes.
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
