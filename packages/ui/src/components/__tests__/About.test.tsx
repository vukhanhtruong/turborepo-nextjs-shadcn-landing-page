import React from 'react';
import { render, screen } from '@testing-library/react';
import { About, AboutInterface } from '../About';

// Mock the Statistics component since we're only testing About
jest.mock('../Statistics', () => ({
  Statistics: () => 'Statistics Component'
}));

describe('About Component', () => {
  const mockProps: AboutInterface = {
    title: 'Test Title',
    description: 'Test Description',
  };

  it('renders correctly with provided props', () => {
    render(<About {...mockProps} />);
    
    // Check if the title is rendered
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    
    // Check if the description is rendered
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    
    // Check if the image is rendered
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/pilot.png');
  });

  it('applies the correct styling classes', () => {
    render(<About {...mockProps} />);
    
    // Check if the section has the correct classes
    const section = screen.getByText('Test Title').closest('section');
    expect(section).toHaveClass('container');
    expect(section).toHaveClass('py-24');
    
    // Check if the title has the correct gradient styling
    const titleSpan = screen.getByText('Test Title');
    expect(titleSpan).toHaveClass('text-transparent');
    expect(titleSpan).toHaveClass('bg-clip-text');
    expect(titleSpan).toHaveClass('bg-gradient-to-b');
    
    // Check if the description has the correct styling
    const description = screen.getByText('Test Description');
    expect(description).toHaveClass('text-xl');
    expect(description).toHaveClass('text-muted-foreground');
  });
}); 