import axios from "axios";
import React, { useState, useEffect } from "react";
import 'styles/Quote.css'
import 'styles/toggleGroup.css'


const App = ({ quote }) => {
   const [email, setEmail] = useState();
   const [quoteDetails, setQuoteDetails] = useState();

   const remoteURL = "http://turners-api.herokuapp.com/"
   const localURL = "http://localhost:4000/"

   const getQuoteDetails = () => {
      const config = {
         method: 'get',
         url: remoteURL + 'quotes/get',
         params: {
            quoteId: quote,
         }
      };

      axios(config)
         .then(res => {
            setQuoteDetails(res.data.document)
         })
         .catch(() => console.log("There was a catch error"))
   }

   useEffect(() => {
      if (quote) getQuoteDetails();
   }, [quote]);

   useEffect(() => {
      console.log(quoteDetails)
   }, [quoteDetails]);

   const handleQuoteEmail = () => {
      console.log('executed function')
      const config = {
         method: 'get',
         url: remoteURL + 'quotes/send',
         params: {
            quoteId: quote,
            email: email
         }
      };

      axios(config)
         .then(res => {
            console.log(res)
         })
         .catch(() => console.log("There was a catch error"))
   }

   return (
      <>
         <div className="yourQuoteContainer">
            <h2>Your Quote</h2>
            <h3>Quote No. {quote}</h3>
            <div className="quoteCardSuper">
               <div className="quoteCard">
                  <h2>{quoteDetails?.type}</h2>
                  Includes
                  <ul>
                     <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                     <li>At gravida vel nam rhoncus tortor. </li>
                     <li>Dui, dui, est sed non purus. </li>
                     <li>Aliquet nisl dignissim adipiscing non sit non amet.</li>
                     <li>Diam feugiat amet, pellentesque vitae viverra donec auctor quisque eget.</li>
                  </ul>
                  <hr />
                  <div className='quoteCard__costs'>
                     <span>Fortnightly</span>//
                     <span>Monthly</span>//
                     <span>Annually</span>
                  </div>
                  <div className='quoteCard__costs'>
                     <span>$ {quoteDetails?.costs.fortnight}</span>//
                     <span>$ {quoteDetails?.costs.monthly}</span>//
                     <span>$ {quoteDetails?.costs.annually}</span>
                  </div>
                  <hr />
                  <div>
                     <h3>Optional Add Ons:</h3>
                     <ul>
                        <li>AA Roadside Assistance</li>
                        <li>Windscreen Cover</li>
                        <li>Mechanical Breakdown Insurance</li>
                     </ul>
                  </div>
                  <div className='quoteCard__costs'>
                     <span>$ 5</span>//
                     <span>$ 10</span>//
                     <span>$ 100</span>
                  </div>
               </div>
            </div>
         </div>
         <div className='emailQuote'>
            <label>
               Send your quote via email to save it and come back later
            </label>

            <form className='emailSubmit'>
               <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@email.com" />
               <button type="button" className='minorButton button--blue' onClick={handleQuoteEmail}>send</button>
            </form>
            talk to our friendly customer service team on 0800 887 637
            <span className='or'>OR</span>
            <button className='mainButton button--dark-blue' >buy now</button>
         </div>
      </>
   );
}

export default App;