import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Main extends Component {

  render() {
    return (

      <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '850px' }}>
              <div className="content mr-auto ml-auto">
                <p>&nbsp;</p>
                <h2>Vends ton bien immobilier</h2>
                <br></br>
                <form class="form-inline" onSubmit={(event) => {
                  event.preventDefault()
                  const adresse = this.imageAdresse.value
                  const desc = this.imageDescription.value
                  const nbrPiece =this.imagePiece.value
                  const prix = this.imagePrix.value
                  const description = adresse.concat(' - Description : ', desc, ' - Nombre de Mètre carré : ', nbrPiece, 'm2',' - Prix : ', prix, 'ETH' )
  
                   
                  this.props.uploadImage(description)
                
                  
  
                }} ><input type='file' accept='.jpg, .jpeg, .png, .bmp, .gif' onChange={this.props.captureFile} />
                <br></br>
                <div className="form-group mr-sm-4">
                <br></br>
                  <br></br>
                  <input class="col-md-4 mb-3"
                  id="imageAdresse"
                  type="text"
                  ref={(input) => { this.imageAdresse = input }}
                  className="form-control"
                  placeholder="Adresse du bien"
                  required />
  
                   <input class="md-2"
                  id="imageDescription"
                  type="text"
                  ref={(input) => { this.imageDescription = input }}
                  className="form-control"
                  placeholder="Description du bien"
                  required />
  
                  <input class="md-2"
                  id="imagePrix"
                  type="number"
                  ref={(input) => { this.imagePrix = input }}
                  className="form-control"
                  placeholder="Prix du bien"
                  required />

                  <input class="md-2"
                  id="imagePiece"
                  type="number"
                  ref={(input) => { this.imagePiece = input }}
                  className="form-control"
                  placeholder="Mètre carré"
                  required />
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>

                </form>
              <p>&nbsp;</p>
                
                { this.props.images.map((image,key) => {
                    return(
                      <div className="card mb-4" key={key} >
                        <div className="card-header">
                          <img
                            className='mr-2'
                            width='30'
                            height='30'
                            src={`data:image/png;base64, ${new Identicon(image.author,30).toString()}`}
                            />
                            <small className="text-muted">{image.author}</small>

                        </div>
                        <ul id="imageList" className='list-group list-group-flush'>
                          <li className="list-group-item">
                            <p className="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '600px'}}/></p>
                            <p>{image.an_address}</p>
                          </li>
                          <li key={key} className="list-group-item py-2">
                            <small className="float-left mt-1 text-muted">
                              Acheter : {window.web3.utils.fromWei(image.price.toString(),'Ether')} ETH
                            </small>
                            <button 
                                className="btn btn-link btn-sm float-right pt-0"
                                name={image.id}
                                onClick={(event) => {
                                  const arrayDescription = image.an_address.toString().split('-');
                                  const eth = arrayDescription[3].match(/\d+/)[0];                                
                                  let price = window.web3.utils.toWei(eth,'Ether')
                                  console.log(event.target.name, price)
                                  this.props.buyImmoOwner(event.target.name, price)
                       
                                }}
                              >
                              Acheter
                              </button>

                          </li>
                        </ul>
                        </div>
                    )
                })}

           </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;