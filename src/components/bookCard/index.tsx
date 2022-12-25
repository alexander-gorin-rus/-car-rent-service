import React, {useState} from 'react';
import {CardContainer, DateCalendar, Icon, ItemContainer, LineSeparator, Name, SmallIcon} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';
import {Marginer} from '../marginer';
import Button from '../button';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

const BookCard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);

    if (isReturnCalendarOpen) {
      setReturnCalendarOpen(false);
    }
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);

    if (isStartCalendarOpen) {
      setStartCalendarOpen(false);
    }
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {isStartCalendarOpen && <DateCalendar
          offset
          value={startDate}
          onChange={setStartDate}
        />}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {isReturnCalendarOpen && <DateCalendar
          offset
          value={returnDate}
          onChange={setReturnDate}
        />}
      </ItemContainer>
      <Marginer direction='horizontal' margin='2em'/>
      <Button text='Book Your Ride' />
    </CardContainer>
  );
};

export default BookCard;
