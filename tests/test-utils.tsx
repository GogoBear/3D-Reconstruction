import { render } from '@testing-library/react';
import React from 'react';

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap pr