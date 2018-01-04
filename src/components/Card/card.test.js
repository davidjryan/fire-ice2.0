import { shallow } from 'enzyme';
import React from 'react';
import { Card } from './MovieCard';

describe('tests for Card component', () => {
  describe('component tests', () => {
    let cardWrapper;
    let mockProps;

    beforeEach(() => {
      mockProps = {
        
      };
      cardWrapper = shallow(<Card {...mockProps} />);

    });

    it('should match the snapshot', () => {
      expect(cardWrapper).toMatchSnapshot();
    });
  });
});