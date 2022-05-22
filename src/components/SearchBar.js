import React from 'react';

class SearchBar extends React.Component {


    
    handleFormSubmit = (event) => {
        event.preventDefault();  // prevent'in kelime anlamı engellemektir. preventDefault ise fauelt durumu engelleme anlamı taşır. 
                                 //burdaki defaylt durum sayfanın kendini yenilemesi durumudur.
    }

    render () {   
        return (  
            <form onSubmit={this.handleFormSubmit}>     
            
                <div className='form-row mb-5'>
                    <input onChange={this.props.searchMovieProp}
                     type="text" className='form-control' 
                     placeholder='Search a Movie'>
                         
                     </input>
                </div>
            </form>

        )
    }
}

export default SearchBar;