import { describe, expect, it } from 'vitest';
import { render, screen, userEvent } from './test-utils';
import Main from '../src/pages/main';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<Main />);
    expect(screen.getByText(/Hello Vite 