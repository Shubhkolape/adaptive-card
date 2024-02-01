import React, { useEffect, useRef } from 'react';
import * as AdaptiveCards from 'adaptivecards';
import 'adaptivecards/lib/adaptivecards.css';
import 'adaptivecards-designer/dist/adaptivecards-designer.css';
import axios from 'axios';
import * as ACData from 'adaptivecards-templating';

function Adaptive_Axios({ card, cardData }) {

    const cardWrapperRef = useRef(null);

    useEffect(() => {
  
      if (!cardWrapperRef.current || !card) return;
  
      
      const template = new ACData.Template(card);
  
  
      const cardPayload = template.expand({ $root: cardData });
  
      const adaptiveCard = new AdaptiveCards.AdaptiveCard();
      adaptiveCard.parse(cardPayload);
  
      adaptiveCard.onExecuteAction = (action) => {
  
        if (action instanceof AdaptiveCards.SubmitAction) {
     
          let actionData = action.data;
          let url = actionData.url;
          let payload = actionData.payload;
          let additionalData = actionData.Additional_Data;
  
      
          payload = { ...payload, additionalData };
  
          axios
            .post(url, payload)
            .then((res) => console.log('Response:', res))
            .catch((err) => console.log('Error:', err));
        }
      };
  
      cardWrapperRef.current.innerHTML = '';
      adaptiveCard.render(cardWrapperRef.current);
    }, [card, cardData, cardWrapperRef]);
  




  return (
    <div>
    <div ref={cardWrapperRef} ></div>
    </div>
  )
}

export default Adaptive_Axios