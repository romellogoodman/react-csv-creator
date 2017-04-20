import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import jsdomify from 'jsdomify';

import Title from '../src/components/Title';

describe('<Title/>', () => {
  before(() => {
    jsdomify.create();
  });

  beforeEach(() => {
    jsdomify.clear();
  });

  after(() => {
    jsdomify.destroy();
  });

  describe('rendering', () => {
    it('should render a paragraph tag', () => {
      const element = <Title text='Hello World'/>;
      const wrapper = mount(element);

      expect(wrapper.find('p')).to.have.length(1);
    });
  });
});
