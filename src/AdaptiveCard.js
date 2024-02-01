import React, { useEffect, useRef } from 'react';
import * as AdaptiveCards from 'adaptivecards';
import 'adaptivecards/lib/adaptivecards.css';
import 'adaptivecards-designer/dist/adaptivecards-designer.css';
import * as ACData from 'adaptivecards-templating';

const AdaptiveCard = ({ card, cardData }) => {
 
  const cardWrapperRef = useRef(null);

 
  useEffect(() => {
    if (!cardWrapperRef.current || !card) return;
    const template = new ACData.Template(card);
    const cardPayload = template.expand({cardData });
    const adaptiveCard = new AdaptiveCards.AdaptiveCard();
    adaptiveCard.parse(cardPayload);
    adaptiveCard.onExecuteAction = (action) => {  
    };

    cardWrapperRef.current.innerHTML = '';
    adaptiveCard.render(cardWrapperRef.current);
  }, [card, cardData, cardWrapperRef]);


  return <div ref={cardWrapperRef} />;
};

export default AdaptiveCard;
